module.exports = {
  extends: [
    'next/core-web-vitals',
    './node_modules/ts-standard/eslintrc.json',
    'prettier'
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
}
