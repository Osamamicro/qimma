// Extends app.json. EXPO_BASE_URL lets the web build live under a sub-path
// (GitHub Pages serves this repo at /qimma) while local dev stays at "/".
module.exports = ({ config }) => ({
  ...config,
  experiments: {
    ...config.experiments,
    baseUrl: process.env.EXPO_BASE_URL ?? '',
  },
});
