/* =========================================================
   CARFTORA — script.js
   ========================================================= */

/* ============================================================
   CONFIGURATION — edit this section to update business info.
   Nothing below this block needs to change for basic edits.
   ============================================================ */
const CONFIG = {
  BUSINESS_NAME: "Carftora",
  BUSINESS_DESCRIPTION: "Beautiful digital invitations for every celebration, designed with creativity and delivered with love.",

  WHATSAPP_NUMBER: "917405105606",      // country code + number, no + or spaces
  DISPLAY_PHONE: "+91 7405105606",

  INSTAGRAM_URL: "https://instagram.com/carftora",
  FACEBOOK_URL: "https://facebook.com/carftora",
  PINTEREST_URL: "https://pinterest.com/carftora",
  EMAIL: "hello@carftora.com",

  PRICING: {
    basic:   { name: "Basic",   price: "₹999"  },
    premium: { name: "Premium", price: "₹1,999" },
    luxury:  { name: "Luxury",  price: "₹3,999" }
  },

  // The wedding used across hero / live demo / modal defaults
  DEMO_EVENT: {
    couple: "Rahul & Priya",
    date: "2026-11-24T19:00:00",
    venue: "The Grand Palace, Jaipur"
  }
};

function whatsappLink(message){
  const base = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/* ============================================================
   DATA — invitation designs & gallery content
   ============================================================ */
const FEATURED_DESIGNS = [
  { theme: "theme-floral",      names: "Rahul & Priya",  date: "24 | NOV | 2026", venue: "The Grand Palace, Jaipur", style: "Floral Bliss"    },
  { theme: "theme-greenery",    names: "Aarav & Diya",   date: "12 | DEC | 2026", venue: "Lakeview Gardens, Udaipur", style: "Greenery Love"  },
  { theme: "theme-navy",        names: "Vikram & Ananya",date: "05 | JAN | 2027", venue: "Royal Fort Hall, Jodhpur",  style: "Royal Navy"     },
  { theme: "theme-blush",       names: "Viaham & Priya", date: "18 | FEB | 2027", venue: "Rosewood Resort, Udaipur",  style: "Blush Bloom"    },
  { theme: "theme-teal",        names: "Rohan & Sneha",  date: "09 | MAR | 2027", venue: "The Emerald Manor, Goa",    style: "Teal Elegance"  },
  { theme: "theme-traditional", names: "Rahul & Priya",  date: "24 | NOV | 2026", venue: "The Grand Palace, Jaipur",  style: "Traditional"    },
  { theme: "theme-gold",        names: "Aditya & Meera", date: "22 | OCT | 2026", venue: "Golden Sands Palace, Jaipur", style: "Royal Gold"    },
  { theme: "theme-minimal",     names: "Kabir & Anika",  date: "03 | APR | 2027", venue: "The Ivory Room, Mumbai",    style: "Modern Minimal" }
];

const GALLERY_ITEMS = [
  { theme: "theme-floral",      title: "Rahul & Priya",       cat: "wedding",     tag: "Wedding" },
  { theme: "theme-greenery",    title: "Aarav & Diya",        cat: "engagement",  tag: "Engagement" },
  { theme: "theme-navy",        title: "Vikram & Ananya",     cat: "wedding",     tag: "Wedding" },
  { theme: "theme-blush",       title: "Oh Baby! It's a Girl",cat: "babyshower",  tag: "Baby Shower" },
  { theme: "theme-teal",        title: "Happy Birthday Aarav",cat: "birthday",    tag: "Birthday" },
  { theme: "theme-traditional", title: "25 Years Together",   cat: "anniversary", tag: "Anniversary" },
  { theme: "theme-gold",        title: "Aditya & Meera",      cat: "wedding",     tag: "Wedding" },
  { theme: "theme-minimal",     title: "Kabir & Anika",       cat: "engagement",  tag: "Engagement" },
  { theme: "theme-floral",      title: "Neha's Sangeet Night",cat: "party",       tag: "Party" },
  { theme: "theme-blush",       title: "Baby Aarohi's Shower",cat: "babyshower",  tag: "Baby Shower" },
  { theme: "theme-navy",        title: "Rohit's 30th Bash",   cat: "birthday",    tag: "Birthday" },
  { theme: "theme-greenery",    title: "Mehta Anniversary",   cat: "anniversary", tag: "Anniversary" }
];

const TESTIMONIALS = [
  { quote: "Carftora made our wedding invitation absolutely beautiful! Every guest asked where we got it designed.", name: "Neha Sharma", event: "Wedding", stars: 5 },
  { quote: "Everyone loved the animation. It felt so premium and unique — completely worth it.", name: "Rohit Verma", event: "Birthday", stars: 5 },
  { quote: "The process was smooth, simple and very professional from start to finish.", name: "Anjali Mehta", event: "Engagement", stars: 5 },
  { quote: "We got so many compliments on our save-the-date. Carftora truly understood our vision.", name: "Karan & Isha", event: "Wedding", stars: 5 },
  { quote: "Fast delivery, gorgeous design, and the WhatsApp support made everything effortless.", name: "Priya Nair", event: "Baby Shower", stars: 5 }
];

const FAQS = [
  { q: "How long does it take?", a: "Most digital invitations are delivered within 24–48 hours, depending on the plan you choose. Luxury custom designs may take 3–5 days for full personalisation." },
  { q: "Can I customize the invitation?", a: "Absolutely. Every plan includes revisions so you can adjust text, colors, photos and layout until it feels exactly right for your celebration." },
  { q: "Can I add music to my invitation?", a: "Yes — background music is included with our Premium and Luxury plans, and can be added to Basic invitations as an add-on." },
  { q: "Can I add a Google Maps location?", a: "Yes, we can embed a Google Maps location button so your guests can get directions to your venue with a single tap." },
  { q: "Can guests RSVP through the invitation?", a: "Yes, Premium and Luxury invitations include a built-in RSVP feature so you can track who's coming in real time." },
  { q: "Can I share the invitation on WhatsApp?", a: "Definitely. Every invitation comes with a shareable link that works beautifully on WhatsApp, Instagram, Email and SMS." },
  { q: "Can you create custom designs?", a: "Yes — our Luxury plan is built around fully custom design, tailored to your colors, theme and story from scratch." },
  { q: "How do I order?", a: "Simply tap 'Choose Plan' on your preferred package or message us directly on WhatsApp, and our team will guide you through the rest." }
];

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  wireBusinessInfo();
  initLoader();
  initHeaderScroll();
  initMobileMenu();
  initCursorGlow();
  initScrollReveal();
  renderFeaturedCarousel();
  initGallery();
  initPricingButtons();
  renderTestimonials();
  renderFAQ();
  initCountdown();
  initInvitationModal();
  initLightbox();
  initBackToTop();
  initMiscButtons();
  document.getElementById("footerYear").textContent = new Date().getFullYear();
});

/* ---------- wire config-driven links/text ---------- */
function wireBusinessInfo(){
  document.querySelectorAll('a[href^="https://wa.me/917405105606"]').forEach(a => {
    if (!a.href.includes("?text=")) a.href = whatsappLink();
  });
}

/* ---------- page loader ---------- */
function initLoader(){
  const loader = document.getElementById("pageLoader");
  const hide = () => loader.classList.add("hidden");
  window.addEventListener("load", () => setTimeout(hide, 500));
  // Safety fallback
  setTimeout(hide, 2500);
}

/* ---------- sticky header ---------- */
function initHeaderScroll(){
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // active nav link highlighting
  const sections = document.querySelectorAll("main section[id], main#home");
  const links = document.querySelectorAll(".nav-link");
  const spy = () => {
    let current = "home";
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) current = sec.id;
    });
    links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${current}`));
  };
  window.addEventListener("scroll", spy, { passive: true });
  spy();
}

/* ---------- mobile menu ---------- */
function initMobileMenu(){
  const btn = document.getElementById("hamburgerBtn");
  const menu = document.getElementById("mobileMenu");
  const backdrop = document.getElementById("mobileMenuBackdrop");
  const closeBtn = document.getElementById("mobileMenuClose");
  const links = document.querySelectorAll(".mobile-link");

  const open = () => {
    menu.classList.add("open"); backdrop.classList.add("open");
    btn.classList.add("active"); btn.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    menu.classList.remove("open"); backdrop.classList.remove("open");
    btn.classList.remove("active"); btn.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  btn.addEventListener("click", () => menu.classList.contains("open") ? close() : open());
  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", close);
  links.forEach(l => l.addEventListener("click", close));
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
}

/* ---------- custom cursor glow (desktop only) ---------- */
function initCursorGlow(){
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
  const glow = document.getElementById("cursorGlow");
  let active = false;
  window.addEventListener("mousemove", e => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
    if (!active){ glow.classList.add("active"); active = true; }
  });
  document.addEventListener("mouseleave", () => glow.classList.remove("active"));
}

/* ---------- scroll reveal (IntersectionObserver) ---------- */
function initScrollReveal(){
  const items = document.querySelectorAll(".reveal, .step-line");
  if (!("IntersectionObserver" in window)){
    items.forEach(i => i.classList.add("in-view"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
  items.forEach(i => io.observe(i));
}

/* ============================================================
   FEATURED INVITATIONS CAROUSEL
   ============================================================ */
function invitationTileHTML(d, idx){
  return `
    <li class="invite-tile" data-idx="${idx}">
      <div class="tile-preview ${d.theme}">
        <div class="invite-deco invite-deco--tl" aria-hidden="true"><svg viewBox="0 0 100 100"><use href="#flower-motif"></use></svg></div>
        <p class="tile-kicker">Invitation for the wedding of</p>
        <h3 class="tile-names">${d.names}</h3>
        <p class="tile-date">${d.date}</p>
      </div>
      <div class="tile-info">
        <p class="tile-name">${d.names}</p>
        <p class="tile-style">${d.style}</p>
        <div class="tile-actions">
          <button class="btn btn-outline preview-btn" data-idx="${idx}" type="button">Preview</button>
          <button class="btn btn-primary choose-btn" data-idx="${idx}" type="button">Choose Design</button>
        </div>
      </div>
    </li>`;
}

let carouselIndex = 0;
let carouselCardWidth = 0;

function renderFeaturedCarousel(){
  const track = document.getElementById("carouselTrack");
  track.innerHTML = FEATURED_DESIGNS.map(invitationTileHTML).join("");

  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");

  const updateMetrics = () => {
    const tile = track.querySelector(".invite-tile");
    if (!tile) return;
    const gap = parseFloat(getComputedStyle(track).gap) || 24;
    carouselCardWidth = tile.getBoundingClientRect().width + gap;
  };
  updateMetrics();
  window.addEventListener("resize", updateMetrics);

  const visibleCount = () => Math.max(1, Math.floor(track.parentElement.getBoundingClientRect().width / carouselCardWidth));

  const moveTo = (idx) => {
    const max = FEATURED_DESIGNS.length - visibleCount();
    carouselIndex = Math.max(0, Math.min(idx, Math.max(max, 0)));
    track.style.transform = `translateX(-${carouselIndex * carouselCardWidth}px)`;
  };

  prevBtn.addEventListener("click", () => moveTo(carouselIndex - 1));
  nextBtn.addEventListener("click", () => moveTo(carouselIndex + 1));

  // drag / swipe support
  let isDown = false, startX = 0, startTransform = 0;
  const getX = e => (e.touches ? e.touches[0].clientX : e.clientX);

  track.addEventListener("pointerdown", e => {
    isDown = true; startX = getX(e);
    startTransform = -carouselIndex * carouselCardWidth;
    track.style.transition = "none";
  });
  window.addEventListener("pointermove", e => {
    if (!isDown) return;
    const dx = getX(e) - startX;
    track.style.transform = `translateX(${startTransform + dx}px)`;
  });
  window.addEventListener("pointerup", e => {
    if (!isDown) return;
    isDown = false;
    track.style.transition = "";
    const dx = getX(e) - startX;
    if (dx < -60) moveTo(carouselIndex + 1);
    else if (dx > 60) moveTo(carouselIndex - 1);
    else moveTo(carouselIndex);
  });

  // preview / choose buttons
  track.addEventListener("click", e => {
    const previewBtn = e.target.closest(".preview-btn");
    const chooseBtn = e.target.closest(".choose-btn");
    if (previewBtn) openInvitationModal(FEATURED_DESIGNS[+previewBtn.dataset.idx]);
    if (chooseBtn){
      const d = FEATURED_DESIGNS[+chooseBtn.dataset.idx];
      const msg = `Hi Carftora, I'd like to choose the "${d.style}" invitation design (${d.names}).`;
      window.open(whatsappLink(msg), "_blank", "noopener");
    }
  });
}

/* ============================================================
   INVITATION PREVIEW MODAL
   ============================================================ */
function initInvitationModal(){
  const overlay = document.getElementById("previewModal");
  const closeBtn = document.getElementById("modalClose");
  closeBtn.addEventListener("click", closeInvitationModal);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeInvitationModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeInvitationModal(); });

  document.getElementById("modalRsvp").addEventListener("click", () => {
    closeInvitationModal();
    showToast("RSVP recorded — thank you! 🎉");
  });
}

function openInvitationModal(design){
  const overlay = document.getElementById("previewModal");
  const card = document.getElementById("modalInviteCard");
  card.className = "modal-invite " + design.theme;
  document.getElementById("modalNames").innerHTML = design.names.replace("&", "<span>&amp;</span>");
  document.getElementById("modalDate").textContent = design.date;
  document.getElementById("modalVenue").textContent = design.venue;
  document.getElementById("modalStyle").textContent = design.style;
  document.getElementById("modalLocation").href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(design.venue)}`;

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeInvitationModal(){
  const overlay = document.getElementById("previewModal");
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/* ============================================================
   LIVE COUNTDOWN DEMO
   ============================================================ */
function initCountdown(){
  const target = new Date(CONFIG.DEMO_EVENT.date).getTime();
  const els = {
    d: document.getElementById("cdDays"),
    h: document.getElementById("cdHours"),
    m: document.getElementById("cdMins"),
    s: document.getElementById("cdSecs")
  };

  function tick(){
    const now = Date.now();
    let diff = target - now;
    if (diff < 0){
      // keep the demo evergreen: loop the date forward by a year once passed
      const d = new Date(CONFIG.DEMO_EVENT.date);
      d.setFullYear(new Date().getFullYear() + (d < new Date() ? 1 : 0));
      diff = d.getTime() - now;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    els.d.textContent = String(days);
    els.h.textContent = String(hours).padStart(2, "0");
    els.m.textContent = String(mins).padStart(2, "0");
    els.s.textContent = String(secs).padStart(2, "0");
  }
  tick();
  setInterval(tick, 1000);
}

/* ============================================================
   MISC BUTTONS (RSVP demo, share)
   ============================================================ */
function initMiscButtons(){
  const rsvpBtn = document.getElementById("rsvpBtn");
  rsvpBtn?.addEventListener("click", () => showToast("RSVP recorded — thank you! 🎉"));

  const shareBtn = document.getElementById("shareBtn");
  shareBtn?.addEventListener("click", async () => {
    const shareData = {
      title: `${CONFIG.DEMO_EVENT.couple} — Wedding Invitation`,
      text: `You're invited to the wedding of ${CONFIG.DEMO_EVENT.couple}!`,
      url: window.location.href
    };
    if (navigator.share){
      try { await navigator.share(shareData); } catch (e) { /* user cancelled */ }
    } else {
      window.open(whatsappLink(`${shareData.text} ${shareData.url}`), "_blank", "noopener");
    }
  });
}

/* ============================================================
   GALLERY — filter + lightbox
   ============================================================ */
function galleryItemHTML(item, idx){
  return `
    <figure class="gallery-item ${item.theme}" data-cat="${item.cat}" data-idx="${idx}" tabindex="0" role="button" aria-label="View ${item.title} full screen">
      <span class="gallery-item-zoom" aria-hidden="true"><i class="fa-solid fa-expand"></i></span>
      <figcaption class="gallery-item-caption">
        <strong>${item.title}</strong>
        <span>${item.tag}</span>
      </figcaption>
    </figure>`;
}

function initGallery(){
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = GALLERY_ITEMS.map(galleryItemHTML).join("");

  const chips = document.querySelectorAll(".filter-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => { c.classList.remove("active"); c.setAttribute("aria-selected", "false"); });
      chip.classList.add("active"); chip.setAttribute("aria-selected", "true");
      const filter = chip.dataset.filter;
      document.querySelectorAll(".gallery-item").forEach(item => {
        const show = filter === "all" || item.dataset.cat === filter;
        item.classList.toggle("hide", !show);
      });
    });
  });

  grid.addEventListener("click", e => {
    const item = e.target.closest(".gallery-item");
    if (item) openLightbox(GALLERY_ITEMS[+item.dataset.idx]);
  });
  grid.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " "){
      const item = e.target.closest(".gallery-item");
      if (item){ e.preventDefault(); openLightbox(GALLERY_ITEMS[+item.dataset.idx]); }
    }
  });
}

function initLightbox(){
  const overlay = document.getElementById("lightboxOverlay");
  const closeBtn = document.getElementById("lightboxClose");
  closeBtn.addEventListener("click", closeLightbox);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeLightbox(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });
}

function openLightbox(item){
  const overlay = document.getElementById("lightboxOverlay");
  const content = document.getElementById("lightboxContent");
  content.className = "lightbox-content " + item.theme;
  content.innerHTML = `
    <div class="tile-preview ${item.theme}" style="height:100%;">
      <div class="invite-deco invite-deco--tl" aria-hidden="true"><svg viewBox="0 0 100 100"><use href="#flower-motif"></use></svg></div>
      <p class="tile-kicker">${item.tag}</p>
      <h3 class="tile-names" style="font-size:30px;">${item.title}</h3>
    </div>`;
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeLightbox(){
  const overlay = document.getElementById("lightboxOverlay");
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/* ============================================================
   PRICING — WhatsApp prefilled messages
   ============================================================ */
function initPricingButtons(){
  document.querySelectorAll(".plan-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const plan = btn.dataset.plan;
      const price = btn.dataset.price;
      const msg = `Hi Carftora, I am interested in the ${plan} invitation package (${price}).`;
      window.open(whatsappLink(msg), "_blank", "noopener");
    });
  });
}

/* ============================================================
   TESTIMONIALS CAROUSEL — auto + manual
   ============================================================ */
function testimonialHTML(t){
  const initials = t.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
  const bg = ["var(--pink)", "var(--purple)", "var(--orange)", "var(--mint)", "var(--blue)"][Math.floor(Math.random() * 5)];
  return `
    <div class="testi-card">
      <div class="testi-quote-icon"><i class="fa-solid fa-quote-left"></i></div>
      <p class="testi-quote">"${t.quote}"</p>
      <div class="testi-stars">${"★".repeat(t.stars)}</div>
      <div class="testi-person">
        <span class="testi-avatar" style="background:${bg}">${initials}</span>
        <span>
          <span class="testi-name">${t.name}</span><br>
          <span class="testi-event">${t.event}</span>
        </span>
      </div>
    </div>`;
}

function renderTestimonials(){
  const track = document.getElementById("testiTrack");
  const dotsWrap = document.getElementById("testiDots");
  track.innerHTML = TESTIMONIALS.map(testimonialHTML).join("");
  dotsWrap.innerHTML = TESTIMONIALS.map((_, i) => `<button class="testi-dot ${i === 0 ? "active" : ""}" data-idx="${i}" aria-label="Show testimonial ${i + 1}"></button>`).join("");

  let idx = 0;
  const dots = dotsWrap.querySelectorAll(".testi-dot");

  const goTo = (i) => {
    idx = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle("active", di === idx));
  };

  dots.forEach(d => d.addEventListener("click", () => { goTo(+d.dataset.idx); resetAuto(); }));

  let auto = setInterval(() => goTo(idx + 1), 5500);
  function resetAuto(){ clearInterval(auto); auto = setInterval(() => goTo(idx + 1), 5500); }

  // pause on hover
  const wrap = track.closest(".testi-wrap");
  wrap.addEventListener("mouseenter", () => clearInterval(auto));
  wrap.addEventListener("mouseleave", resetAuto);
}

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
function faqItemHTML(item, idx){
  return `
    <div class="faq-item" data-idx="${idx}">
      <button class="faq-question" aria-expanded="false">
        <span>${item.q}</span>
        <i class="fa-solid fa-plus"></i>
      </button>
      <div class="faq-answer"><p>${item.a}</p></div>
    </div>`;
}

function renderFAQ(){
  const list = document.getElementById("faqList");
  list.innerHTML = FAQS.map(faqItemHTML).join("");

  list.addEventListener("click", e => {
    const question = e.target.closest(".faq-question");
    if (!question) return;
    const item = question.closest(".faq-item");
    const answer = item.querySelector(".faq-answer");
    const isOpen = item.classList.contains("open");

    // close all others
    list.querySelectorAll(".faq-item.open").forEach(openItem => {
      if (openItem !== item){
        openItem.classList.remove("open");
        openItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
        openItem.querySelector(".faq-answer").style.maxHeight = null;
      }
    });

    if (isOpen){
      item.classList.remove("open");
      question.setAttribute("aria-expanded", "false");
      answer.style.maxHeight = null;
    } else {
      item.classList.add("open");
      question.setAttribute("aria-expanded", "true");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
function initBackToTop(){
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 600);
  }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ============================================================
   TOAST
   ============================================================ */
let toastTimer;
function showToast(message){
  const toast = document.getElementById("toast");
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}
