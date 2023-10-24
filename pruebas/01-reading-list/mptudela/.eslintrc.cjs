module.exports = {
    root: true,
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    env: {
        node: true,
        browser: true,
        es6: true,
        jest: true
    },
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
            arrowFunctions: true
        },
        project: './tsconfig.json'
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    plugins: ['@typescript-eslint', 'prettier'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                paths: ['./src']
            }
        }
    },
    rules: {
        'linebreak-style': 'off',
        'prettier/prettier': 'warn',
        'no-unused-vars': 'off'
    }
};
