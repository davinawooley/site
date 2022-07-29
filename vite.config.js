// import { defineConfig } from 'vite'
// export default defineConfig({
  // build: {
    // chunkSizeWarningLimit:1500,
    // rollupOptions: {
        // output:{
//             manualChunks(id) {
//               if (id.includes('node_modules')) {
                
//                   return id.toString().split('node_modules/')[1].split('/')[0].toString();
//               }
//           }
//         }
//     }
//   }
// })

import { resolve } from 'path'
import { defineConfig } from 'vite'

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

      external: ['vue'],
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
  }
})