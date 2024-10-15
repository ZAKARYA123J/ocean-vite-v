import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Inspect from 'vite-plugin-inspect';
import { visualizer } from 'rollup-plugin-visualizer';
import compression from 'vite-plugin-compression';
// import { createImaginPlugin } from "vite-plugin-imagemin";
export default defineConfig({
  base: '/', // base path
  plugins: [react(),
    // createImaginPlugin({
    //   // Options
    //   verbose: true, // Log messages when images are optimized
    //   gifsicle: {
    //     interlaced: false, // Disable interlacing for gifs
    //   },
    //   optipng: {
    //     optimizationLevel: 5, // PNG optimization level (0-7)
    //   },
    //   mozjpeg: {
    //     quality: 75, // JPEG quality (0-100)
    //   },
    //   webp: {
    //     quality: 75, // WebP quality (0-100)
    //   },
    //   // You can add more options for other image formats like svg, etc.
    // }),
    Inspect(),
    compression({
      // Options
      verbose: true, // Log messages when files are compressed
      disable: false, // Set to true to disable compression
      threshold: 10240, // Only files larger than this size (in bytes) will be compressed
      algorithm: 'gzip', // Compression algorithm to use (gzip or brotli)
      ext: '.gz', // Extension to add to compressed files
    }),
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
