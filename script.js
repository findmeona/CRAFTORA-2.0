(() => {
  'use strict';

  /* ---------- Mobile menu ---------- */
  const header = document.getElementById('siteHeader');
  const menuToggle = document.getElementById('menuToggle');

  if (menuToggle && header) {
    menuToggle.addEventListener('click', () => {
      const isOpen = header.classList.toggle('nav-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    document.querySelectorAll('.mobile-nav a').forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('nav-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  /* ---------- Back to top ---------- */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealTargets = document.querySelectorAll(
    '.section-head, .cat-card, .story-card, .process-list li, .editor-inner, .hero-copy, .gallery-card, .gallery-filters'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  document.querySelectorAll('.gallery-card').forEach((card, i) => {
    card.style.transitionDelay = `${(i % 4) * 70}ms`;
  });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- Editor mock: swatches & chips are illustrative ---------- */
  document.querySelectorAll('.swatch-row').forEach(row => {
    row.querySelectorAll('.swatch').forEach(swatch => {
      swatch.addEventListener('click', () => {
        row.querySelectorAll('.swatch').forEach(s => s.removeAttribute('data-active'));
        swatch.setAttribute('data-active', 'true');
        const canvasCard = document.getElementById('canvasCard');
        if (canvasCard) canvasCard.style.background = getComputedStyle(swatch).getPropertyValue('--sw');
      });
    });
  });

  document.querySelectorAll('.chip-row').forEach(row => {
    row.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        row.querySelectorAll('.chip').forEach(c => c.removeAttribute('data-active'));
        chip.setAttribute('data-active', 'true');
      });
    });
  });

  /* ---------- Demo lightbox ---------- */
  const lightbox = document.getElementById('demoLightbox');
  const lightboxVisual = document.getElementById('demoLightboxVisual');
  const lightboxEyebrow = document.getElementById('demoLightboxEyebrow');
  const lightboxTitle = document.getElementById('demoLightboxTitle');
  const lightboxCopy = document.getElementById('demoLightboxCopy');
  const lightboxWhatsapp = document.getElementById('demoLightboxWhatsapp');

  const demoCopy = {
    wedding: { title: 'Wedding Invitations', cat: 'Category', copy: 'A full suite — invitation, RSVP, and save-the-date — designed as one story, previewed on real paper and foil.' },
    birthday: { title: 'Birthday Cards', cat: 'Category', copy: 'Playful layouts that scale from a first birthday to a milestone one, with matching envelopes.' },
    baby: { title: 'Baby Announcements', cat: 'Category', copy: 'Soft palettes built around your photo, ready to mail the same week baby arrives.' },
    business: { title: 'Business Cards', cat: 'Category', copy: 'Letterpress or foil, printed on true cotton stock and mailed within days.' },
    holiday: { title: 'Holiday Cards', cat: 'Category', copy: 'Photo-forward layouts for the whole year in review, with bulk address printing.' },
    photobooks: { title: 'Photo Books & Wall Art', cat: 'Category', copy: 'The same photos, bound into a book, framed, or printed on canvas.' }
  };

  function openLightbox({ title, cat, copy, visualEl, photoUrl, whatsappText }) {
    if (!lightbox) return;

    lightboxVisual.innerHTML = '';
    lightboxVisual.style.background = '';
    lightboxVisual.style.backgroundImage = '';

    if (photoUrl) {
      lightboxVisual.style.backgroundImage = `url('${photoUrl}')`;
      lightboxVisual.style.backgroundSize = 'cover';
      lightboxVisual.style.backgroundPosition = 'center';
    } else if (visualEl) {
      const clone = visualEl.cloneNode(true);
      clone.removeAttribute('style');
      lightboxVisual.style.background = getComputedStyle(visualEl).backgroundColor || 'var(--slate-100)';
      lightboxVisual.appendChild(clone);
    }

    lightboxEyebrow.textContent = cat || 'Card demo';
    lightboxTitle.textContent = title;
    lightboxCopy.textContent = copy || '';
    lightboxWhatsapp.href = `https://wa.me/917405105606?text=${encodeURIComponent(whatsappText || `Hi Craftora, I'd like to know more about ${title}.`)}`;

    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDemoLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Category tile "View demo" buttons
  document.querySelectorAll('.cat-demo-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.demoTarget;
      const card = document.querySelector(`.cat-card[data-category="${key}"]`);
      const visual = card ? card.querySelector('.cat-visual') : null;
      const info = demoCopy[key];
      if (!info) return;
      openLightbox({
        title: info.title,
        cat: 'Card demo',
        copy: info.copy,
        visualEl: visual,
        photoUrl: visual && visual.classList.contains('cat-visual--photo') ? visual.style.backgroundImage.slice(5, -2) : null,
        whatsappText: `Hi Craftora, I saw the ${info.title} demo and would like to know more.`
      });
    });
  });

  // Gallery card "Preview" buttons
  document.querySelectorAll('.gallery-demo-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.gallery-card');
      const visual = card ? card.querySelector('.gallery-visual') : null;
      openLightbox({
        title: btn.dataset.title,
        cat: btn.dataset.cat,
        copy: btn.dataset.copy,
        visualEl: visual,
        photoUrl: btn.dataset.photo || null,
        whatsappText: `Hi Craftora, I like the "${btn.dataset.title}" design and would like to know more.`
      });
    });
  });

  document.querySelectorAll('[data-close-lightbox]').forEach(el => {
    el.addEventListener('click', closeDemoLightbox);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDemoLightbox();
  });

  /* ---------- Gallery filters ---------- */
  const galleryFilters = document.querySelectorAll('.gallery-filter');
  const galleryCards = document.querySelectorAll('.gallery-card');

  galleryFilters.forEach(filterBtn => {
    filterBtn.addEventListener('click', () => {
      galleryFilters.forEach(b => { b.classList.remove('is-active'); b.setAttribute('aria-selected', 'false'); });
      filterBtn.classList.add('is-active');
      filterBtn.setAttribute('aria-selected', 'true');

      const filter = filterBtn.dataset.filter;
      galleryCards.forEach(card => {
        const match = filter === 'all' || card.dataset.type === filter;
        if (match) {
          card.classList.remove('is-hidden');
          requestAnimationFrame(() => { card.style.opacity = '1'; card.style.transform = ''; });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(.94)';
          setTimeout(() => card.classList.add('is-hidden'), 250);
        }
      });
    });
  });

  /* ---------- Newsletter form (front-end only demo) ---------- */
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterNote = document.getElementById('newsletterNote');

  if (newsletterForm && newsletterNote) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      const email = emailInput ? emailInput.value.trim() : '';

      if (email) {
        newsletterNote.textContent = `You're on the list — new templates land in ${email.split('@')[0] ? 'your inbox' : 'your inbox'} soon.`;
        newsletterForm.reset();
      } else {
        newsletterNote.textContent = 'Add an email address to join.';
      }
    });
  }

  /* ---------- Close mobile menu on resize to desktop ---------- */
  window.addEventListener('resize', () => {
    if (window.innerWidth > 880 && header) {
      header.classList.remove('nav-open');
      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open menu');
      }
    }
  });
})();
