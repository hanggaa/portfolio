import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Konfigurasi untuk custom domain
  site: 'https://hanggaa.github.io',
  base: '/',
  trailingSlash: 'never',
  integrations: [tailwind()],
  build: {
    assets: '_astro'
  }
});