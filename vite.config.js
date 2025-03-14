import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // This matches the distDir in your vercel.json
    rollupOptions: {
      input: './index.html',
    },
  },
});
