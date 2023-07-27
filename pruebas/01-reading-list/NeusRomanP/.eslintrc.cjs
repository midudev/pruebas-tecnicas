module.exports = {
  env: {
    node: true,
    //"cypress/globals": true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
  ],
  rules: {
    'vue/require-default-prop': 'off',
    'quotes': ['error', 'single', { 'avoidEscape': true }]
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  }
}