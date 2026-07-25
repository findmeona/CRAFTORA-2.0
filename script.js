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
    '.section-head, .cat-card, .story-card, .process-list li, .editor-inner, .hero-copy'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

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
    wedding: { title: 'Wedding Invitations', copy: 'A full suite — invitation, RSVP, and save-the-date — designed as one story, previewed on real paper and foil.' },
    birthday: { title: 'Birthday Cards', copy: 'Playful layouts that scale from a first birthday to a milestone one, with matching envelopes.' },
    baby: { title: 'Baby Announcements', copy: 'Soft palettes built around your photo, ready to mail the same week baby arrives.' },
    business: { title: 'Business Cards', copy: 'Letterpress or foil, printed on true cotton stock and mailed within days.' },
    holiday: { title: 'Holiday Cards', copy: 'Photo-forward layouts for the whole year in review, with bulk address printing.' },
    photobooks: { title: 'Photo Books & Wall Art', copy: 'The same photos, bound into a book, framed, or printed on canvas.' }
  };

  function openDemoLightbox(categoryKey) {
    const card = document.querySelector(`.cat-card[data-category="${categoryKey}"]`);
    const visual = card ? card.querySelector('.cat-visual') : null;
    const info = demoCopy[categoryKey];
    if (!lightbox || !visual || !info) return;

    lightboxVisual.innerHTML = '';
    const clone = visual.cloneNode(true);
    clone.removeAttribute('style');
    if (visual.style.backgroundImage) clone.style.backgroundImage = visual.style.backgroundImage;
    lightboxVisual.style.background = getComputedStyle(visual).backgroundColor;
    lightboxVisual.appendChild(clone);

    lightboxEyebrow.textContent = 'Card demo';
    lightboxTitle.textContent = info.title;
    lightboxCopy.textContent = info.copy;
    lightboxWhatsapp.href = `https://wa.me/917405105606?text=${encodeURIComponent(`Hi Craftora, I saw the ${info.title} demo and would like to know more.`)}`;

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

  document.querySelectorAll('.cat-demo-btn').forEach(btn => {
    btn.addEventListener('click', () => openDemoLightbox(btn.dataset.demoTarget));
  });
  document.querySelectorAll('[data-close-lightbox]').forEach(el => {
    el.addEventListener('click', closeDemoLightbox);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDemoLightbox();
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
