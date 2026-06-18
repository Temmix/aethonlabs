// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Static, host-agnostic output (deploys to Cloudflare Pages / Vercel / any static host).
export default defineConfig({
  site: 'https://aethon-labs.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
