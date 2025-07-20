import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Konfigurasi sudah disesuaikan dengan repo Anda
  site: 'https://hanggaa.github.io', 
  base: '/portfolio/', 
  integrations: [tailwind()]
});