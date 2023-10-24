module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    './node_modules/ts-standard/eslintrc.json',
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/promise-fuction-async': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'import/no-absolute-path': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
  },
}
