// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// js framework integrations
import vue from '@astrojs/vue';
import react from '@astrojs/react';


const now = new Date();
/** @param {number} n */
const pad = (n) => String(n).padStart(2, '0');
const timestamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;


// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), react()],
  compressHTML: false,
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  build: {
    assets: '_assets',
  },
  vite: {
    build: {
      minify: true,
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          entryFileNames: `_assets/[name].${timestamp}.js`,
          assetFileNames: `_assets/[name].${timestamp}[extname]`,
        }
      }
    }
  }
});
