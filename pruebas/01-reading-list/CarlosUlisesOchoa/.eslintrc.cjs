module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    './node_modules/standard/eslintrc.json',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'node_modules',
    '**/*.svg',
    '**/*.css',
    '**/*.json',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    react: {
      version: '18.2',
    },
    'import/resolver': {
      alias: {
        map: [['@/', 'src/']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off',
    'import/no-duplicates': 'off',
    quotes: 'off',
    'block-spacing': 'off',
    'no-lone-blocks': 'off',
    'import/first': 'off',
    'object-curly-spacing': 'off',
    'jsx-quotes': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'space-before-function-paren': 'off',
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    'no-multiple-empty-lines': 'off',
    'eol-last': 'off',
    'multiline-ternary': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'only-multiline',
        exports: 'only-multiline',
        functions: 'ignore',
      },
    ],
  },
}
