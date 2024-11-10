import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "semi": ["error", "always", { "omitLastInOneLineBlock": false }],
      "comma-dangle": ["error", "never"],
      "indent": ["error", "tab"]
    },
    ignores: ["build", "eslint.config.mjs"]
  }
];