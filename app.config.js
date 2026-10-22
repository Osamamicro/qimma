// Extends app.json. EXPO_BASE_URL lets the web build live under a sub-path
// (GitHub Pages serves this repo at /qimma) while local dev stays at "/".
// Plain HTTP is allowed only in the internal "apk" EAS profile, so the phone can reach the
// owner's PC services (Whisper, Ollama) on the home network; other builds keep Android's
// default (cleartext off).
module.exports = ({ config }) => ({
  ...config,
  experiments: {
    ...config.experiments,
    baseUrl: process.env.EXPO_BASE_URL ?? '',
  },
  plugins:
    process.env.EAS_BUILD_PROFILE === 'apk'
      ? [...config.plugins, ['expo-build-properties', { android: { usesCleartextTraffic: true } }]]
      : config.plugins,
});
