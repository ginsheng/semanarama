import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: 'https://semanarama.com', // Note the https:// protocol
  integrations: [tailwind(), mdx()]
});