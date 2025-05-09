import { fileURLToPath, URL } from 'node:url';
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [ViteImageOptimizer(), react()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
    ]
  }
})
