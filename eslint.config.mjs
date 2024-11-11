import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from 'eslint-config-prettier';


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    rules: {
      "no-unused-vars": "off",
      "no-undef": "error",
      "semi": ["error", "always", { "omitLastInOneLineBlock": false }],
      "comma-dangle": ["error", "never"],
      quotes: ["error", "double"],
      "indent": ["error", "tab"],
      "@typescript-eslint/no-restricted-types": "off",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "comma-spacing": "error",
      "no-mixed-spaces-and-tabs": "error",
      "array-bracket-spacing": ["error", "never"],
    },
    ignores: ["build", "eslint.config.mjs"]
  }

];