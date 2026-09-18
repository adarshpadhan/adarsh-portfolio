# Adarsh Kumar Padhan

Personal developer portfolio for [adarsh.runloop.in](https://adarsh.runloop.in), built with Astro and deployed to Cloudflare Workers.

![Astro](https://img.shields.io/badge/Astro-7-FF5D01?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)

## Features

- Server-rendered Astro site using `@astrojs/cloudflare`
- Responsive portfolio layout with mobile navigation
- GitHub repository list loaded from the GitHub API
- Canonical, Open Graph, Twitter Card, and JSON-LD metadata
- Sitemap, robots file, and web manifest
- Static assets served through the Cloudflare Worker

## Requirements

- Node.js `22.19.0` or newer
- npm `9` or newer
- A Cloudflare account for deployment

The required Node version is recorded in `.nvmrc`.

## Local development

Install dependencies and start Astro's development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build and preview

Create the Cloudflare SSR build:

```bash
npm run build
```

Preview the built site locally:

```bash
npm run preview
```

The generated Worker bundle is written to `dist/server`.

## Deploy to Cloudflare

Authenticate Wrangler once:

```bash
npx wrangler login
```

Deploy the Astro SSR Worker:

```bash
npm run deploy
```

The deploy script builds the project and runs:

```bash
wrangler deploy --config dist/server/wrangler.json
```

Do not use `@cloudflare/next-on-pages`; that adapter belongs to the removed Next.js project.

## SEO files

- Page metadata and structured data: `src/pages/index.astro`
- Site URL: `astro.config.mjs`
- Crawler rules: `public/robots.txt`
- Sitemap: `public/sitemap.xml`
- Web app manifest: `public/site.webmanifest`

## Project structure

```text
src/pages/index.astro   Main page and browser interactions
src/styles/site.css     Portfolio styles and responsive layout
public/                 Static assets and SEO files
astro.config.mjs        Astro and Cloudflare configuration
```

## License

This project is a personal portfolio. Contact the author before reusing its branding, content, or artwork.
