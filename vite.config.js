import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { imagetools } from 'vite-imagetools';
import imagemin from 'vite-plugin-imagemin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  imagetools(),
  imagemin({
    jpg: { quality: 80 },
    // png: { compressionLevel: 6 },
    webp: { quality: 80 },
  }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // ← uses 'path'
    },
  },
  server: {
    host: true, // or '0.0.0.0'
    port: 5173,
    hmr: {
      clientPort: 5173
    }
  }
})
