module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "key-spacing": [
      "error",
      {
        "mode": "minimum"
      }
    ],
    "space-before-function-paren": [
      "error",
      "always"
    ],
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "comma-dangle": [
      "error",
      "always-multiline"
    ],

    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-unused-vars": [
      "error",
      {
        "args": "none",
        "ignoreRestSiblings": true,
      }
    ],
    "no-invalid-this": [
      "off"
    ],
    "react/display-name": [
      "off"
    ],
    "react/prop-types": [
      "off"
    ],
    "react/jsx-indent-props": [
      2,4
    ],
  },
  'settings': {
    'react': {
      version: '999.999.999'
    }
  }
};
