import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';
//import purgecss from '@fullhuman/postcss-purgecss';

// https://vitejs.dev/config/

export default ({ command, mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
   if (mode === 'production') {
     return defineConfig({
        plugins: [react(), viteCompression()],
        // base: process.env.GITHUB_VA_ ? "/3dtext-generator/" : "/"
        base: "/3dtext-generator/"
     })
   } else {
     return defineConfig({
       plugins: [react()],
       base: "/3dtext-generator/"
     })
   }
}
