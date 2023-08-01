module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    // './node_modules/standard/eslintrc.json'
    './node_modules/ts-standard/eslintrc.json',

  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: './tsconfig.json' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'react/react-in-jsx-scope': 'off'
  }
}