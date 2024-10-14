import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Inspect from 'vite-plugin-inspect';
import { visualizer } from 'rollup-plugin-visualizer';
export default defineConfig({
  base: '/', // base path
  plugins: [react(),
    Inspect(),
    visualizer({
      open: true, // Automatically open the visualizer in the browser
      filename: 'stats.html', // The file where the visualization will be generated
      gzipSize: true, // Show the size of the gzipped bundle
      brotliSize: true, // Show the size of the Brotli-compressed bundle
    }),
  ],
  resolve: {
    alias: {
      '@': '/src', // alias
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        visualizer(), // Add the plugin to the Rollup options
      ],
    },
  },
});
