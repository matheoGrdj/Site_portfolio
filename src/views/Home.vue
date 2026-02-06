<template>
    <div class="home-shell">
        <section class="hero-section snap-section">
            <div class="absolute inset-0 hero-backdrop"></div>
            <div class="hero-orb parallax-layer" data-parallax="0.08" style="top: 8%; left: -4%;"
                aria-hidden="true"></div>
            <div class="hero-orb orb-right parallax-layer" data-parallax="0.12" data-parallax-direction="down"
                style="bottom: 12%; right: -6%;" aria-hidden="true"></div>

            <div class="absolute inset-0" aria-hidden="true">
                <div v-for="i in (isMobile ? 16 : 32)" :key="i"
                    class="absolute w-1 h-1 rounded-full hero-particle animate-float" :style="{
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                        animationDelay: Math.random() * 5 + 's',
                        animationDuration: (3 + Math.random() * 4) + 's'
                    }">
                </div>
            </div>

            <div class="container mx-auto relative z-10 max-w-7xl">
                <div class="hero-grid">
                    <div class="hero-intro space-y-6 lg:space-y-7 text-center lg:text-left" data-reveal>
                        <div class="space-y-3 lg:space-y-4">
                            <h1 class="hero-title font-bold">
                                <span class="block text-slate-200">Salut, je suis</span>
                                <span
                                    class="block bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                    Mathéo Grandjean
                                </span>
                            </h1>

                            <div class="hero-role">
                                <span>Je suis</span>
                                <span class="hero-pill">
                                    <span class="typed-text text-emerald-400 font-semibold">{{ typedRole }}</span>
                                    <span class="cursor">|</span>
                                </span>
                            </div>
                        </div>

                        <p
                            class="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mx-auto lg:mx-0 section-lead">
                            Étudiant passionné en Master of Science à Epitech Nancy après un BUT Informatique,
                            spécialisé dans le développement web et logiciel moderne, les applications mobiles et les
                            solutions innovantes intégrant l’intelligence artificielle.
                        </p>

                        <div class="hero-actions justify-center lg:justify-start">
                            <router-link to="/projects" class="btn btn-primary btn-lg group text-center">
                                <span class="relative z-10">Voir mes projets</span>
                                <div
                                    class="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                </div>
                            </router-link>

                            <router-link to="/contact" class="btn btn-ghost btn-lg text-center">
                                Me contacter
                            </router-link>
                        </div>

                        <div class="flex space-x-4 sm:space-x-6 justify-center lg:justify-start">
                            <a href="https://github.com/matheoGrdj" target="_blank" class="icon-button group">
                                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-white"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/mathéo-grandjean-36353a271/" target="_blank"
                                class="icon-button group">
                                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-white"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="hero-visual order-first lg:order-last" data-reveal style="--reveal-delay: 120ms;">
                        <div class="hero-frame group">
                            <div class="hero-ring"></div>
                            <img src="/photoMoi.jpg" alt="Mathéo Grandjean"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        </div>
                    </div>
                </div>
            </div>

            <div class="hero-scroll animate-bounce" aria-hidden="true">
                <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>

        <section class="section-shell snap-section">
            <div class="container mx-auto max-w-6xl">
                <div class="about-grid">
                    <div class="space-y-4" data-reveal>
                        <div class="section-head is-left mb-0">
                            <h2
                                class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent section-title">
                                À propos de moi
                            </h2>
                            <div class="section-rule"></div>
                        </div>
                    </div>

                    <div class="about-stats sm:grid-cols-2">
                        <div class="stat-card" data-reveal style="--reveal-delay: 80ms;">
                            <div class="stat-icon">
                                <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg sm:text-xl font-semibold text-emerald-400">21 ans</h3>
                                <p class="text-slate-300 text-sm sm:text-base">Passionné par le développement</p>
                            </div>
                        </div>

                        <div class="stat-card" data-reveal style="--reveal-delay: 140ms;">
                            <div class="stat-icon">
                                <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg sm:text-xl font-semibold text-emerald-400">Nancy</h3>
                                <p class="text-slate-300 text-sm sm:text-base">Basé en France</p>
                            </div>
                        </div>

                        <div class="stat-card sm:col-span-2" data-reveal style="--reveal-delay: 200ms;">
                            <div class="stat-icon">
                                <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg sm:text-xl font-semibold text-emerald-400">Master of Science</h3>
                                <p class="text-slate-300 text-sm sm:text-base">1ère année</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-shell snap-section">
            <div class="container mx-auto max-w-6xl">
                <div class="section-head is-left">
                    <h2
                        class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent section-title">
                        Mes Compétences
                    </h2>
                    <div class="section-rule"></div>
                </div>

                <div class="skills-grid">
                    <div v-for="(skill, index) in skills" :key="skill.name" class="skill-card" data-reveal
                        :style="{ '--reveal-delay': `${index * 90}ms` }">
                        <div class="flex items-start justify-between gap-4">
                            <div class="flex items-start gap-3">
                                <div
                                    class="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                                    <span class="text-white font-bold text-sm sm:text-base">{{ skill.icon }}</span>
                                </div>
                                <div>
                                    <h3 class="text-base sm:text-lg font-semibold text-slate-200">{{ skill.name }}</h3>
                                    <p class="text-slate-400 text-sm sm:text-base">{{ skill.description }}</p>
                                </div>
                            </div>
                            <span class="text-emerald-400 font-semibold text-sm sm:text-base">{{ skill.level }}%</span>
                        </div>
                        <div class="skill-meter mt-4">
                            <span :style="{ width: skill.level + '%' }"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Accueil',
  meta: [
    { name: 'description', content: 'Découvrez le portfolio de Mathéo Grandjean, étudiant en Master Epitech passionné par le développement web (Vue.js, Symfony) et mobile.' },
    { property: 'og:title', content: 'Mathéo Grandjean | Développeur Web & Mobile' },
    { property: 'og:description', content: 'Portfolio, Projets et Compétences de Mathéo Grandjean.' },
    { property: 'og:image', content: 'https://matheo-grandjean.netlify.app/photoMoi.jpg' },
  ]
})

const typedRole = ref('')
const roles = ['Développeur Web', 'Développeur Mobile', 'Étudiant BUT Info', 'Créateur d\'applications']
let currentRoleIndex = 0
let currentCharIndex = 0
let isDeleting = false

const isMobile = ref(false)

const skills = ref([
    { name: 'Vue.js / Nuxt.js', level: 95, icon: '💚', description: 'Frameworks Vue pour applications web modernes' },
    { name: 'ReactJs / JavaScript', level: 85, icon: '⚙️', description: 'Développement d\'interfaces réactives' },
    { name: 'PHP / Symfony / Laravel', level: 90, icon: '🐘', description: 'APIs robustes et applications backend' },
    { name: 'Flutter / Dart', level: 65, icon: '📱', description: 'Applications mobiles cross-platform' },
    { name: 'WinDev', level: 75, icon: '🖥️', description: 'Développement logiciel Windows' },
    { name: 'Bases de données', level: 85, icon: '💾', description: 'MySQL, PostgreSQL, MongoDB' }
])

const checkMobile = () => {
    isMobile.value = window.innerWidth < 768
}

const typeRole = () => {
    const currentRole = roles[currentRoleIndex]

    if (!isDeleting) {
        typedRole.value = currentRole.substring(0, currentCharIndex + 1)
        currentCharIndex++

        if (currentCharIndex === currentRole.length) {
            isDeleting = true
            setTimeout(typeRole, 2000)
            return
        }
    } else {
        typedRole.value = currentRole.substring(0, currentCharIndex - 1)
        currentCharIndex--

        if (currentCharIndex === 0) {
            isDeleting = false
            currentRoleIndex = (currentRoleIndex + 1) % roles.length
        }
    }

    setTimeout(typeRole, isDeleting ? 50 : 100)
}

onMounted(() => {
    typeRole()
    checkMobile()
    window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-20px);
    }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

.cursor {
    animation: blink 1s infinite;
}

@keyframes blink {

    0%,
    50% {
        opacity: 1;
    }

    51%,
    100% {
        opacity: 0;
    }
}

/* Améliorations pour très petits écrans */
@media (max-width: 400px) {
    .container {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}
</style>
