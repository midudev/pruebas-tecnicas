module.exports = {
  reportUnusedDisableDirectives: true,
  extends: [
    'prettier',
    'next',
    'airbnb',
    'airbnb/hooks',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:sonarjs/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'jest',
    'react',
    '@typescript-eslint',
    'spellcheck',
    '@dspot/eslint-plugin',
    'sonarjs',
  ],
  rules: {
    '@dspot/no-complex-logic-in-view-attributes': 2,
    '@dspot/no-method-declaration-in-view': 2,
    '@dspot/no-react-hooks-in-view': 2,
    '@dspot/no-prop-object-from-custom-hook-spread': 2,
    '@dspot/require-props-object': 2,
    'sonarjs/cognitive-complexity': 2,
    'sonarjs/no-duplicate-string': 2,

    'import/no-named-as-default': 0,
    'import/extensions': 0,
    'react/react-in-jsx-scope': 0,
    'no-plusplus': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 2,

    'react-hooks/exhaustive-deps': 1,
    'jsx-a11y/no-noninteractive-element-interactions': 1,
    'jsx-a11y/media-has-caption': [1, {
      audio: ['Audio'],
      video: ['Video'],
      track: ['Track'],
    }],
    'no-undef': 1,
    'linebreak-style': 1,
    'import/no-unresolved': 1,
    'no-param-reassign': 1,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.ts',
          '.tsx',
        ],
      },
    ],
    'spellcheck/spell-checker': [
      2,
      {
        comments: true,
        strings: true,
        identifiers: true,
        templates: true,
        lang: 'en_US',
        skipWords: [
          'gql',
          'glb',
          'fov',
          'jsx',
          'ico',
          'svg',
          'ssr',
          'glb',
          'fov',
          'idx',
          'xml',
          'str',
          'sdk',
          'ctx',
          'jpg',
          'tsx',
          'mdx',
          'lang',
          'gsap',
          'href',
          'rect',
          'func',
          'devs',
          'proj',
          'ecma',
          'dspot',
          'latin',
          'jsdom',
          'vercel',
          'Vercel',
          'airbnb',
          'mailto',
          'resize',
          'mailto',
          'formik',
          'globals',
          'sonarjs',
          'favicon',
          'semibold',
          'tsconfig',
          'plusplus',
          'textarea',
          'pathname',
          'noopener',
          'linebreak',
          'noreferrer',
          'tailwindcss',
          'webmanifest',
        ],
        skipIfMatch: [
          'http://[^s]*', // url
          '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$', // email addresses
          '^/\\w+$', // "/something" typical url endpoint name
          // eslint rule names
          'function-paren-newline',
          'no-undef',
          'no-noninteractive-tabindex',
          'no-noninteractive-element-interactions',
          'jest-dom/prefer-to-have-style',
          'max-len',
        ],
        skipWordIfMatch: [
          '^foobar.*$',
          '#[0-9a-f]+', // hexadecimal values for colors
          '^[0-9]+\\w{1,3}$', // measurement units (px vh)
          '^re\\w+$', // "re" prefix allowed to be fixed together with the words
        ],
        minLength: 3,
      },
    ],
    'react/no-unknown-property': [
      1,
      {
        ignore: [
          'dispose',
          'castShadow',
          'receiveShadow',
          'geometry',
          'material',
          'rotation',
          'intensity',
          'position',
          'angle',
          'penumbra',
          'decay',
        ],
      },
    ],
  },
};
