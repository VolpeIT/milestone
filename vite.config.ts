import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  resolve: {
    alias: {
      "@"           : resolve(__dirname, "./src"),
      "@root"       : resolve(__dirname, "."),
    },
  },

  build: {
    lib: {
      entry     : resolve(__dirname, 'src/index.ts'),
      name      : 'volpe-observer',
      fileName  : 'volpe-observer',
    },
  },

  plugins: [dts()],
  
})

