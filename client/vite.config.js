// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Define an alias for the "pages" folder
const pagesAlias = "/path/to/your/pages"; // Replace with the actual path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": pagesAlias,
    },
  },
});
