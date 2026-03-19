import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    files: ["*.ts"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  },
];
