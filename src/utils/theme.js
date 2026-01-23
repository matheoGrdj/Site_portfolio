const STORAGE_KEY = "portfolio-theme";

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const getStoredTheme = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    return null;
  }
};

const applyTheme = (theme, { persist = true } = {}) => {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;

  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      // Ignore storage failures.
    }
  }
};

export const getCurrentTheme = () =>
  document.documentElement.dataset.theme || getSystemTheme();

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getRevealRadius = (origin) => {
  const maxX = Math.max(origin.x, window.innerWidth - origin.x);
  const maxY = Math.max(origin.y, window.innerHeight - origin.y);
  return Math.hypot(maxX, maxY);
};

const runViewTransition = (nextTheme, origin) => {
  const radius = getRevealRadius(origin);
  const root = document.documentElement;

  root.style.setProperty("--reveal-x", `${origin.x}px`);
  root.style.setProperty("--reveal-y", `${origin.y}px`);
  root.style.setProperty("--reveal-radius", `${radius}px`);

  const transition = document.startViewTransition(() => {
    applyTheme(nextTheme);
  });

  transition.ready.then(() => {
    root.animate(
      {
        clipPath: [
          `circle(0px at ${origin.x}px ${origin.y}px)`,
          `circle(${radius}px at ${origin.x}px ${origin.y}px)`,
        ],
      },
      {
        duration: 1500,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
};

const runLegacyReveal = (nextTheme, origin) => {
  const overlay = document.querySelector(".theme-reveal");

  if (!overlay) {
    applyTheme(nextTheme);
    return;
  }

  const radius = getRevealRadius(origin);
  const rootStyles = getComputedStyle(document.documentElement);
  const bgVar = nextTheme === "dark" ? "--bg-dark" : "--bg-light";
  const revealBg = rootStyles.getPropertyValue(bgVar).trim();

  overlay.style.setProperty("--reveal-x", `${origin.x}px`);
  overlay.style.setProperty("--reveal-y", `${origin.y}px`);
  overlay.style.setProperty("--reveal-radius", `${radius}px`);

  if (revealBg) {
    overlay.style.setProperty("--reveal-bg", revealBg);
  }

  overlay.classList.remove("is-fade");
  overlay.classList.add("is-active");

  const expandMs = 550;
  const fadeMs = 200;

  window.setTimeout(() => {
    applyTheme(nextTheme);
    overlay.classList.add("is-fade");
  }, expandMs);

  window.setTimeout(() => {
    overlay.classList.remove("is-active", "is-fade");
    overlay.style.removeProperty("--reveal-bg");
  }, expandMs + fadeMs);
};

export const toggleTheme = (origin) => {
  const currentTheme = getCurrentTheme();
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  if (prefersReducedMotion() || !origin) {
    applyTheme(nextTheme);
    return nextTheme;
  }

  if (document.startViewTransition) {
    runViewTransition(nextTheme, origin);
  } else {
    runLegacyReveal(nextTheme, origin);
  }

  return nextTheme;
};

export const initTheme = () => {
  const storedTheme = getStoredTheme();
  const initialTheme = storedTheme || getSystemTheme();

  applyTheme(initialTheme, { persist: Boolean(storedTheme) });

  if (!storedTheme) {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", (event) => {
      applyTheme(event.matches ? "dark" : "light", { persist: false });
    });
  }
};
