/* =====================================================================
   CARFTORA — script.js
   All business content lives in CONFIG below. Edit freely — the rest
   of the file reads from this object and builds the page automatically.
   ===================================================================== */

/* ============================ 1. CONFIG =============================
   ⚙️  EASY-EDIT BUSINESS SETTINGS — change everything here.
   ===================================================================== */
const CONFIG = {

  /* ---- Business info ---- */
  businessName: "Carftora",
  email: "hello@carftora.com",
  phoneDisplay: "+91 99999 99999",

  /* ---- WhatsApp settings ----
     whatsappNumber must be in international format WITHOUT '+', spaces or dashes.
     Example for India +91 90000 00000 -> "919000000000" */
  whatsappNumber: "919999999999",
  whatsappMessage: "Hi Carftora! I'd like to create a digital invitation for my event.",

  /* ---- Social links ---- */
  socials: [
    { name: "Instagram", url: "https://instagram.com/carftora", icon: "instagram" },
    { name: "Facebook", url: "https://facebook.com/carftora", icon: "facebook" },
    { name: "WhatsApp", url: "https://wa.me/919999999999", icon: "whatsapp" }
  ],

  /* ---- Countdown target date (Live Invitation Experience demo) ----
     Format: "YYYY-MM-DDTHH:mm:ss" */
  countdownTarget: "2026-12-21T10:00:00",

  /* ---- Invitation categories (Showcase section) ---- */
  categories: [
    { name: "Wedding",      filter: "wedding",     img: "assets/images/cat-wedding.svg" },
    { name: "Engagement",   filter: "engagement",  img: "assets/images/cat-engagement.svg" },
    { name: "Birthday",     filter: "birthday",    img: "assets/images/cat-birthday.svg" },
    { name: "Baby Shower",  filter: "babyshower",  img: "assets/images/cat-babyshower.svg" },
    { name: "Anniversary",  filter: "anniversary", img: "assets/images/cat-anniversary.svg" },
    { name: "Party",        filter: "party",       img: "assets/images/cat-party.svg" },
    { name: "Corporate",    filter: "corporate",   img: "assets/images/cat-corporate.svg" },
    { name: "Festival",     filter: "festival",    img: "assets/images/cat-festival.svg" },
    { name: "Other Events", filter: "other",       img: "assets/images/cat-other.svg" }
  ],

  /* ---- Featured wedding invitation designs (6 cards) ---- */
  weddingDesigns: [
    { name: "Royal Ivory",     style: "Classic & Elegant",  img: "assets/images/design-1.svg" },
    { name: "Golden Bloom",    style: "Floral Luxe",        img: "assets/images/design-2.svg" },
    { name: "Midnight Rose",   style: "Modern Romantic",    img: "assets/images/design-3.svg" },
    { name: "Pearl Elegance",  style: "Minimal Chic",       img: "assets/images/design-4.svg" },
    { name: "Velvet Noir",     style: "Bold & Regal",       img: "assets/images/design-5.svg" },
    { name: "Celestial Love",  style: "Dreamy & Ethereal",  img: "assets/images/design-6.svg" }
  ],

  /* ---- Services ---- */
  services: [
    { icon: "💍", title: "Wedding Invitations", desc: "Elegant digital invites crafted for your big day." },
    { icon: "💫", title: "Engagement Invitations", desc: "Celebrate your promise with a beautiful design." },
    { icon: "🎂", title: "Birthday Invitations", desc: "Fun, vibrant invites for every age and theme." },
    { icon: "👶", title: "Baby Shower Invitations", desc: "Sweet, dreamy designs to welcome new joy." },
    { icon: "❤️", title: "Anniversary Invitations", desc: "Timeless designs that celebrate lasting love." },
    { icon: "🎉", title: "Party Invitations", desc: "Bold, energetic invites for any celebration." },
    { icon: "🏢", title: "Corporate Invitations", desc: "Professional invites for launches and events." },
    { icon: "✨", title: "Custom Invitations", desc: "A fully bespoke design built around your story." }
  ],

  /* ---- Why Carftora features ---- */
  features: [
    { icon: "✨", title: "Premium Designs", desc: "Crafted by expert designers." },
    { icon: "⚡", title: "Fast Delivery", desc: "Get your invite in as little as 24 hours." },
    { icon: "📱", title: "Mobile Friendly", desc: "Looks stunning on every device." },
    { icon: "🎨", title: "Fully Customizable", desc: "Colors, text and layout, your way." },
    { icon: "🔗", title: "Easy Sharing", desc: "One link for WhatsApp, Instagram & more." },
    { icon: "💎", title: "High Quality", desc: "Pixel-perfect, polished experiences." },
    { icon: "❤️", title: "Designed With Care", desc: "Every detail made to feel personal." },
    { icon: "🚀", title: "Modern Animations", desc: "Smooth, futuristic motion design." }
  ],

  /* ---- Gallery items ---- */
  gallery: [
    { img: "assets/images/gallery-1.svg", category: "wedding",     caption: "Wedding Invitation" },
    { img: "assets/images/gallery-2.svg", category: "birthday",    caption: "Birthday Invitation" },
    { img: "assets/images/gallery-3.svg", category: "engagement",  caption: "Engagement Invitation" },
    { img: "assets/images/gallery-4.svg", category: "babyshower",  caption: "Baby Shower Invitation" },
    { img: "assets/images/gallery-5.svg", category: "anniversary", caption: "Anniversary Invitation" },
    { img: "assets/images/gallery-6.svg", category: "party",       caption: "Party Invitation" },
    { img: "assets/images/gallery-7.svg", category: "wedding",     caption: "Wedding Invitation" },
    { img: "assets/images/gallery-8.svg", category: "engagement",  caption: "Engagement Invitation" },
    { img: "assets/images/gallery-9.svg", category: "birthday",    caption: "Birthday Invitation" }
  ],

  /* ---- Pricing plans (edit prices here) ---- */
  plans: [
    {
      name: "Basic",
      type: "Digital Invitation",
      price: "₹999",
      note: "One-time payment",
      featured: false,
      features: [
        "1 Static Design",
        "Basic Customization",
        "Shareable Link",
        "Delivery in 48 Hours",
        "1 Revision"
      ]
    },
    {
      name: "Premium",
      type: "Animated Invitation",
      price: "₹1,999",
      note: "One-time payment",
      featured: true,
      features: [
        "Animated Design",
        "Full Customization",
        "Music & Countdown Timer",
        "RSVP Collection",
        "Delivery in 24 Hours",
        "3 Revisions"
      ]
    },
    {
      name: "Luxury",
      type: "Premium Custom Invitation",
      price: "₹3,999",
      note: "One-time payment",
      featured: false,
      features: [
        "Fully Custom Design",
        "Premium Animations",
        "Google Maps Integration",
        "Guest RSVP Dashboard",
        "Priority Delivery",
        "Unlimited Revisions"
      ]
    }
  ],

  /* ---- Testimonials ---- */
  testimonials: [
    { quote: "Carftora made our wedding invitation absolutely beautiful!", name: "Ananya & Rohan", event: "Wedding", rating: 5 },
    { quote: "Everyone loved the animation. It felt so premium.", name: "Meera Kapoor", event: "Birthday", rating: 5 },
    { quote: "The entire process was simple and professional.", name: "Vikram Shah", event: "Corporate Event", rating: 5 },
    { quote: "Our guests couldn't stop talking about the invite. Absolutely stunning work.", name: "Priya & Arjun", event: "Engagement", rating: 5 }
  ],

  /* ---- FAQ ---- */
  faqs: [
    { q: "How long does it take?", a: "Most invitations are delivered within 24–48 hours depending on the package you choose." },
    { q: "Can I customize the invitation?", a: "Yes! Every design can be customized with your names, colors, photos, and details." },
    { q: "Can I add music?", a: "Absolutely — background music can be added to Premium and Luxury invitations." },
    { q: "Can I add Google Maps?", a: "Yes, we can embed a live Google Maps location so guests can navigate directly to your venue." },
    { q: "Can guests RSVP?", a: "Yes, Premium and Luxury invitations include an RSVP button that collects guest responses." },
    { q: "Can I share the invitation on WhatsApp?", a: "Yes, every invitation comes with a shareable link that works perfectly on WhatsApp, Instagram, and email." },
    { q: "Can you create custom designs?", a: "Definitely — our Luxury package is built entirely around a custom design made just for you." },
    { q: "How do I order?", a: "Simply click 'Order Now', fill in your details, or message us directly on WhatsApp to get started." }
  ]
};

/* ===================================================================
   2. UTILITIES
   =================================================================== */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function escapeHTML(str = "") {
  return str.replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}

/* ===================================================================
   3. LOADING SCREEN
   =================================================================== */
window.addEventListener("load", () => {
  const loader = $("#loading-screen");
  const minDelay = prefersReducedMotion ? 300 : 1600;
  setTimeout(() => {
    loader.classList.add("hidden");
    document.body.classList.remove("no-scroll");
    initScrollReveal();
  }, minDelay);
});
document.body.classList.add("no-scroll");

/* ===================================================================
   4. CURSOR GLOW
   =================================================================== */
(function initCursorGlow() {
  const glow = $("#cursorGlow");
  if (!glow || window.matchMedia("(hover: none)").matches) return;
  window.addEventListener("mousemove", (e) => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  }, { passive: true });
})();

/* ===================================================================
   5. NAVBAR (sticky + scrollspy + mobile menu)
   =================================================================== */
(function initNavbar() {
  const navbar = $("#navbar");
  const hamburger = $("#hamburger");
  const navMenu = $("#navMenu");
  const overlay = $("#mobileOverlay");
  const navLinks = $$(".nav-link");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  function toggleMenu(open) {
    const isOpen = open ?? !navMenu.classList.contains("open");
    navMenu.classList.toggle("open", isOpen);
    overlay.classList.toggle("active", isOpen);
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("no-scroll", isOpen);
  }

  hamburger.addEventListener("click", () => toggleMenu());
  overlay.addEventListener("click", () => toggleMenu(false));
  navLinks.forEach((link) => link.addEventListener("click", () => toggleMenu(false)));

  // Scrollspy
  const sections = navLinks.map((l) => document.querySelector(l.getAttribute("href"))).filter(Boolean);
  const spy = () => {
    let current = sections[0];
    const scrollPos = window.scrollY + 140;
    sections.forEach((sec) => { if (sec.offsetTop <= scrollPos) current = sec; });
    navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${current.id}`));
  };
  window.addEventListener("scroll", spy, { passive: true });
  spy();
})();

/* ===================================================================
   6. HERO PARTICLE BACKGROUND (lightweight canvas)
   =================================================================== */
(function initParticles() {
  const canvas = $("#particleCanvas");
  if (!canvas || prefersReducedMotion) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  let w, h, raf;

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }

  function makeParticles() {
    const count = Math.min(70, Math.floor((w * h) / 18000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a: Math.random() * 0.6 + 0.2
    }));
  }

  function tick() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,167,255,${p.a})`;
      ctx.fill();
    });
    raf = requestAnimationFrame(tick);
  }

  resize();
  makeParticles();
  tick();
  window.addEventListener("resize", () => { resize(); makeParticles(); }, { passive: true });
})();

/* ===================================================================
   7. HERO 3D CARD TILT
   =================================================================== */
(function initCardTilt() {
  const card = $("#inviteCard3D");
  if (!card || prefersReducedMotion || window.matchMedia("(hover: none)").matches) return;
  const wrapper = card.closest(".hero-visual");
  wrapper.addEventListener("mousemove", (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 18}deg)`;
  });
  wrapper.addEventListener("mouseleave", () => { card.style.transform = ""; });
})();

/* ===================================================================
   8. COUNTER ANIMATION (hero stats)
   =================================================================== */
function animateCounters() {
  $$(".stat-num").forEach((el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    if (prefersReducedMotion) { el.textContent = target; el.classList.add("counted"); return; }
    let start = 0;
    const duration = 1400;
    const startTime = performance.now();
    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else { el.textContent = target; el.classList.add("counted"); }
    }
    requestAnimationFrame(step);
  });
}

/* ===================================================================
   9. RENDER: INVITATION SHOWCASE
   =================================================================== */
function renderShowcase() {
  const grid = $("#showcaseGrid");
  grid.innerHTML = CONFIG.categories.map((cat) => `
    <article class="showcase-card" data-category="${cat.filter}" tabindex="0">
      <img src="${cat.img}" alt="${escapeHTML(cat.name)} invitation preview" loading="lazy" width="600" height="800">
      <div class="showcase-info">
        <h3 class="showcase-cat">${escapeHTML(cat.name)}</h3>
        <button class="showcase-view" type="button" data-preview-cat="${cat.filter}">View Designs</button>
      </div>
    </article>
  `).join("");

  $$(".showcase-view", grid).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const cat = CONFIG.categories.find((c) => c.filter === btn.dataset.previewCat);
      openPreviewModal({ name: cat.name, style: "Signature Collection", img: cat.img });
    });
  });
}

function initShowcaseFilters() {
  const bar = $("#showcaseFilters");
  const cards = () => $$(".showcase-card", $("#showcaseGrid"));

  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    $$(".filter-btn", bar).forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    cards().forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hide", !match);
    });
  });
}

/* ===================================================================
   10. RENDER: FEATURED WEDDING INVITATIONS + MODAL
   =================================================================== */
function renderWeddingDesigns() {
  const grid = $("#weddingGrid");
  grid.innerHTML = CONFIG.weddingDesigns.map((d, i) => `
    <article class="wedding-card">
      <div class="wedding-card-img">
        <img src="${d.img}" alt="${escapeHTML(d.name)} wedding invitation design" loading="lazy" width="600" height="800">
      </div>
      <div class="wedding-card-body">
        <h3 class="wedding-card-name">${escapeHTML(d.name)}</h3>
        <p class="wedding-card-style">${escapeHTML(d.style)}</p>
        <div class="wedding-card-actions">
          <button class="btn btn-outline btn-sm" type="button" data-preview-design="${i}">Preview Invitation</button>
          <a href="#contact" class="btn btn-glow btn-sm" data-choose-design="${i}">Choose Design</a>
        </div>
      </div>
    </article>
  `).join("");

  $$("[data-preview-design]", grid).forEach((btn) => {
    btn.addEventListener("click", () => {
      const design = CONFIG.weddingDesigns[btn.dataset.previewDesign];
      openPreviewModal(design);
    });
  });

  $$("[data-choose-design]", grid).forEach((link) => {
    link.addEventListener("click", () => {
      const design = CONFIG.weddingDesigns[link.dataset.chooseDesign];
      const eventTypeField = $("#eventType");
      const msgField = $("#messageBox");
      if (eventTypeField) eventTypeField.value = "Wedding";
      if (msgField && !msgField.value) msgField.value = `I'd love the "${design.name}" design for my wedding invitation.`;
    });
  });
}

function openPreviewModal(item) {
  const modal = $("#previewModal");
  const body = $("#modalBody");
  body.innerHTML = `
    <img src="${item.img}" alt="${escapeHTML(item.name)} invitation preview" style="width:100%;border-radius:16px;margin-bottom:20px;">
    <h3 id="modalTitle" style="font-family:var(--font-heading);font-size:1.4rem;margin-bottom:6px;">${escapeHTML(item.name)}</h3>
    <p style="color:var(--muted);margin-bottom:22px;">${escapeHTML(item.style)}</p>
    <a href="#contact" class="btn btn-glow btn-block" id="modalChooseBtn">Choose This Design</a>
  `;
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  $("#modalChooseBtn").addEventListener("click", closePreviewModal);
}

function closePreviewModal() {
  const modal = $("#previewModal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

(function initPreviewModal() {
  $("#modalClose").addEventListener("click", closePreviewModal);
  $("#modalBackdrop").addEventListener("click", closePreviewModal);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closePreviewModal(); });
})();

/* ===================================================================
   11. RENDER: SERVICES
   =================================================================== */
function renderServices() {
  $("#servicesGrid").innerHTML = CONFIG.services.map((s) => `
    <div class="service-card">
      <span class="service-icon" aria-hidden="true">${s.icon}</span>
      <h3 class="service-title">${escapeHTML(s.title)}</h3>
      <p class="service-desc">${escapeHTML(s.desc)}</p>
    </div>
  `).join("");
}

/* ===================================================================
   12. HOW IT WORKS — timeline reveal
   =================================================================== */
function initTimeline() {
  const steps = $$(".timeline-step");
  const fill = $("#timelineFill");
  const section = $("#how-it-works");
  let done = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !done) {
        done = true;
        steps.forEach((step, i) => {
          setTimeout(() => step.classList.add("in-view"), i * 220);
        });
        if (fill) requestAnimationFrame(() => { fill.style.width = "100%"; });
      }
    });
  }, { threshold: 0.35 });

  observer.observe(section);
}

/* ===================================================================
   13. RENDER: WHY CARFTORA FEATURES
   =================================================================== */
function renderFeatures() {
  $("#featuresGrid").innerHTML = CONFIG.features.map((f) => `
    <div class="feature-card">
      <span class="feature-icon" aria-hidden="true">${f.icon}</span>
      <h3 class="feature-title">${escapeHTML(f.title)}</h3>
      <p class="feature-desc">${escapeHTML(f.desc)}</p>
    </div>
  `).join("");
}

/* ===================================================================
   14. LIVE INVITATION EXPERIENCE — countdown, RSVP, location
   =================================================================== */
function initCountdown() {
  const target = new Date(CONFIG.countdownTarget).getTime();
  const els = { d: $("#cdDays"), h: $("#cdHours"), m: $("#cdMins"), s: $("#cdSecs") };
  if (!els.d) return;

  function tick() {
    const now = Date.now();
    let diff = target - now;
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    els.d.textContent = String(days).padStart(2, "0");
    els.h.textContent = String(hours).padStart(2, "0");
    els.m.textContent = String(mins).padStart(2, "0");
    els.s.textContent = String(secs).padStart(2, "0");
  }
  tick();
  setInterval(tick, 1000);
}

function initPhoneActions() {
  $("#rsvpBtn")?.addEventListener("click", () => showToast("RSVP received! Thank you for confirming. 🎉"));
  $("#locationBtn")?.addEventListener("click", () => showToast("Opening venue location in Google Maps…"));
}

/* ===================================================================
   15. RENDER: GALLERY + FILTER + FULLSCREEN MODAL
   =================================================================== */
function renderGallery() {
  const grid = $("#galleryGrid");
  grid.innerHTML = CONFIG.gallery.map((g, i) => `
    <figure class="gallery-item" data-category="${g.category}" data-index="${i}" tabindex="0">
      <img src="${g.img}" alt="${escapeHTML(g.caption)}" loading="lazy" width="600" height="800">
      <figcaption class="gallery-caption">${escapeHTML(g.caption)}</figcaption>
    </figure>
  `).join("");

  $$(".gallery-item", grid).forEach((item) => {
    item.addEventListener("click", () => openGalleryModal(CONFIG.gallery[item.dataset.index]));
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openGalleryModal(CONFIG.gallery[item.dataset.index]); }
    });
  });
}

function initGalleryFilters() {
  const bar = $("#galleryFilters");
  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    $$(".filter-btn", bar).forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    $$(".gallery-item", $("#galleryGrid")).forEach((item) => {
      const match = filter === "all" || item.dataset.category === filter;
      item.classList.toggle("hide", !match);
    });
  });
}

function openGalleryModal(item) {
  const modal = $("#galleryModal");
  $("#galleryModalImg").src = item.img;
  $("#galleryModalImg").alt = item.caption;
  $("#galleryModalCaption").textContent = item.caption;
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}
function closeGalleryModal() {
  const modal = $("#galleryModal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}
(function initGalleryModal() {
  $("#galleryModalClose").addEventListener("click", closeGalleryModal);
  $("#galleryModalBackdrop").addEventListener("click", closeGalleryModal);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeGalleryModal(); });
})();

/* ===================================================================
   16. RENDER: PRICING
   =================================================================== */
function renderPricing() {
  $("#pricingGrid").innerHTML = CONFIG.plans.map((p) => `
    <div class="pricing-card ${p.featured ? "featured" : ""}">
      ${p.featured ? '<span class="pricing-badge">Most Popular</span>' : ""}
      <p class="pricing-name">${escapeHTML(p.name)}</p>
      <p class="pricing-type">${escapeHTML(p.type)}</p>
      <p class="pricing-price">${escapeHTML(p.price)} <span>/ event</span></p>
      <p class="pricing-note">${escapeHTML(p.note)}</p>
      <ul class="pricing-features">
        ${p.features.map((f) => `<li>${escapeHTML(f)}</li>`).join("")}
      </ul>
      <a href="#contact" class="btn ${p.featured ? "btn-glow" : "btn-outline"} btn-block" data-plan="${escapeHTML(p.name)}">Choose ${escapeHTML(p.name)}</a>
    </div>
  `).join("");

  $$("[data-plan]", $("#pricingGrid")).forEach((btn) => {
    btn.addEventListener("click", () => {
      const msgField = $("#messageBox");
      if (msgField && !msgField.value) msgField.value = `I'm interested in the ${btn.dataset.plan} package.`;
    });
  });
}

/* ===================================================================
   17. RENDER + LOGIC: TESTIMONIAL SLIDER
   =================================================================== */
function initTestimonials() {
  const track = $("#testimonialTrack");
  const dotsWrap = $("#testimonialDots");

  track.innerHTML = CONFIG.testimonials.map((t) => `
    <div class="testimonial-slide">
      <div class="testimonial-stars" aria-label="${t.rating} out of 5 stars">${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}</div>
      <p class="testimonial-quote">&ldquo;${escapeHTML(t.quote)}&rdquo;</p>
      <p class="testimonial-name">${escapeHTML(t.name)}</p>
      <p class="testimonial-event">${escapeHTML(t.event)}</p>
    </div>
  `).join("");

  dotsWrap.innerHTML = CONFIG.testimonials.map((_, i) => `<button class="t-dot ${i === 0 ? "active" : ""}" aria-label="Go to testimonial ${i + 1}" data-dot="${i}"></button>`).join("");

  let index = 0;
  const total = CONFIG.testimonials.length;
  const dots = $$(".t-dot", dotsWrap);

  function goTo(i) {
    index = (i + total) % total;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle("active", di === index));
  }

  dots.forEach((d) => d.addEventListener("click", () => { goTo(Number(d.dataset.dot)); resetAutoplay(); }));

  let autoplay;
  function startAutoplay() {
    if (prefersReducedMotion) return;
    autoplay = setInterval(() => goTo(index + 1), 5000);
  }
  function resetAutoplay() { clearInterval(autoplay); startAutoplay(); }

  startAutoplay();
}

/* ===================================================================
   18. RENDER + LOGIC: FAQ ACCORDION
   =================================================================== */
function initFAQ() {
  const list = $("#faqList");
  list.innerHTML = CONFIG.faqs.map((f, i) => `
    <div class="faq-item" data-index="${i}">
      <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${i}">
        <span>${escapeHTML(f.q)}</span>
        <span class="faq-icon" aria-hidden="true"></span>
      </button>
      <div class="faq-answer" id="faq-answer-${i}">
        <p class="faq-answer-inner">${escapeHTML(f.a)}</p>
      </div>
    </div>
  `).join("");

  $$(".faq-question", list).forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const answer = $(".faq-answer", item);
      const isOpen = item.classList.contains("open");

      $$(".faq-item", list).forEach((other) => {
        other.classList.remove("open");
        $(".faq-answer", other).style.maxHeight = null;
        $(".faq-question", other).setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* ===================================================================
   19. RENDER: FOOTER SOCIALS
   =================================================================== */
const SOCIAL_ICONS = {
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.6h2.6l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.28C16.3 4.2 15.36 4.1 14.26 4.1c-2.3 0-3.87 1.4-3.87 3.98v2.32H7.8v3h2.6V21h3.1z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.763.462 3.483 1.34 4.997L2 22l5.13-1.345a9.96 9.96 0 0 0 4.874 1.242h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.67-1.04-5.18-2.929-7.07a9.935 9.935 0 0 0-7.072-2.827z"/></svg>'
};

function renderFooterSocials() {
  $("#footerSocials").innerHTML = CONFIG.socials.map((s) => `
    <a class="social-icon" href="${s.url}" target="_blank" rel="noopener" aria-label="${escapeHTML(s.name)}">${SOCIAL_ICONS[s.icon] || ""}</a>
  `).join("");
}

/* ===================================================================
   20. CONTACT FORM + WHATSAPP
   =================================================================== */
function buildWhatsAppLink(customMessage) {
  const msg = encodeURIComponent(customMessage || CONFIG.whatsappMessage);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;
}

function initContact() {
  $("#footerEmail").textContent = CONFIG.email;
  $("#footerPhone").textContent = CONFIG.phoneDisplay;

  const waBtn = $("#whatsappBtn");
  waBtn.href = buildWhatsAppLink();

  const form = $("#contactForm");
  const note = $("#formNote");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#fullName").value.trim();
    const eventType = $("#eventType").value;
    const message = $("#messageBox").value.trim();

    if (!name || !eventType) {
      note.textContent = "Please fill in your name and event type.";
      note.style.color = "#ff8a8a";
      return;
    }

    const waMessage = `Hi Carftora! My name is ${name}. I'd like a ${eventType} invitation.${message ? " Details: " + message : ""}`;
    waBtn.href = buildWhatsAppLink(waMessage);

    note.style.color = "var(--accent)";
    note.textContent = "Thanks! Click 'Chat on WhatsApp' to send us your details instantly, or we'll reach out to your provided info shortly.";
    showToast("Request captured — opening WhatsApp is the fastest way to reach us!");
    form.reset();
  });

  // keep the WhatsApp button message fresh as the user types
  ["fullName", "eventType", "messageBox"].forEach((id) => {
    $("#" + id).addEventListener("input", () => {
      const name = $("#fullName").value.trim();
      const eventType = $("#eventType").value;
      const message = $("#messageBox").value.trim();
      const waMessage = `Hi Carftora! ${name ? "My name is " + name + ". " : ""}${eventType ? "I'd like a " + eventType + " invitation. " : ""}${message ? "Details: " + message : ""}`.trim();
      waBtn.href = buildWhatsAppLink(waMessage || CONFIG.whatsappMessage);
    });
  });
}

/* ===================================================================
   21. TOAST
   =================================================================== */
let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

/* ===================================================================
   22. SCROLL REVEAL (IntersectionObserver)
   =================================================================== */
let heroCounted = false;
function initScrollReveal() {
  const revealEls = $$(".reveal-up");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        if (entry.target.closest(".hero-text") && !heroCounted) {
          heroCounted = true;
          animateCounters();
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach((el) => observer.observe(el));

  // Hero reveals immediately since it's above the fold
  $$(".hero .reveal-up").forEach((el) => el.classList.add("in-view"));
  if (!heroCounted) { heroCounted = true; animateCounters(); }
}

/* ===================================================================
   23. INIT — build the page
   =================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderShowcase();
  initShowcaseFilters();
  renderWeddingDesigns();
  renderServices();
  initTimeline();
  renderFeatures();
  initCountdown();
  initPhoneActions();
  renderGallery();
  initGalleryFilters();
  renderPricing();
  initTestimonials();
  initFAQ();
  renderFooterSocials();
  initContact();
});
