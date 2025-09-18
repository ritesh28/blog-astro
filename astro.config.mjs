// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
// Import /serverless for a Serverless SSR site
import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: vercelServerless({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
});
