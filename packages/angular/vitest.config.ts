import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@preforms/ts": resolve(__dirname, "../ts/src/index.ts"),
    },
  },
  test: {
    environment: "node",
    include: ["src/**/*.spec.ts"],
    setupFiles: ["./vitest.setup.ts"],
  },
});
