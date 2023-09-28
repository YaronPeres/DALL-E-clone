// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path"; // Import the 'path' module

// Define an alias for the "pages" folder
const pagesAlias = path.resolve(__dirname, "src/pages"); // Set the correct path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": pagesAlias,
    },
  },
});
