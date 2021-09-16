/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:jest/recommended",
    "plugin:node/recommended",
    "plugin:markdown/recommended",
    "plugin:react/recommended",
    "plugin:import/react",
    "plugin:import/errors",
    "plugin:mdx/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["jest", "node", "react", "markdown", "import"],
  rules: {
    "no-console": 0,
    "indent": ["error", 2, { SwitchCase: 1, ignoredNodes: ["ConditionalExpression"] }],
    "linebreak-style": ["error", "unix"],
    "quote-props": ["error", "consistent"],
    "semi": ["error", "always"],
    "react/prop-types": 0,
    "node/no-unsupported-features/es-syntax": ["error", { ignores: ["modules"] }],
    "no-unused-vars": ["error", { argsIgnorePattern: "props" }],
    "import/prefer-default-export": "off",
    "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
    "quotes": ["error", "double"],
    "eqeqeq": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "import/no-unresolved": 0,
    "arrow-body-style": 0,
    "node/no-missing-import": [
      "error",
      {
        tryExtensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
