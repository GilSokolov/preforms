import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import angularPlugin from "@angular-eslint/eslint-plugin";
import js from "@eslint/js";

export default [
  { ignores: ["dist/**", "**/*.html"] },
  {
    ...js.configs.recommended,
    rules: {
      ...js.configs.recommended.rules,
      "no-undef": "off",
    },
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "@angular-eslint": angularPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...angularPlugin.configs.recommended.rules,
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-wrapper-object-types": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@angular-eslint/no-input-rename": "off",
      "@angular-eslint/prefer-inject": "off",
      "no-undef": "off",
    },
  },
];
