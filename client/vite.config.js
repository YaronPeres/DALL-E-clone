// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Define an alias for the "pages" folder
const pagesAlias = path.resolve(__dirname, "src/pages");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": pagesAlias,
    },
  },
});
