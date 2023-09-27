import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [react()]
  //output: "server",
  //adapter: vercel()
  ,
  output: 'static',
  site: 'https://macondosoftwares.net',

  //output: "server",
  //adapter: cloudflare()
});