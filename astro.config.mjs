// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'file',
    inlineStylesheets: "always",
  },
  image: {
    domains: ["uploads.myles.garden"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
