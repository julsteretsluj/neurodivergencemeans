# Neurodivergence Means

A small Astro site for the **Neurodivergence Means** Instagram account: a homepage feed of posts.

## Pages

- `/` — brand hero + Instagram posts

Categories and resources can be added later in `src/data/categories.ts` and `src/data/resources.ts`.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Connecting real Instagram posts

Posts are curated in `src/data/posts.ts`. For each item, set `instagramUrl` to a real post or reel permalink (for example `https://www.instagram.com/p/XXXX/` or `https://www.instagram.com/reel/XXXX/`).

When a post URL is a specific Instagram permalink, the site loads Instagram’s official embed script. Profile-only URLs fall back to a caption card that links out to Instagram.

Also update the handle and profile URL in `src/data/site.ts` if needed.

## Editing content

| File | Purpose |
| --- | --- |
| `src/data/site.ts` | Brand name, handle, Instagram URL |
| `src/data/posts.ts` | Feed posts |
| `src/data/categories.ts` | Topic pages (empty for now) |
| `src/data/resources.ts` | Resources list (empty for now) |
