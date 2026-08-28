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

## Password-protecting the site

`src/middleware.ts` gates every request behind HTTP Basic Auth when the
`BASIC_AUTH_USER` and `BASIC_AUTH_PASSWORD` environment values are set. If either is
unset, the site is public (this is the default for local `npm run dev`).

Set them as Worker secrets before deploying:

```sh
npx wrangler secret put BASIC_AUTH_USER
npx wrangler secret put BASIC_AUTH_PASSWORD
```

For local testing with `npm run preview`, create a `.dev.vars` file (gitignored) in the
project root and copy it into `dist/server/` after building:

```
BASIC_AUTH_USER=demo
BASIC_AUTH_PASSWORD=letmein
```

