/* Web backup files (ADR-013): a Blob download and a hidden file input. */

export async function saveBackupFile(name: string, text: string): Promise<void> {
  const url = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/** Returns the picked file's text, or null when the learner cancels. */
export function pickBackupFile(): Promise<string | null> {
  return new Promise((resolve) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json,.json';
    input.onchange = () => {
      const file = input.files?.[0];
      resolve(file ? file.text() : null);
    };
    input.oncancel = () => resolve(null);
    input.click();
  });
}
