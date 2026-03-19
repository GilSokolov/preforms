import tsPlugin from "@typescript-eslint/eslint-plugin";
import angularPlugin from "@angular-eslint/eslint-plugin";
import angularTemplatePlugin from "@angular-eslint/eslint-plugin-template";

export default [
  {
    files: ["*.ts"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
        createDefaultProgram: true,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "@angular-eslint": angularPlugin,
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@angular-eslint/recommended",
    ],
    rules: {},
  },
  {
    files: ["*.html"],
    plugins: {
      "@angular-eslint/template": angularTemplatePlugin,
    },
    extends: ["plugin:@angular-eslint/template/recommended"],
    rules: {},
  },
];
