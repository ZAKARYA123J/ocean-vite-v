// vite.config.js
import { defineConfig } from "file:///C:/Users/admin/vite-project/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/admin/vite-project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import Inspect from "file:///C:/Users/admin/vite-project/node_modules/vite-plugin-inspect/dist/index.mjs";
import { visualizer } from "file:///C:/Users/admin/vite-project/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import compression from "file:///C:/Users/admin/vite-project/node_modules/vite-plugin-compression/dist/index.mjs";
import imagemin from "file:///C:/Users/admin/vite-project/node_modules/vite-plugin-imagemin/dist/index.mjs";
import AutoImport from "file:///C:/Users/admin/vite-project/node_modules/unplugin-auto-import/dist/vite.js";
var vite_config_default = defineConfig({
  base: "/",
  // base path  
  plugins: [
    react(),
    AutoImport({
      // Targets the libraries you want to auto-import from
      imports: [
        "react",
        // Automatically imports React functions like useState, useEffect
        "react-router-dom",
        // Automatically imports React Router functions like useHistory
        "react-scroll"
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
      ]
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
      ext: ".gz"
      // Extension pour fichiers compressés  
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhZG1pblxcXFx2aXRlLXByb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGFkbWluXFxcXHZpdGUtcHJvamVjdFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvYWRtaW4vdml0ZS1wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7ICBcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JzsgIFxyXG5pbXBvcnQgSW5zcGVjdCBmcm9tICd2aXRlLXBsdWdpbi1pbnNwZWN0JzsgIFxyXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJzsgIFxyXG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nOyAgXHJcbmltcG9ydCBpbWFnZW1pbiBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZW1pbic7ICBcclxuXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnO1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoeyAgXHJcbiAgYmFzZTogJy8nLCAvLyBiYXNlIHBhdGggIFxyXG4gIHBsdWdpbnM6IFsgIFxyXG4gICAgcmVhY3QoKSwgXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgLy8gVGFyZ2V0cyB0aGUgbGlicmFyaWVzIHlvdSB3YW50IHRvIGF1dG8taW1wb3J0IGZyb21cclxuICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICdyZWFjdCcsIC8vIEF1dG9tYXRpY2FsbHkgaW1wb3J0cyBSZWFjdCBmdW5jdGlvbnMgbGlrZSB1c2VTdGF0ZSwgdXNlRWZmZWN0XHJcbiAgICAgICAgJ3JlYWN0LXJvdXRlci1kb20nLCAvLyBBdXRvbWF0aWNhbGx5IGltcG9ydHMgUmVhY3QgUm91dGVyIGZ1bmN0aW9ucyBsaWtlIHVzZUhpc3RvcnlcclxuICAgICAgICAncmVhY3Qtc2Nyb2xsJyxcclxuICAgICAgXSxcclxuICAgICAgLy8gR2VuZXJhdGUgYW4gYXV0by1pbXBvcnRzLmQudHMgZmlsZSB3aXRoIHR5cGVzXHJcbiAgICAgIGR0czogJy4vYXV0by1pbXBvcnRzLmQudHMnLFxyXG4gICAgICBlc2xpbnRyYzoge1xyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsIC8vIEF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVzIGFuIEVTTGludCBjb25maWdcclxuICAgICAgICBmaWxlcGF0aDogJy4vLmVzbGludHJjLWF1dG8taW1wb3J0Lmpzb24nLCAvLyBXaGVyZSB0aGUgY29uZmlnIGlzIHNhdmVkXHJcbiAgICAgIH0sXHJcbiAgICB9KSwgXHJcbiAgICBJbnNwZWN0KCksICBcclxuICAgIGltYWdlbWluKHsgIFxyXG4gICAgICB2ZXJib3NlOiB0cnVlLCAvLyBBZmZpY2hlciB1biBsb2cgZGFucyBsYSBjb25zb2xlIHBvdXIgbGUgZFx1MDBFOWJvZ2FnZSAgXHJcbiAgICAgIGRpc2FibGU6IGZhbHNlLCAvLyBWcmFpcyBzaSB2b3VzIHNvdWhhaXRleiBkXHUwMEU5c2FjdGl2ZXIgZW4gbW9kZSBkXHUwMEU5dmVsb3BwZW1lbnQgIFxyXG4gICAgICBwbHVnaW5zOiBbICBcclxuICAgICAgICB7ICBcclxuICAgICAgICAgIC8vIENvbmZpZ3VyYXRpb24gcG91ciBKUEVHICBcclxuICAgICAgICAgIG5hbWU6ICdpbWFnZW1pbi1tb3pqcGVnJywgIFxyXG4gICAgICAgICAgb3B0aW9uczogeyAgXHJcbiAgICAgICAgICAgIHF1YWxpdHk6IDc1LCAgXHJcbiAgICAgICAgICB9LCAgXHJcbiAgICAgICAgfSwgIFxyXG4gICAgICAgIHsgIFxyXG4gICAgICAgICAgLy8gQ29uZmlndXJhdGlvbiBwb3VyIFBORyAgXHJcbiAgICAgICAgICBuYW1lOiAnaW1hZ2VtaW4tcG5ncXVhbnQnLCAgXHJcbiAgICAgICAgICBvcHRpb25zOiB7ICBcclxuICAgICAgICAgICAgcXVhbGl0eTogWzAuNiwgMC44XSwgIFxyXG4gICAgICAgICAgfSwgIFxyXG4gICAgICAgIH0sICBcclxuICAgICAgICB7ICBcclxuICAgICAgICAgIC8vIENvbmZpZ3VyYXRpb24gcG91ciBHSUYgIFxyXG4gICAgICAgICAgbmFtZTogJ2ltYWdlbWluLWdpZnNpY2xlJywgIFxyXG4gICAgICAgICAgb3B0aW9uczogeyAgXHJcbiAgICAgICAgICAgIG9wdGltaXphdGlvbkxldmVsOiAyLCAgXHJcbiAgICAgICAgICB9LCAgXHJcbiAgICAgICAgfSwgIFxyXG4gICAgICAgIHsgIFxyXG4gICAgICAgICAgLy8gQ29uZmlndXJhdGlvbiBwb3VyIFdlYlAgIFxyXG4gICAgICAgICAgbmFtZTogJ2ltYWdlbWluLXdlYnAnLCAgXHJcbiAgICAgICAgICBvcHRpb25zOiB7ICBcclxuICAgICAgICAgICAgcXVhbGl0eTogNzUsICBcclxuICAgICAgICAgIH0sICBcclxuICAgICAgICB9LCAgXHJcbiAgICAgIF0sICBcclxuICAgIH0pLCAgXHJcbiAgIFxyXG4gICAgY29tcHJlc3Npb24oeyAgXHJcbiAgICAgIHZlcmJvc2U6IHRydWUsIC8vIExvZyBtZXNzYWdlcyB3aGVuIGZpbGVzIGFyZSBjb21wcmVzc2VkICBcclxuICAgICAgZGlzYWJsZTogZmFsc2UsIC8vIFNldCB0byB0cnVlIHRvIGRpc2FibGUgY29tcHJlc3Npb24gIFxyXG4gICAgICB0aHJlc2hvbGQ6IDEwMjQwLCAvLyBUYWlsbGUgbWluaW1hbGUgcG91ciBjb21wcmVzc2lvbiAgXHJcbiAgICAgIGFsZ29yaXRobTogJ2d6aXAnLCAvLyBBbGdvcml0aG1lIGRlIGNvbXByZXNzaW9uICBcclxuICAgICAgZXh0OiAnLmd6JywgLy8gRXh0ZW5zaW9uIHBvdXIgZmljaGllcnMgY29tcHJlc3NcdTAwRTlzICBcclxuICAgIH0pLCAgXHJcbiAgICB2aXN1YWxpemVyKHsgIFxyXG4gICAgICBvcGVuOiB0cnVlLCAvLyBPdXZyaXIgYXV0b21hdGlxdWVtZW50IGxlIHZpc3VhbGlzZXVyIGRhbnMgbGUgbmF2aWdhdGV1ciAgXHJcbiAgICAgIGZpbGVuYW1lOiAnc3RhdHMuaHRtbCcsIC8vIEZpY2hpZXIgZGUgc29ydGllIGR1IHZpc3VlbCAgXHJcbiAgICAgIGd6aXBTaXplOiB0cnVlLCAvLyBBZmZpY2hlciBsYSB0YWlsbGUgZGUgbGEgYnVuZGxlIGd6aXBwXHUwMEU5ZSAgXHJcbiAgICAgIGJyb3RsaVNpemU6IHRydWUsIC8vIEFmZmljaGVyIGxhIHRhaWxsZSBkZSBsYSBidW5kbGUgQnJvdGxpLWNvbXByZXNzXHUwMEU5ZSAgXHJcbiAgICB9KSwgIFxyXG4gIF0sICBcclxuICByZXNvbHZlOiB7ICBcclxuICAgIGFsaWFzOiB7ICBcclxuICAgICAgJ0AnOiAnL3NyYycsIC8vIGFsaWFzIHBvdXIgbGUgZG9zc2llciBzcmMgIFxyXG4gICAgfSwgIFxyXG4gIH0sICBcclxuICBidWlsZDogeyAgXHJcbiAgICByb2xsdXBPcHRpb25zOiB7ICBcclxuICAgICAgcGx1Z2luczogWyAgXHJcbiAgICAgICAgdmlzdWFsaXplcigpLCAvLyBBam91dGVyIGxlIHBsdWdpbiBhdSByb2xsdXAgb3B0aW9ucyAgXHJcbiAgICAgIF0sICBcclxuICAgIH0sICBcclxuICB9LCAgXHJcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlEsU0FBUyxvQkFBb0I7QUFDeFMsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sYUFBYTtBQUNwQixTQUFTLGtCQUFrQjtBQUMzQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGNBQWM7QUFFckIsT0FBTyxnQkFBZ0I7QUFDdkIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUE7QUFBQSxNQUVULFNBQVM7QUFBQSxRQUNQO0FBQUE7QUFBQSxRQUNBO0FBQUE7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBO0FBQUEsTUFFQSxLQUFLO0FBQUEsTUFDTCxVQUFVO0FBQUEsUUFDUixTQUFTO0FBQUE7QUFBQSxRQUNULFVBQVU7QUFBQTtBQUFBLE1BQ1o7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQTtBQUFBLE1BQ1QsU0FBUztBQUFBO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBO0FBQUEsVUFFRSxNQUFNO0FBQUEsVUFDTixTQUFTO0FBQUEsWUFDUCxTQUFTO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUE7QUFBQSxVQUVFLE1BQU07QUFBQSxVQUNOLFNBQVM7QUFBQSxZQUNQLFNBQVMsQ0FBQyxLQUFLLEdBQUc7QUFBQSxVQUNwQjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUE7QUFBQSxVQUVFLE1BQU07QUFBQSxVQUNOLFNBQVM7QUFBQSxZQUNQLG1CQUFtQjtBQUFBLFVBQ3JCO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQTtBQUFBLFVBRUUsTUFBTTtBQUFBLFVBQ04sU0FBUztBQUFBLFlBQ1AsU0FBUztBQUFBLFVBQ1g7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBRUQsWUFBWTtBQUFBLE1BQ1YsU0FBUztBQUFBO0FBQUEsTUFDVCxTQUFTO0FBQUE7QUFBQSxNQUNULFdBQVc7QUFBQTtBQUFBLE1BQ1gsV0FBVztBQUFBO0FBQUEsTUFDWCxLQUFLO0FBQUE7QUFBQSxJQUNQLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQTtBQUFBLE1BQ04sVUFBVTtBQUFBO0FBQUEsTUFDVixVQUFVO0FBQUE7QUFBQSxNQUNWLFlBQVk7QUFBQTtBQUFBLElBQ2QsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUs7QUFBQTtBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUCxXQUFXO0FBQUE7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
