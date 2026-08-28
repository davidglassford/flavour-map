# flavour-map

Global Flavour Explorer — an interactive world map for exploring regional flavour
profiles, built with [Astro](https://astro.build), [Vue](https://vuejs.org) and
[Tailwind CSS](https://tailwindcss.com), deployed as an SSR app to Cloudflare Pages.

## Requirements

Node 22+ (see `.nvmrc`).

## Development

```sh
npm install
npm run dev
```

## Build & preview (Cloudflare Workers runtime)

```sh
npm run build
npm run preview
```

## Deploy to Cloudflare Workers

`@astrojs/cloudflare` v14 targets Cloudflare Workers (with static assets), not Cloudflare
Pages — Pages reserves the `ASSETS` binding name for itself, which conflicts with the
binding the adapter always creates, so this app can't be deployed as a Pages project.

```sh
npm run deploy
```

This builds the site and deploys the generated `dist/server/wrangler.json` worker config
via `wrangler deploy`. If you have an existing Cloudflare **Pages** project connected via
Git for this repo, switch to a **Workers** project (Git-connected "Workers Builds", or
CLI deploys from this script) instead.

