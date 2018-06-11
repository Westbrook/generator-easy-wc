module.exports = {
  "env": {
    "es6": true
  },
  "parser": "babel-eslint",
  "extends": "google",
  "parserOptions": {
    "sourceType": "module",
  },
  "rules": {
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "block-spacing": ["error", "always"],
  },
};
