module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ["react-hooks"],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  rules: {
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/camelcase": 1,
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "react/jsx-key": "off",
    "react/jsx-space-before-closing": ["error", "always"],
    "react/jsx-equals-spacing": ["error", "never"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-console": ["warn"],
    "no-alert": ["warn"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "spaced-comment": ["error", "always", { markers: ["="] }],
    "object-curly-spacing": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "comma-spacing": ["error", { before: false, after: true }],
    camelcase: [1, { properties: "always" }]
  }
};
