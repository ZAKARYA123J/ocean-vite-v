import { defineConfig } from 'vite';  
import react from '@vitejs/plugin-react';  
import Inspect from 'vite-plugin-inspect';  
import { visualizer } from 'rollup-plugin-visualizer';  
import compression from 'vite-plugin-compression';  
import imagemin from 'vite-plugin-imagemin';  
import Sitemap from 'vite-plugin-sitemap'
import AutoImport from 'unplugin-auto-import/vite';
import imagePresets, { widthPreset } from 'vite-plugin-image-presets'
export default defineConfig({  
  base: '/', // base path  
  plugins: [  
    react(), 
  
    Sitemap({ hostname: 'https://oceanconnecting.ma' }),

    AutoImport({
      // Targets the libraries you want to auto-import from
      imports: [
        'react', // Automatically imports React functions like useState, useEffect
        'react-router-dom',
         'react-i18next',
      ],
      // Generate an auto-imports.d.ts file with types
      dts: './auto-imports.d.ts',
      eslintrc: {
        enabled: true, // Automatically generates an ESLint config
        filepath: './.eslintrc-auto-import.json', // Where the config is saved
      },
    }), 
   

    
  ],  
 
  build: {  
    rollupOptions: {  
      plugins: [  
        visualizer(), // Ajouter le plugin au rollup options  
      ],  
    },  
  },  
});