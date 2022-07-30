import { defineConfig } from 'vite'
import { splitVendorChunkPlugin } from 'vite'


export default defineConfig({
  build: {
    chunkSizeWarningLimit:1500,
    rollupOptions: {

      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
  // base:'',

  base: process.env.NODE_ENV === 'production'
          ? './' // prod
          : '/', // dev  plugins: [splitVendorChunkPlugin()]
})
