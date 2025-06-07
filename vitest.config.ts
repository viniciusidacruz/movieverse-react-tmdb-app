import * as path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.ts",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "src/@shared"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@home_module": path.resolve(__dirname, "src/modules/home"),
      "@favorites_module": path.resolve(__dirname, "src/modules/favorites"),
    },
  },
});
