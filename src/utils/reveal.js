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
    targets.forEach((target) => target.classList.add('is-revealed'));
    return;
  }

  if (observer) {
    observer.disconnect();
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
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
