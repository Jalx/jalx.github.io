import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://alexisguzman.dev",
  integrations: [
    tailwind({
      nesting: true,
      applyBaseStyles: false
    }),
    react()],
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["es", "en"]
  // }
});