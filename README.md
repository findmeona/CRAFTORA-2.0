# Craftora — Marketing Site (HTML/CSS/JS)

A static, dependency-free landing page for **Craftora**, built to match the brief's
color system (`#E85D75` / `#F6C7D2` / `#C98A2E` + slate) and typography
(Playfair Display + Inter).

This is a front-end-only marketing page — hero, category grid, an editor
showcase mock, a three-step process, testimonials, and a footer with a
(client-side only) newsletter form. It is **not** the full Next.js /
Prisma / Stripe application described in the original brief; that is a
multi-month build. This is a real, working starting point for the public
site's look and feel.

## Files

```
craftora/
├── index.html     # All markup, single page
├── styles.css      # Full design system: tokens, layout, components
├── script.js       # Mobile menu, scroll reveal, editor mock interactions, newsletter demo
└── README.md
```

## Run it

No build step required.

```bash
cd craftora
python3 -m http.server 8000
# open http://localhost:8000
```

Or just double-click `index.html` to open it directly in a browser.

## Notes

- Dark mode responds automatically to the OS/browser color-scheme preference
  (`prefers-color-scheme`).
- Respects `prefers-reduced-motion`.
- Fonts load from Google Fonts via `<link>` tags — swap for self-hosted
  fonts if you need to work fully offline or need stricter privacy/perf control.
- The "editor" section is a static visual mock (swatches/chips are clickable
  for feel, but nothing here is a real drag-and-drop canvas). Wiring that up
  for real is its own project — happy to help scope it next.
- The newsletter form only shows a client-side confirmation message; it does
  not send data anywhere. Wire it to Resend, Mailchimp, etc. on a real backend.
