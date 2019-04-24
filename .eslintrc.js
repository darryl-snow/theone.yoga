module.exports = {
  "extends": ["airbnb", "plugin:jest/recommended"],
  "parser": "babel-eslint",
  "plugins": ["react", "import", "jest"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "strict": 0,
    "semi": ["error", "never"],
    "import/no-unresolved": 0,
    "import/extensions": ["error", "ignorePackages", {
      "js": "never",
      "mjs": "never",
      "jsx": "never"
    }],
    "jsx-a11y/anchor-is-valid": ["error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ]
    }],
    "react/jsx-uses-react": 2,
    "react/no-danger": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": 0,
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "jsx-a11y/label-has-for": 0
  }
};
