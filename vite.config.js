import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/subscriber/', // base path
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // alias
    },
  },
});
