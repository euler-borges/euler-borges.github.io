import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/euler-borges.github.io/",
  plugins: [react()],
});
