module.exports = {
    root: true,
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true
    },
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
            arrowFunctions: true
        }
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
    settings: {
        react: {
            version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                paths: ['./src']
            },
            alias: {
                extensions: ['.js', 'jsx', '.ts', 'tsx', '.d.ts'],
                map: [['@/components', './src/components']]
            }
        }
    },
    rules: {
        'linebreak-style': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'off',
        'prettier/prettier': 'warn'
    }
};
