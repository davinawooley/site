import { resolve } from 'path'
import { defineConfig } from 'vite'
import { splitVendorChunkPlugin } from 'vite';



import path from 'path';
import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const root = resolve(__dirname, 'src');
// const outDir = resolve(__dirname, 'dist');

export default defineConfig({

  build: {
    chunkSizeWarningLimit:1500,
    // lib: {
      // entry: resolve(__dirname, 'lib/main.js'),
      // name: 'MyLib',
      // the proper extensions will be added
      // fileName: 'my-lib'
    // },
    rollupOptions: {

      // external: ['vue'],
    //   input: {
    //     main: resolve(root, 'index.html'),
    //     about: resolve(root,'about', 'index.html'),
    //   },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
        // globals: {
        //   vue: 'Vue'
        // }
      }
    }

  },
  base:'',
  plugins: [splitVendorChunkPlugin()]
})
