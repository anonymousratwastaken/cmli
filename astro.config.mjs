// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
import deno from "@deno/astro-adapter";
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno(),
  integrations: [tailwind({
    applyBaseStyles: false,
  }), react(), mdx()]
});