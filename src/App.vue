<template>
  <div class="app-shell min-h-screen font-sans">
    <Navbar />
    <router-view />
    <Footer />
    <div class="theme-reveal" aria-hidden="true"></div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
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
</script>


