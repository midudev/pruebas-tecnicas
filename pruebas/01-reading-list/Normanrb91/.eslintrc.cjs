module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "standard-with-typescript",
  ],

  "plugins": ["react", "@typescript-eslint", "prettier"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json",
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": {
          "attributes": false
        }
      }
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/strict-boolean-expressions": "off"
  }
}
