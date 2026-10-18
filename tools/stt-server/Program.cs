using NAudio.Wave;
using Whisper.net;
using Whisper.net.LibraryLoader;

// qimma-stt (ADR-015): transcribes a speaking-task recording from the Qimma app with a local
// Whisper model. OpenAI-style endpoint: POST /v1/audio/transcriptions, multipart field "file".
// Audio is transient: the upload is decoded from a temp file that is deleted before replying,
// and nothing is logged except timings.
//
// Settings (environment variables):
//   QIMMA_WHISPER_MODEL  ggml model path; default is the model the Mudawwin app already downloaded
//   QIMMA_STT_URLS       listen address; default http://0.0.0.0:8178 so phones on the LAN and the
//                        Android emulator (http://10.0.2.2:8178) can reach it

const long MaxUploadBytes = 10 * 1024 * 1024; // a 2-minute AAC answer is ~2 MB
const int MaxSeconds = 150; // longest PTE speaking window is 120 s

var modelPath = Environment.GetEnvironmentVariable("QIMMA_WHISPER_MODEL")
    ?? Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "NoteTaker", "models", "ggml-largev3turbo-q5_0.bin");
if (!File.Exists(modelPath))
{
    Console.Error.WriteLine($"Whisper model not found: {modelPath}. Set QIMMA_WHISPER_MODEL to a ggml model file.");
    return 1;
}

var builder = WebApplication.CreateBuilder(args);
builder.WebHost.UseUrls(Environment.GetEnvironmentVariable("QIMMA_STT_URLS") ?? "http://0.0.0.0:8178");
builder.WebHost.ConfigureKestrel(k => k.Limits.MaxRequestBodySize = MaxUploadBytes);
builder.Logging.SetMinimumLevel(LogLevel.Warning);
var app = builder.Build();

// Prefer the GPU (Vulkan, incl. integrated graphics), then the CPU.
RuntimeOptions.RuntimeLibraryOrder = [RuntimeLibrary.Vulkan, RuntimeLibrary.Cpu];
using var factory = WhisperFactory.FromPath(modelPath);
// One transcription at a time: the model is CPU-bound and shared.
var gate = new SemaphoreSlim(1, 1);
var whisperFormat = new WaveFormat(16000, 16, 1);

app.MapGet("/health", () => Results.Ok(new { ok = true, model = Path.GetFileName(modelPath) }));

app.MapPost("/v1/audio/transcriptions", async (HttpRequest request, CancellationToken ct) =>
{
    if (!request.HasFormContentType) return Results.BadRequest(new { error = "Send multipart/form-data with a 'file' field." });
    var form = await request.ReadFormAsync(ct);
    var file = form.Files.GetFile("file");
    if (file is null || file.Length == 0) return Results.BadRequest(new { error = "Missing 'file'." });
    var language = form["language"].FirstOrDefault() is { Length: > 0 } l ? l : "en";

    var extension = Path.GetExtension(file.FileName) is { Length: > 1 } ext ? ext : ".m4a"; // phones record AAC in MP4
    var temp = Path.Combine(Path.GetTempPath(), $"qimma-stt-{Guid.NewGuid():N}{extension}");
    var started = DateTime.UtcNow;
    await gate.WaitAsync(ct);
    try
    {
        await using (var target = File.Create(temp)) await file.CopyToAsync(target, ct);

        // Decode (AAC/M4A, WAV, MP3, WebM where Media Foundation supports it) to 16 kHz mono WAV in memory.
        using var wav = new MemoryStream();
        TimeSpan duration;
        using (var reader = new MediaFoundationReader(temp))
        {
            duration = reader.TotalTime;
            if (duration.TotalSeconds > MaxSeconds) return Results.BadRequest(new { error = $"Recording longer than {MaxSeconds} s." });
            using var resampler = new MediaFoundationResampler(reader, whisperFormat) { ResamplerQuality = 60 };
            WaveFileWriter.WriteWavFileToStream(wav, resampler);
        }
        wav.Position = 0;

        using var processor = factory.CreateBuilder().WithLanguage(language).WithProbabilities().WithThreads(Environment.ProcessorCount).Build();
        var text = new List<string>();
        var probabilities = new List<float>();
        await foreach (var segment in processor.ProcessAsync(wav, ct))
        {
            text.Add(segment.Text.Trim());
            probabilities.Add(segment.Probability);
        }
        var transcript = string.Join(' ', text.Where(t => t.Length > 0)).Trim();
        Console.WriteLine($"transcribed {duration.TotalSeconds:F1}s of audio in {(DateTime.UtcNow - started).TotalSeconds:F1}s");
        return Results.Ok(new
        {
            text = transcript,
            duration = duration.TotalSeconds,
            // Mean segment probability: a rough 0..1 confidence (the app keeps pronunciation unscored).
            confidence = probabilities.Count > 0 ? probabilities.Average() : (float?)null,
        });
    }
    catch (Exception ex) when (ex is not OperationCanceledException)
    {
        Console.Error.WriteLine($"transcription failed: {ex.GetType().Name}");
        return Results.Problem("Could not transcribe this recording.", statusCode: 422);
    }
    finally
    {
        gate.Release();
        try { File.Delete(temp); } catch { /* best effort; temp folder is cleaned by Windows */ }
    }
}).DisableAntiforgery();

Console.WriteLine($"qimma-stt using {Path.GetFileName(modelPath)}, runtime {RuntimeOptions.LoadedLibrary}");
await app.RunAsync();
return 0;
