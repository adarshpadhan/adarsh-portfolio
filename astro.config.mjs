import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'

export default defineConfig({
  site: 'https://adarsh.runloop.in',
  output: 'server',
  adapter: cloudflare(),
})
