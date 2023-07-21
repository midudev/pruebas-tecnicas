/** @brief Preferred TS-Standard rules. */
const preferredRules = {

  'padded-blocks': 'off',
  'padding-line-between-statements': [

    'error',

    { blankLine: 'always', prev: 'directive', next: '*' },
    { blankLine: 'any', prev: 'directive', next: 'directive' },

    { blankLine: 'always', prev: 'import', next: '*' },
    { blankLine: 'any', prev: 'import', next: 'import' },
    { blankLine: 'always', prev: 'export', next: '*' },
    { blankLine: 'any', prev: 'export', next: 'export' },

    { blankLine: 'any', prev: '*', next: 'return' },
    { blankLine: 'always', prev: ['case', 'default'], next: '*' },

    { blankLine: 'always', prev: '*', next: 'block-like' },
    { blankLine: 'always', prev: '*', next: 'block' }
  ]
}

/** @brief Configuration for .svelte files. */
const svelteOverride = {

  extends: 'plugin:svelte/recommended',
  files: '*.svelte',

  parser: 'svelte-eslint-parser',
  parserOptions: {

    parser: '@typescript-eslint/parser'
  },

  rules: {

    'svelte/infinite-reactive-loop': 'error',
    'svelte/no-dom-manipulating': 'error',
    'svelte/no-dupe-on-directives': 'error',
    'svelte/no-dupe-use-directives': 'error',

    'svelte/require-store-callbacks-use-set-param': 'error',
    'svelte/block-lang': ['error', {

      script: 'ts',
      style: 'postcss'
    }],

    'svelte/no-target-blank': 'error',
    'svelte/button-has-type': 'error',
    'svelte/no-useless-mustaches': 'error',

    'svelte/no-reactive-literals': 'error',
    'svelte/require-event-dispatcher-types': 'error',
    'svelte/require-optimized-style-attribute': 'error',
    'svelte/require-stores-init': 'error',

    'svelte/first-attribute-linebreak': 'error',
    'svelte/prefer-style-directive': 'error',
    'svelte/no-extra-reactive-curlies': 'error',

    'svelte/html-quotes': ['error', {

      prefer: 'single',
      dynamic: {

        quoted: false,
        avoidInvalidUnquotedInHTML: true
      }
    }],

    'svelte/indent': 'error',
    'svelte/html-closing-bracket-spacing': 'error',
    'svelte/mustache-spacing': ['error', {

      textExpressions: 'always',
      attributesAndProps: 'always',
      directiveExpressions: 'always'
    }],

    'svelte/shorthand-attribute': 'error',
    'svelte/shorthand-directive': 'error',
    'svelte/spaced-html-comment': 'error',
    'svelte/no-trailing-spaces': 'error'
  }
}

/** @brief Specific settings for the ESLint Svelte Plugin. */
const svelteSettings = {

  compileOptions: {

    postcss: { configFilePath: './postcss.config.js' }
  }
}

module.exports = {

  env: {

    browser: true,
    es2021: true
  },

  extends: [

    'eslint:recommended',
    'standard-with-typescript',

    'plugin:jsx-a11y/strict'
  ],

  overrides: [svelteOverride],
  plugins: ['@typescript-eslint', 'jsx-a11y'],
  parser: '@typescript-eslint/parser',

  parserOptions: {

    project: './tsconfig.json',
    extraFileExtensions: ['.svelte']
  },

  root: true,
  rules: preferredRules,

  settings: {

    svelte: svelteSettings
  }
}
