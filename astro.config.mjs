// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

const now = new Date();
const pad = (n) => String(n).padStart(2, '0');
const timestamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;


// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  compressHTML: false,
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  build: {
    assets: 'public',
  },
  vite: {
    build: {
      minify: false,
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          entryFileNames: `public/[name].${timestamp}.js`,
          assetFileNames: `public/[name].${timestamp}[extname]`,
        }
      }
    }
  }
});
