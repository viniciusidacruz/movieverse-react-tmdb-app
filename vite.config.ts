import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
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
