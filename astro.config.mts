import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://leahgainor.netlify.app/',
  base: 'Leah-Gainor',
  vite: {
    plugins: [tailwindcss()],
  },
});
