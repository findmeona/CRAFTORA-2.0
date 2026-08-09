# Carftora — Premium Digital Invitation Website

A futuristic, animated, single-page website for **Carftora**, a digital invitation
business. Built with pure **HTML5 + CSS3 + Vanilla JavaScript** — no frameworks,
no build tools, no backend. Ready to upload straight to GitHub Pages.

---

## 📁 Project Structure

```
carftora/
├── index.html
├── style.css
├── script.js
├── README.md
├── assets/
│   ├── images/     → invitation preview images (SVG placeholders included)
│   ├── icons/       → spare folder for extra icons
│   └── logo/        → favicon / logo files
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## 1. Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new).
2. Name it whatever you like, e.g. `carftora`.
3. Choose **Public** (required for free GitHub Pages).
4. Click **Create repository** — don't add a README, .gitignore, or license (we already have ours).

---

## 2. Upload the Files

**Option A — Web upload (easiest):**
1. Open your new repository page.
2. Click **"Add file" → "Upload files"**.
3. Drag the entire contents of the `carftora` folder (not the folder itself — its *contents*: `index.html`, `style.css`, `script.js`, `assets/`, `.github/`, etc.) into the upload box.
4. Commit directly to the `main` branch.

**Option B — Git command line:**
```bash
cd carftora
git init
git add .
git commit -m "Initial commit: Carftora website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

---

## 3. Enable GitHub Pages

1. In your repository, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. That's it — the included workflow (`.github/workflows/deploy.yml`) will
   automatically build and deploy your site every time you push to `main`.
4. After the first push, check the **Actions** tab to watch the deployment run.
5. Once it finishes, your site will be live at:
   `https://YOUR-USERNAME.github.io/YOUR-REPO/`

---

## 4. How to Change the WhatsApp Number

Open **`script.js`** and find the `CONFIG` object at the very top of the file:

```js
whatsappNumber: "919999999999",
whatsappMessage: "Hi Carftora! I'd like to create a digital invitation for my event.",
```

Replace `919999999999` with your real number in **international format, no
`+`, no spaces, no dashes**. Example: for `+91 90000 00000` use `"919000000000"`.

This single value updates the WhatsApp button everywhere on the site.

---

## 5. How to Change Prices

Still inside `CONFIG` in `script.js`, find the `plans` array:

```js
plans: [
  { name: "Basic",   type: "Digital Invitation",          price: "₹999",  ... },
  { name: "Premium", type: "Animated Invitation",          price: "₹1,999", featured: true, ... },
  { name: "Luxury",  type: "Premium Custom Invitation",    price: "₹3,999", ... }
]
```

Just edit the `price` strings (or `features` lists) — the pricing cards
rebuild themselves automatically.

---

## 6. How to Replace Invitation Images

All images are referenced from the `CONFIG` object in `script.js` (categories,
wedding designs, gallery) and currently point to placeholder SVGs inside
`assets/images/`.

To use your own photos/designs:
1. Add your image files (JPG, PNG, or WebP) into `assets/images/`.
2. In `script.js`, update the relevant `img:` path, e.g.:
   ```js
   { name: "Royal Ivory", style: "Classic & Elegant", img: "assets/images/design-1.svg" }
   ```
   becomes
   ```js
   { name: "Royal Ivory", style: "Classic & Elegant", img: "assets/images/royal-ivory.jpg" }
   ```
3. Save and push — the site rebuilds the cards automatically using your new image.

You can freely add/remove entries from `categories`, `weddingDesigns`, and
`gallery` arrays — the layout adjusts automatically.

---

## 7. How to Change Colors

Open **`style.css`** and edit the CSS variables at the very top (`:root`):

```css
:root{
  --bg:#050509;        /* background */
  --primary:#C9A7FF;   /* primary accent */
  --secondary:#7C5CFF; /* secondary accent / gradients */
  --accent:#FFD98A;    /* highlight accent (gold) */
  --text:#FFFFFF;      /* main text color */
  --muted:#A5A5B5;     /* secondary text color */
}
```

Every gradient, glow, border, and button color on the site derives from
these variables, so changing them re-themes the entire site instantly.

---

## 8. How to Change Business Information

In `script.js`, at the top of `CONFIG`:

```js
businessName: "Carftora",
email: "hello@carftora.com",
phoneDisplay: "+91 99999 99999",
socials: [
  { name: "Instagram", url: "https://instagram.com/carftora", icon: "instagram" },
  { name: "Facebook",  url: "https://facebook.com/carftora",  icon: "facebook" },
  { name: "WhatsApp",  url: "https://wa.me/919999999999",     icon: "whatsapp" }
]
```

Update these fields with your real email, phone number, and social links.
They automatically populate the footer and social icons.

You can also edit `services`, `features`, `faqs`, and `testimonials` arrays
in the same file to change any text content on the site without touching HTML.

---

## Other Notes

- **Countdown demo date**: edit `countdownTarget` in `CONFIG` (format `YYYY-MM-DDTHH:mm:ss`).
- **Fonts**: Playfair Display (headings) + Manrope (body), loaded from Google Fonts.
- **Accessibility**: semantic HTML, ARIA labels on interactive elements, keyboard-navigable modals/gallery, and full support for `prefers-reduced-motion`.
- **Performance**: gallery/showcase images use `loading="lazy"`; no external JS frameworks or heavy libraries.
- **SEO**: title, meta description, keywords, Open Graph tags, and a favicon are already set in `index.html`'s `<head>`.

---

© 2026 Carftora. All Rights Reserved.
