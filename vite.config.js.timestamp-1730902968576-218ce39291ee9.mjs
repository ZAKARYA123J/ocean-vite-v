// vite.config.js
import { defineConfig } from "file:///C:/Users/admin/ocean-vite2/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/admin/ocean-vite2/node_modules/@vitejs/plugin-react/dist/index.mjs";
import Inspect from "file:///C:/Users/admin/ocean-vite2/node_modules/vite-plugin-inspect/dist/index.mjs";
import { visualizer } from "file:///C:/Users/admin/ocean-vite2/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import compression from "file:///C:/Users/admin/ocean-vite2/node_modules/vite-plugin-compression/dist/index.mjs";
import imagemin from "file:///C:/Users/admin/ocean-vite2/node_modules/vite-plugin-imagemin/dist/index.mjs";
import Sitemap from "file:///C:/Users/admin/ocean-vite2/node_modules/vite-plugin-sitemap/dist/index.js";
import AutoImport from "file:///C:/Users/admin/ocean-vite2/node_modules/unplugin-auto-import/dist/vite.js";
var vite_config_default = defineConfig({
  base: "/",
  // base path  
  plugins: [
    react(),
    Sitemap({ hostname: "https://www.oceanconnecting.ma" }),
    AutoImport({
      // Targets the libraries you want to auto-import from
      imports: [
        "react",
        // Automatically imports React functions like useState, useEffect
        "react-router-dom",
        "react-i18next"
      ],
      // Generate an auto-imports.d.ts file with types
      dts: "./auto-imports.d.ts",
      eslintrc: {
        enabled: true,
        // Automatically generates an ESLint config
        filepath: "./.eslintrc-auto-import.json"
        // Where the config is saved
      }
    }),
    Inspect(),
    imagemin({
      verbose: true,
      // Afficher un log dans la console pour le débogage  
      disable: false,
      // Vrais si vous souhaitez désactiver en mode développement  
      plugins: [
        {
          // Configuration pour JPEG  
          name: "imagemin-mozjpeg",
          options: {
            quality: 75
          }
        },
        {
          // Configuration pour PNG  
          name: "imagemin-pngquant",
          options: {
            quality: [0.6, 0.8]
          }
        },
        {
          // Configuration pour GIF  
          name: "imagemin-gifsicle",
          options: {
            optimizationLevel: 2
          }
        },
        {
          // Configuration pour WebP  
          name: "imagemin-webp",
          options: {
            quality: 75
          }
        }
      ],
      outputDir: "./src/assets/images"
    }),
    compression({
      verbose: true,
      // Log messages when files are compressed  
      disable: false,
      // Set to true to disable compression  
      threshold: 10240,
      // Taille minimale pour compression  
      algorithm: "gzip",
      // Algorithme de compression  
      ext: ".gz",
      // Extension pour fichiers compressés  
      outputDir: "./src/assets/images"
    }),
    visualizer({
      open: true,
      // Ouvrir automatiquement le visualiseur dans le navigateur  
      filename: "stats.html",
      // Fichier de sortie du visuel  
      gzipSize: true,
      // Afficher la taille de la bundle gzippée  
      brotliSize: true
      // Afficher la taille de la bundle Brotli-compressée  
    })
  ],
  resolve: {
    alias: {
      "@": "/src"
      // alias pour le dossier src 
    }
  },
  build: {
    rollupOptions: {
      plugins: [
        visualizer()
        // Ajouter le plugin au rollup options  
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhZG1pblxcXFxvY2Vhbi12aXRlMlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYWRtaW5cXFxcb2NlYW4tdml0ZTJcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2FkbWluL29jZWFuLXZpdGUyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7ICBcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JzsgIFxyXG5pbXBvcnQgSW5zcGVjdCBmcm9tICd2aXRlLXBsdWdpbi1pbnNwZWN0JzsgIFxyXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJzsgIFxyXG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nOyAgXHJcbmltcG9ydCBpbWFnZW1pbiBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZW1pbic7ICBcclxuaW1wb3J0IFNpdGVtYXAgZnJvbSAndml0ZS1wbHVnaW4tc2l0ZW1hcCdcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSc7XHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7ICBcclxuICBiYXNlOiAnLycsIC8vIGJhc2UgcGF0aCAgXHJcbiAgcGx1Z2luczogWyAgXHJcbiAgICByZWFjdCgpLCBcclxuICAgIFNpdGVtYXAoeyBob3N0bmFtZTogJ2h0dHBzOi8vd3d3Lm9jZWFuY29ubmVjdGluZy5tYScgfSksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgLy8gVGFyZ2V0cyB0aGUgbGlicmFyaWVzIHlvdSB3YW50IHRvIGF1dG8taW1wb3J0IGZyb21cclxuICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICdyZWFjdCcsIC8vIEF1dG9tYXRpY2FsbHkgaW1wb3J0cyBSZWFjdCBmdW5jdGlvbnMgbGlrZSB1c2VTdGF0ZSwgdXNlRWZmZWN0XHJcbiAgICAgICAgJ3JlYWN0LXJvdXRlci1kb20nLFxyXG4gICAgICAgICAncmVhY3QtaTE4bmV4dCcsXHJcbiAgICAgIF0sXHJcbiAgICAgIC8vIEdlbmVyYXRlIGFuIGF1dG8taW1wb3J0cy5kLnRzIGZpbGUgd2l0aCB0eXBlc1xyXG4gICAgICBkdHM6ICcuL2F1dG8taW1wb3J0cy5kLnRzJyxcclxuICAgICAgZXNsaW50cmM6IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLCAvLyBBdXRvbWF0aWNhbGx5IGdlbmVyYXRlcyBhbiBFU0xpbnQgY29uZmlnXHJcbiAgICAgICAgZmlsZXBhdGg6ICcuLy5lc2xpbnRyYy1hdXRvLWltcG9ydC5qc29uJywgLy8gV2hlcmUgdGhlIGNvbmZpZyBpcyBzYXZlZFxyXG4gICAgICB9LFxyXG4gICAgfSksIFxyXG4gICAgSW5zcGVjdCgpLCAgXHJcbiAgICBpbWFnZW1pbih7ICBcclxuICAgICAgdmVyYm9zZTogdHJ1ZSwgLy8gQWZmaWNoZXIgdW4gbG9nIGRhbnMgbGEgY29uc29sZSBwb3VyIGxlIGRcdTAwRTlib2dhZ2UgIFxyXG4gICAgICBkaXNhYmxlOiBmYWxzZSwgLy8gVnJhaXMgc2kgdm91cyBzb3VoYWl0ZXogZFx1MDBFOXNhY3RpdmVyIGVuIG1vZGUgZFx1MDBFOXZlbG9wcGVtZW50ICBcclxuICAgICAgcGx1Z2luczogWyAgXHJcbiAgICAgICAgeyAgXHJcbiAgICAgICAgICAvLyBDb25maWd1cmF0aW9uIHBvdXIgSlBFRyAgXHJcbiAgICAgICAgICBuYW1lOiAnaW1hZ2VtaW4tbW96anBlZycsICBcclxuICAgICAgICAgIG9wdGlvbnM6IHsgIFxyXG4gICAgICAgICAgICBxdWFsaXR5OiA3NSwgIFxyXG4gICAgICAgICAgfSwgIFxyXG4gICAgICAgIH0sICBcclxuICAgICAgICB7ICBcclxuICAgICAgICAgIC8vIENvbmZpZ3VyYXRpb24gcG91ciBQTkcgIFxyXG4gICAgICAgICAgbmFtZTogJ2ltYWdlbWluLXBuZ3F1YW50JywgIFxyXG4gICAgICAgICAgb3B0aW9uczogeyAgXHJcbiAgICAgICAgICAgIHF1YWxpdHk6IFswLjYsIDAuOF0sICBcclxuICAgICAgICAgIH0sICBcclxuICAgICAgICB9LCAgXHJcbiAgICAgICAgeyAgXHJcbiAgICAgICAgICAvLyBDb25maWd1cmF0aW9uIHBvdXIgR0lGICBcclxuICAgICAgICAgIG5hbWU6ICdpbWFnZW1pbi1naWZzaWNsZScsICBcclxuICAgICAgICAgIG9wdGlvbnM6IHsgIFxyXG4gICAgICAgICAgICBvcHRpbWl6YXRpb25MZXZlbDogMiwgIFxyXG4gICAgICAgICAgfSwgIFxyXG4gICAgICAgIH0sICBcclxuICAgICAgICB7ICBcclxuICAgICAgICAgIC8vIENvbmZpZ3VyYXRpb24gcG91ciBXZWJQICBcclxuICAgICAgICAgIG5hbWU6ICdpbWFnZW1pbi13ZWJwJywgIFxyXG4gICAgICAgICAgb3B0aW9uczogeyAgXHJcbiAgICAgICAgICAgIHF1YWxpdHk6IDc1LCAgXHJcbiAgICAgICAgICB9LCAgXHJcbiAgICAgICAgfSwgIFxyXG4gICAgICBdLCAgXHJcbiAgICAgIG91dHB1dERpcjogJy4vc3JjL2Fzc2V0cy9pbWFnZXMnLFxyXG4gICAgfSksICBcclxuICAgXHJcbiAgICBjb21wcmVzc2lvbih7ICBcclxuICAgICAgdmVyYm9zZTogdHJ1ZSwgLy8gTG9nIG1lc3NhZ2VzIHdoZW4gZmlsZXMgYXJlIGNvbXByZXNzZWQgIFxyXG4gICAgICBkaXNhYmxlOiBmYWxzZSwgLy8gU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBjb21wcmVzc2lvbiAgXHJcbiAgICAgIHRocmVzaG9sZDogMTAyNDAsIC8vIFRhaWxsZSBtaW5pbWFsZSBwb3VyIGNvbXByZXNzaW9uICBcclxuICAgICAgYWxnb3JpdGhtOiAnZ3ppcCcsIC8vIEFsZ29yaXRobWUgZGUgY29tcHJlc3Npb24gIFxyXG4gICAgICBleHQ6ICcuZ3onLCAvLyBFeHRlbnNpb24gcG91ciBmaWNoaWVycyBjb21wcmVzc1x1MDBFOXMgIFxyXG4gICAgICBvdXRwdXREaXI6ICcuL3NyYy9hc3NldHMvaW1hZ2VzJyxcclxuICAgIH0pLCAgXHJcbiAgICB2aXN1YWxpemVyKHsgIFxyXG4gICAgICBvcGVuOiB0cnVlLCAvLyBPdXZyaXIgYXV0b21hdGlxdWVtZW50IGxlIHZpc3VhbGlzZXVyIGRhbnMgbGUgbmF2aWdhdGV1ciAgXHJcbiAgICAgIGZpbGVuYW1lOiAnc3RhdHMuaHRtbCcsIC8vIEZpY2hpZXIgZGUgc29ydGllIGR1IHZpc3VlbCAgXHJcbiAgICAgIGd6aXBTaXplOiB0cnVlLCAvLyBBZmZpY2hlciBsYSB0YWlsbGUgZGUgbGEgYnVuZGxlIGd6aXBwXHUwMEU5ZSAgXHJcbiAgICAgIGJyb3RsaVNpemU6IHRydWUsIC8vIEFmZmljaGVyIGxhIHRhaWxsZSBkZSBsYSBidW5kbGUgQnJvdGxpLWNvbXByZXNzXHUwMEU5ZSAgXHJcbiAgICB9KSwgIFxyXG4gIF0sICBcclxuICByZXNvbHZlOiB7ICBcclxuICAgIGFsaWFzOiB7ICBcclxuICAgICAgJ0AnOiAnL3NyYycsIC8vIGFsaWFzIHBvdXIgbGUgZG9zc2llciBzcmMgXHJcbiAgICB9LCAgXHJcbiAgfSwgIFxyXG4gIGJ1aWxkOiB7ICBcclxuICAgIHJvbGx1cE9wdGlvbnM6IHsgIFxyXG4gICAgICBwbHVnaW5zOiBbICBcclxuICAgICAgICB2aXN1YWxpemVyKCksIC8vIEFqb3V0ZXIgbGUgcGx1Z2luIGF1IHJvbGx1cCBvcHRpb25zICBcclxuICAgICAgXSwgIFxyXG4gICAgfSwgIFxyXG4gIH0sICBcclxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF3USxTQUFTLG9CQUFvQjtBQUNyUyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxhQUFhO0FBQ3BCLFNBQVMsa0JBQWtCO0FBQzNCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sY0FBYztBQUNyQixPQUFPLGFBQWE7QUFDcEIsT0FBTyxnQkFBZ0I7QUFDdkIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRLEVBQUUsVUFBVSxpQ0FBaUMsQ0FBQztBQUFBLElBQ3RELFdBQVc7QUFBQTtBQUFBLE1BRVQsU0FBUztBQUFBLFFBQ1A7QUFBQTtBQUFBLFFBQ0E7QUFBQSxRQUNDO0FBQUEsTUFDSDtBQUFBO0FBQUEsTUFFQSxLQUFLO0FBQUEsTUFDTCxVQUFVO0FBQUEsUUFDUixTQUFTO0FBQUE7QUFBQSxRQUNULFVBQVU7QUFBQTtBQUFBLE1BQ1o7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQTtBQUFBLE1BQ1QsU0FBUztBQUFBO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBO0FBQUEsVUFFRSxNQUFNO0FBQUEsVUFDTixTQUFTO0FBQUEsWUFDUCxTQUFTO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUE7QUFBQSxVQUVFLE1BQU07QUFBQSxVQUNOLFNBQVM7QUFBQSxZQUNQLFNBQVMsQ0FBQyxLQUFLLEdBQUc7QUFBQSxVQUNwQjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUE7QUFBQSxVQUVFLE1BQU07QUFBQSxVQUNOLFNBQVM7QUFBQSxZQUNQLG1CQUFtQjtBQUFBLFVBQ3JCO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQTtBQUFBLFVBRUUsTUFBTTtBQUFBLFVBQ04sU0FBUztBQUFBLFlBQ1AsU0FBUztBQUFBLFVBQ1g7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBVztBQUFBLElBQ2IsQ0FBQztBQUFBLElBRUQsWUFBWTtBQUFBLE1BQ1YsU0FBUztBQUFBO0FBQUEsTUFDVCxTQUFTO0FBQUE7QUFBQSxNQUNULFdBQVc7QUFBQTtBQUFBLE1BQ1gsV0FBVztBQUFBO0FBQUEsTUFDWCxLQUFLO0FBQUE7QUFBQSxNQUNMLFdBQVc7QUFBQSxJQUNiLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQTtBQUFBLE1BQ04sVUFBVTtBQUFBO0FBQUEsTUFDVixVQUFVO0FBQUE7QUFBQSxNQUNWLFlBQVk7QUFBQTtBQUFBLElBQ2QsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUs7QUFBQTtBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUCxXQUFXO0FBQUE7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
