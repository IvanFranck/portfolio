/* eslint-env node */
//A patch that improves how ESLint loads plugins when working in a monorepo with a reusable toolchain
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  globals: {
		defineProps: "readonly",
	},
  rules: {
    // Only allow debugger in development
    "no-debugger": process.env.NODE_ENV == "production" ? "warn" : "off",
    // Only allow `console.log` in development
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "import/no-relative-parent-imports": "off",
    "import/order": "off",
    eqeqeq: "off",
    camelcase: "off",
    "no-unused-vars": "off",
    "prettier/prettier": [
      "off",
      { singleQuote: true, endOfLine: "auto", tabWidth: 2 },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "vue/array-bracket-spacing": "error",
    "vue/arrow-spacing": "error",
    "vue/block-spacing": "error",
    "vue/brace-style": "error",
    "vue/camelcase": "off",
    "vue/comma-dangle": ["off"],
    "vue/component-name-in-template-casing": "off",
    "vue/dot-location": ["error", "property"],
    "vue/key-spacing": "error",
    "vue/keyword-spacing": "error",
    "vue/no-boolean-default": ["error", "default-false"],
    "vue/no-deprecated-scope-attribute": "error",
    "vue/no-empty-pattern": "error",
    "vue/object-curly-spacing": ["error", "always"],
    "vue/padding-line-between-blocks": "error",
    "vue/space-infix-ops": "error",
    "vue/space-unary-ops": "error",
    "vue/v-on-function-call": "error",
    "vue/v-slot-style": [
      "error",
      {
        atComponent: "v-slot",
        default: "v-slot",
        named: "longform",
      },
    ],
    "vue/valid-v-slot": "error",
    "vue/no-deprecated-slot-attribute": "off",
  },
};
