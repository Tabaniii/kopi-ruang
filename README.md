# Kopi & Ruang

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

The requested brand remains **Kopi & Ruang**. The user-supplied Maps reference identifies **Biki Coffee**, a different venue. The page explicitly identifies this as a venue reference. Directions use the supplied link; the embedded map uses its coordinates. The address is based on [Grab's Biki Coffee listing](https://dineout.grab.com/id/id/restaurants/biki-coffee-setiabudi--6-C7WBJKUWGA6AWE). Verify it directly with the business before visiting or changing branding.

Menu names, prices, amenities, opening hours, photography, rating, and guest stories are illustrative. Reviews are labeled as illustrative, rather than represented as verified Google reviews. The live status uses the illustrative schedule in Asia/Jakarta. Update the schedule, verified review figures and quotes, real menu, and own photographs before launch. Remove the concept labels only when the corresponding information has been verified. `robots` currently prevents indexing of the concept preview.

WhatsApp is intentionally unconfigured because no confirmed WhatsApp number was supplied. Set `cafe.whatsapp` to international digits without spaces or `+`. The form then opens a prefilled WhatsApp request; the visitor sends it themselves. Until then, it copies a request and explains that no table was booked. No visitor information is stored or transmitted by the form itself. Never put private API tokens in client code.

## Design references and assets

Uses the installed ui-ux-pro-max guidance for minimal composition, subtle motion, accessibility, and Next.js structure. Original components take inspiration from the refined button, navigation, and gallery patterns in the [21st.dev public library](https://21st.dev/); no authenticated MCP access or third-party component code was used.

Photography: locally hosted Unsplash placeholders. Photo IDs: `photo-1442512595331-e89e73853f31`, `photo-1570968915860-54d5c301fa9f`, `photo-1461023058943-07fcbe16d735`, `photo-1511920170033-f8396924c348`, `photo-1495474472287-4d71bcdd2085`, `photo-1555507036-ab1f4038808a`, `photo-1525351484163-7529414344d8`, `photo-1511690743698-d9d85f2fbf38`, `photo-1554118811-1e0d58224f24`, `photo-1559925393-8be0ec4767c8`, `photo-1445116572660-236099ec97a0`. Fonts: Instrument Serif and DM Sans via Google Fonts, with local system fallbacks.
