<template>
  <div class="app-shell min-h-screen font-sans">
    <div class="scroll-progress" aria-hidden="true">
      <div class="scroll-progress__bar"></div>
    </div>
    <Navbar />
    <router-view />
    <Footer />
    <button
      type="button"
      class="back-to-top"
      :class="{ 'is-visible': showBackToTop }"
      aria-label="Retour en haut"
      @click="scrollToTop"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 19V5m0 0l-6 6m6-6l6 6"></path>
      </svg>
    </button>
    <div class="theme-reveal" aria-hidden="true"></div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue';

// Configuration SEO Globale
useHead({
  titleTemplate: (title) => title ? `${title} | Mathéo Grandjean` : 'Mathéo Grandjean | Développeur Full-Stack',
  meta: [
    { name: 'description', content: 'Portfolio de Mathéo Grandjean, développeur Full-Stack passionné et étudiant en Master. Expert en Vue.js, Symfony et création numérique.' },
    { name: 'author', content: 'Mathéo Grandjean' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'robots', content: 'index, follow' },
    { name: 'theme-color', content: '#0d1116' },
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Portfolio Mathéo Grandjean' },
    { property: 'og:locale', content: 'fr_FR' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:creator', content: '@matheoGrdj' },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' },
    { rel: 'canonical', href: 'https://matheo-grandjean.netlify.app' + (window.location.pathname === '/' ? '' : window.location.pathname) },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Mathéo Grandjean",
        "url": "https://matheo-grandjean.netlify.app",
        "image": "https://matheo-grandjean.netlify.app/photoMoi.jpg",
        "sameAs": [
          "https://github.com/matheoGrdj",
          "https://www.linkedin.com/in/mathéo-grandjean-36353a271/"
        ],
        "jobTitle": "Développeur Full-Stack",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance / Étudiant"
        },
        "description": "Développeur Web & Mobile passionné, spécialisé en Vue.js, Symfony et Flutter."
      })
    }
  ]
})

const showBackToTop = ref(false)
const route = useRoute()

let rafId = 0
let parallaxTargets = []
let prefersReducedMotion = false
let motionQuery

const setRouteDataset = (path) => {
  const normalized = path === '/' ? 'home' : path.replace('/', '')
  document.documentElement.dataset.route = normalized || 'home'
}

const collectParallaxTargets = () => {
  parallaxTargets = Array.from(document.querySelectorAll('[data-parallax]'))
}

const updateScrollEffects = () => {
  rafId = 0
  const scrollTop = window.scrollY || window.pageYOffset || 0
  const doc = document.documentElement
  const maxScroll = doc.scrollHeight - window.innerHeight
  const progress = maxScroll > 0 ? scrollTop / maxScroll : 0
  doc.style.setProperty('--scroll-progress', progress.toFixed(4))
  showBackToTop.value = scrollTop > 480

  if (prefersReducedMotion) {
    parallaxTargets.forEach((target) => target.style.setProperty('--parallax-offset', '0px'))
    return
  }

  parallaxTargets.forEach((target) => {
    const speed = Number(target.dataset.parallax) || 0.08
    const direction = target.dataset.parallaxDirection === 'down' ? 1 : -1
    const offset = scrollTop * speed * direction
    target.style.setProperty('--parallax-offset', `${offset}px`)
  })
}

const onScroll = () => {
  if (rafId) return
  rafId = window.requestAnimationFrame(updateScrollEffects)
}

const scrollToTop = () => {
  const prefersMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: prefersMotion ? 'auto' : 'smooth' })
}

const handleMotionChange = (event) => {
  prefersReducedMotion = event.matches
  updateScrollEffects()
}

onMounted(() => {
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  prefersReducedMotion = motionQuery.matches
  motionQuery.addEventListener('change', handleMotionChange)

  setRouteDataset(route.path)
  collectParallaxTargets()
  updateScrollEffects()

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  if (motionQuery) {
    motionQuery.removeEventListener('change', handleMotionChange)
  }
})

watch(
  () => route.path,
  async (path) => {
    setRouteDataset(path)
    await nextTick()
    collectParallaxTargets()
    updateScrollEffects()
  }
)
</script>


