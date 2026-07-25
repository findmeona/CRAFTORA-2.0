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
