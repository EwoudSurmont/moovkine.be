import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), prefetch(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })],
  site: 'https://www.moovkine.be',
});