import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sitemap(), robotsTxt(), image()],
  base: "/tcet-website",
  site: "https://tcet-opensource.github.io",
  vite: {
    ssr: {
      noExternal: [/^swiper\/*/,/^react-fast-marquee\/*/,/^usehooks-ts\/*/,/^react-countup\/*/ ]
    }
  },
});