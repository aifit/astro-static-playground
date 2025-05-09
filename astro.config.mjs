// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  // Aktifkan image optimization jika menggunakan komponen Image
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  build: {
    assets: 'assets',
  },
  vite: {
    build: {
      minify: false,
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          entryFileNames: 'js/[name].[hash].js',
          chunkFileNames: 'js/chunks/[name].[hash].js',
          assetFileNames: (assetInfo) => {
            const filePath = assetInfo?.file || '';

            if (/\.css$/i.test(filePath)) {
              return 'css/[name].[hash][extname]';
            }
            if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(filePath)) {
              return 'assets/images/[name].[hash][extname]';
            }
            if (/\.(woff|woff2|eot|ttf|otf)$/i.test(filePath)) {
              return 'assets/fonts/[name].[hash][extname]';
            }
            return 'assets/other/[name].[hash][extname]';
          }
        }
      }
    }
  }
});
