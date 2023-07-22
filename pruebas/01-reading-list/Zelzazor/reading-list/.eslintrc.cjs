module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
        "tsconfigRootDir": __dirname,
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/triple-slash-reference": "off",
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "ignorePatterns": ['.eslintrc.cjs', 'tailwind.config.js', 'postcss.config.js', 'vite.config.ts'],
}
