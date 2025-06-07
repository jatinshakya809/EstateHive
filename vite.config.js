import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./", // Add this line to make paths relative
  plugins: [tailwindcss(), react()],
});
