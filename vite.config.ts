import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  base: "/Huanhahs/",
  plugins: [react()],
  root: "client",
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
