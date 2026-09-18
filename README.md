# Adarsh Kumar Padhan — Developer Portfolio

<p align="center"><strong>A modern personal portfolio built with Astro and TypeScript.</strong></p>

![Astro](https://img.shields.io/badge/Astro-5-FF5D01?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)

## About

The site presents projects, skills, background, and contact information in a responsive, dark-themed interface.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Production

```bash
npm run build
npm run preview
```

## Cloudflare Pages

This site uses Astro's Cloudflare adapter for server-side rendering. Deploy it as a Cloudflare Worker:

```bash
npm run deploy
```

The generated Worker config is `dist/server/wrangler.json`.

Live site: [adarsh.runloop.in](https://adarsh.runloop.in)
