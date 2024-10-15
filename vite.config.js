import { defineConfig } from 'vite';  
import react from '@vitejs/plugin-react';  
import Inspect from 'vite-plugin-inspect';  
import { visualizer } from 'rollup-plugin-visualizer';  
import compression from 'vite-plugin-compression';  
import imagemin from 'vite-plugin-imagemin';  

export default defineConfig({  
  base: '/', // base path  
  plugins: [  
    react(),  
    Inspect(),  
    imagemin({  
      verbose: true, // Afficher un log dans la console pour le débogage  
      disable: false, // Vrais si vous souhaitez désactiver en mode développement  
      plugins: [  
        {  
          // Configuration pour JPEG  
          name: 'imagemin-mozjpeg',  
          options: {  
            quality: 75,  
          },  
        },  
        {  
          // Configuration pour PNG  
          name: 'imagemin-pngquant',  
          options: {  
            quality: [0.6, 0.8],  
          },  
        },  
        {  
          // Configuration pour GIF  
          name: 'imagemin-gifsicle',  
          options: {  
            optimizationLevel: 2,  
          },  
        },  
        {  
          // Configuration pour WebP  
          name: 'imagemin-webp',  
          options: {  
            quality: 75,  
          },  
        },  
      ],  
    }),  
    compression({  
      verbose: true, // Log messages when files are compressed  
      disable: false, // Set to true to disable compression  
      threshold: 10240, // Taille minimale pour compression  
      algorithm: 'gzip', // Algorithme de compression  
      ext: '.gz', // Extension pour fichiers compressés  
    }),  
    visualizer({  
      open: true, // Ouvrir automatiquement le visualiseur dans le navigateur  
      filename: 'stats.html', // Fichier de sortie du visuel  
      gzipSize: true, // Afficher la taille de la bundle gzippée  
      brotliSize: true, // Afficher la taille de la bundle Brotli-compressée  
    }),  
  ],  
  resolve: {  
    alias: {  
      '@': '/src', // alias pour le dossier src  
    },  
  },  
  build: {  
    rollupOptions: {  
      plugins: [  
        visualizer(), // Ajouter le plugin au rollup options  
      ],  
    },  
  },  
});