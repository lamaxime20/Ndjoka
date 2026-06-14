import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('/d3/') || id.includes('d3-') || id.includes('topojson-client')) {
              return 'd3-vendor';
            }
            if (id.includes('react-dom') || id.includes('/react/')) {
              return 'react-vendor';
            }
            if (id.includes('react-router-dom') || id.includes('react-router/')) {
              return 'router';
            }
            return 'vendor';
          }
        },
      },
    },
  },
})
