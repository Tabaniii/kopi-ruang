# Biki Coffee

A warm editorial café landing page built with Next.js App Router, TypeScript, Tailwind CSS 4, Lucide React, and Motion. Static export supports hosting without a Node server.

## Run

```sh
npm ci
npm run dev
```

```sh
npm run typecheck
npm run build
```

The production site is exported to `out/`. Webpack is selected explicitly because this workstation restricts the IPC port used by Turbopack's CSS worker.

## Components

- `components/header.tsx`: sticky navigation and mobile disclosure.
- `components/menu-preview.tsx`: typed categories, animated selection, keyboard arrow/Home/End navigation.
- `components/visit.tsx`: Jakarta-local opening status, daily hours, click-to-load interactive map.
- `components/reservation.tsx`: native modal dialog with focus trapping, Escape support, validated table-request form and clipboard fallback.
- `components/ui.tsx`: reusable photo, reveal, and section-label primitives.
- `lib/cafe.ts`: editable business information and typed menu data.
- `app/globals.css`: semantic theme tokens, responsive typography, safe-area support, reduced-motion styles.

## Business content to confirm before public launch

The brand, colors, expressive type, contour graphics, and featured signature drinks follow the Instagram screenshot supplied by the user (@biki.coffee). Coconut Coffee (Rp 25.000), Rose Americano (Rp 25.000), and Black Coffee (Rp 20.000) reflect the prices visible in those posts, not guaranteed current prices. Other signature drinks have no confirmed price and show “Ask our team”. Extra proposed items remain labeled as samples. Photographs are illustrative placeholders.

The opening hours transcribed from the supplied screenshot are Monday–Friday 06:00–20:00, Saturday 06:00–18:00, Sunday 05:30–18:00 (Asia/Jakarta). The live status accounts for half-hour opening times. Confirm holiday changes directly. Directions and map coordinates use the user's supplied Biki Coffee Google Maps link. The street address is based on [Grab's Biki Coffee listing](https://dineout.grab.com/id/id/restaurants/biki-coffee-setiabudi--6-C7WBJKUWGA6AWE).

The separate `/menu/` route has five categories, live search across all items, accessible keyboard tabs, result counts, and an empty state. Both pages share navigation, reservation dialog, footer and mobile actions. Subtle reveal, category, image-hover, and entry animations respect reduced-motion preferences. Static export includes `/menu/index.html` for direct navigation. The source repository and deployed URL keep their existing names to preserve links. `robots` still prevents indexing while the business details are being confirmed.

WhatsApp is intentionally unconfigured because no confirmed WhatsApp number was supplied. Set `cafe.whatsapp` to international digits without spaces or `+`. The form then opens a prefilled WhatsApp request; the visitor sends it themselves. Until then, it copies a request and explains that no table was booked. No visitor information is stored or transmitted by the form itself. Never put private API tokens in client code.

## Design references and assets

Uses the installed ui-ux-pro-max guidance for minimal composition, subtle motion, accessibility, and Next.js structure. Original components take inspiration from the refined button, navigation, and gallery patterns in the [21st.dev public library](https://21st.dev/); no authenticated MCP access or third-party component code was used.

Photography: locally hosted Unsplash placeholders. Photo IDs: `photo-1442512595331-e89e73853f31`, `photo-1570968915860-54d5c301fa9f`, `photo-1461023058943-07fcbe16d735`, `photo-1511920170033-f8396924c348`, `photo-1495474472287-4d71bcdd2085`, `photo-1555507036-ab1f4038808a`, `photo-1525351484163-7529414344d8`, `photo-1511690743698-d9d85f2fbf38`, `photo-1554118811-1e0d58224f24`, `photo-1559925393-8be0ec4767c8`, `photo-1445116572660-236099ec97a0`. Fonts: Instrument Serif and DM Sans via Google Fonts, with local system fallbacks.
