# Carftora — Digital Wedding & Event Invitations

A complete, production-ready marketing website for **Carftora**, a premium Indian digital invitation studio. Built with plain **HTML5, CSS3 and vanilla JavaScript** — no frameworks, no build step, fully static and ready for GitHub Pages.

**Tagline:** *Your Story. Your Invitation. Your Moment.*

---

## ✨ What's inside

- Sticky glass-effect navigation with animated mobile menu
- Animated hero with a floating phone/invitation mockup, confetti and gradient background
- Scrollable invitation category strip (9 occasions)
- JavaScript-powered featured invitation carousel with drag/swipe + Preview modal
- Animated "How It Works" 4-step timeline (scroll-triggered)
- "Why Choose Carftora" feature grid
- Live invitation demo phone with a **real, auto-updating countdown timer**
- Filterable work gallery with a fullscreen lightbox viewer
- Three pricing tiers with WhatsApp checkout (pre-filled message)
- Auto-playing testimonial carousel with manual controls
- Accordion FAQ
- Colorful final CTA + footer with social links
- Floating WhatsApp button, back-to-top button, toast notifications
- Scroll reveal animations (IntersectionObserver), custom cursor glow on desktop
- Fully responsive: 360px → 1920px, no horizontal overflow
- Respects `prefers-reduced-motion`

---

## 📁 File structure

```
carftora/
├── index.html
├── style.css
├── script.js
├── README.md
├── assets/
│   ├── images/     ← place real photography / invitation renders here
│   ├── icons/       ← place any custom icon assets here
│   └── logo/        ← favicon.svg lives here
└── .github/
    └── workflows/
        └── deploy.yml
```

> The site currently renders all invitation "photos" (hero mockup, featured carousel, gallery) as **CSS + SVG cards** rather than external images. This means nothing ever shows as a broken image, the site loads instantly, and it works perfectly on GitHub Pages with zero dependencies. When you have real photography or design renders, drop them into `assets/images/` and swap the relevant markup (see "Swapping in real images" below).

---

## ⚙️ Editing your business info (do this first)

Open **`script.js`** and edit the `CONFIG` object at the very top of the file:

```js
const CONFIG = {
  BUSINESS_NAME: "Carftora",
  BUSINESS_DESCRIPTION: "Beautiful digital invitations for every celebration...",

  WHATSAPP_NUMBER: "917405105606",   // country code + number, digits only
  DISPLAY_PHONE: "+91 7405105606",

  INSTAGRAM_URL: "https://instagram.com/carftora",
  FACEBOOK_URL: "https://facebook.com/carftora",
  PINTEREST_URL: "https://pinterest.com/carftora",
  EMAIL: "hello@carftora.com",

  PRICING: { ... },

  DEMO_EVENT: {
    couple: "Rahul & Priya",
    date: "2026-11-24T19:00:00",
    venue: "The Grand Palace, Jaipur"
  }
};
```

Every WhatsApp button/link on the site reads from `WHATSAPP_NUMBER`, so you only need to change it once. The live countdown demo reads from `DEMO_EVENT.date` — update this to any future date/time and it will count down automatically (and evergreen-loops a year forward if the date passes, so the demo never looks broken).

Editable content data (featured designs, gallery items, testimonials, FAQs) lives near the top of `script.js` in clearly labelled arrays: `FEATURED_DESIGNS`, `GALLERY_ITEMS`, `TESTIMONIALS`, `FAQS`.

---

## 🎨 Editing colors & fonts

All brand colors are CSS custom properties at the top of **`style.css`**:

```css
:root{
  --pink:   #F72585;
  --purple: #7B61FF;
  --orange: #FF9F43;
  --yellow: #FFD166;
  --mint:   #70E1C8;
  --blue:   #6EC6FF;
  --cream:  #FFF9F2;
  --dark:   #17152A;
  --white:  #FFFFFF;
}
```

Change a value once and it updates everywhere (buttons, gradients, icons, cards). Fonts are loaded from Google Fonts in `index.html` (`Playfair Display` for headings, `Inter` for body text) and referenced via `--font-display` / `--font-body` variables.

---

## 🖼️ Swapping in real images

If you'd like to use real photography instead of the CSS/SVG invitation cards:

1. Add your image files to `assets/images/` (e.g. `assets/images/floral-bliss.jpg`).
2. In `index.html` / `script.js`, replace the `.tile-preview` / `.gallery-item` div content with an `<img src="assets/images/floral-bliss.jpg" alt="Floral Bliss wedding invitation" loading="lazy">` tag.
3. Keep the existing `alt` attributes descriptive for accessibility and SEO.

---

## 🚀 Deploying to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which automatically deploys the site to GitHub Pages on every push to `main`.

1. Push this project to a GitHub repository.
2. Go to **Settings → Pages** in your repository.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` — the workflow will build and publish automatically.
5. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

No build tools, npm installs, or bundlers are required — it's a static deploy.

---

## 🧩 Tech notes

- **No frameworks.** Pure HTML/CSS/JS — works by simply opening `index.html`, or serving the folder with any static file server.
- **Icons:** [Font Awesome 6](https://fontawesome.com/) via CDN.
- **Fonts:** Google Fonts (`Playfair Display`, `Inter`) via CDN.
- **Accessibility:** semantic landmarks, labelled controls, keyboard-operable modal/lightbox/accordion, visible focus states, `aria-live` regions for dynamic content.
- **Performance:** no image downloads, CSS-driven animations, IntersectionObserver-based reveals, minimal JS.

---

## 📄 License

This codebase is provided for use by Carftora. Replace all placeholder contact details, imagery guidance and copy with your final brand assets before going live.
