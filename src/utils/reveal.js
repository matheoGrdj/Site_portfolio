let observer;

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const initScrollReveal = () => {
  const targets = document.querySelectorAll('[data-reveal]');

  if (!targets.length) {
    return;
  }

  targets.forEach((target) => target.classList.add('reveal'));

  if (prefersReducedMotion()) {
    targets.forEach((target) => {
      target.classList.add('is-revealed');
      target.querySelectorAll('.skill-bar-fill').forEach((bar) => {
        bar.classList.add('is-revealed');
      });
    });
    return;
  }

  // Assign stagger delays to sibling [data-reveal] elements
  const processed = new Set();
  targets.forEach((target) => {
    const parent = target.parentElement;
    if (!parent || processed.has(parent)) return;
    processed.add(parent);

    const siblings = parent.querySelectorAll(':scope > [data-reveal], :scope > * > [data-reveal]');
    siblings.forEach((sib, index) => {
      sib.style.setProperty('--reveal-delay', `${index * 120}ms`);
    });
  });

  if (observer) {
    observer.disconnect();
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          entry.target.querySelectorAll('.skill-bar-fill').forEach((bar) => {
            bar.classList.add('is-revealed');
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  );

  targets.forEach((target) => {
    if (!target.classList.contains('is-revealed')) {
      observer.observe(target);
    }
  });
};
