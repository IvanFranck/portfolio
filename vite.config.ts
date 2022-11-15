import {fileURLToPath, URL} from "url"

import { defineConfig } from 'vite'

// plugins
import vue from '@vitejs/plugin-vue'
import Pages from "vite-plugin-pages"; //for pages routing
import Components from "unplugin-vue-components/vite"; // for components auto import

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: "**/*.JPG",
  plugins: [vue(), Pages(), Components()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
