<template>
    <div class="pt-14 sm:pt-16"> <!-- Offset pour navbar fixe responsive -->
        <!-- Hero Section -->
        <section class="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
            <!-- Background animé -->
            <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"></div>

            <!-- Particules flottantes responsive -->
            <div class="absolute inset-0">
                <div v-for="i in (isMobile ? 20 : 50)" :key="i"
                    class="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-float" :style="{
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                        animationDelay: Math.random() * 5 + 's',
                        animationDuration: (3 + Math.random() * 4) + 's'
                    }">
                </div>
            </div>

            <div class="container mx-auto relative z-10 max-w-7xl">
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <!-- Contenu principal -->
                    <div class="space-y-6 lg:space-y-8 text-center lg:text-left">
                        <div class="space-y-3 lg:space-y-4">
                            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                                <span class="block text-slate-200">Salut, je suis</span>
                                <span
                                    class="block bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                    Mathéo Grandjean
                                </span>
                            </h1>

                            <div class="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-slate-400">
                                <span>Je suis </span>
                                <span class="typed-text text-emerald-400 font-semibold">{{ typedRole }}</span>
                                <span class="cursor">|</span>
                            </div>
                        </div>

                        <p
                            class="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                            Étudiant passionné en 3ème année de BUT Informatique, spécialisé dans le développement
                            web moderne et les applications mobiles.
                        </p>

                        <!-- Boutons d'action responsive -->
                        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                            <router-link to="/projects"
                                class="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 text-center">
                                <span class="relative z-10">Voir mes projets</span>
                                <div
                                    class="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                </div>
                            </router-link>

                            <router-link to="/contact"
                                class="px-6 sm:px-8 py-3 sm:py-4 border-2 border-emerald-400 text-emerald-400 rounded-full font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 text-center">
                                Me contacter
                            </router-link>
                        </div>

                        <!-- Réseaux sociaux -->
                        <div class="flex space-x-4 sm:space-x-6 justify-center lg:justify-start">
                            <a href="https://github.com/matheoGrdj" target="_blank"
                                class="p-2 sm:p-3 bg-slate-800/50 rounded-full hover:bg-emerald-500 transition-all duration-300 group">
                                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-white"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/mathéo-grandjean-36353a271/" target="_blank"
                                class="p-2 sm:p-3 bg-slate-800/50 rounded-full hover:bg-blue-600 transition-all duration-300 group">
                                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-white"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Photo responsive -->
                    <div class="flex justify-center lg:justify-end order-first lg:order-last">
                        <div class="relative group">
                            <!-- Cercles décoratifs responsive -->
                            <div
                                class="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                            </div>
                            <div
                                class="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-purple-400 to-emerald-400 rounded-full blur opacity-40 animate-pulse">
                            </div>

                            <!-- Photo responsive -->
                            <div
                                class="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-3 sm:border-4 border-emerald-400/50">
                                <img src="/photoMoi.jpg" alt="Mathéo Grandjean"
                                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Flèche scroll responsive -->
            <div class="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
                <div class="animate-bounce">
                    <svg class="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </section>

        <!-- Sections responsive -->
        <section class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
            <div class="container mx-auto max-w-6xl">
                <!-- À propos responsive -->
                <div class="mb-16 lg:mb-20">
                    <h2
                        class="text-3xl sm:text-4xl font-bold text-center mb-8 lg:mb-12 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                        À propos de moi
                    </h2>

                    <div class="glass-effect rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300">
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            <div class="text-center">
                                <div
                                    class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                    <svg class="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
                                        </path>
                                    </svg>
                                </div>
                                <h3 class="text-lg sm:text-xl font-semibold mb-2 text-emerald-400">21 ans</h3>
                                <p class="text-slate-300 text-sm sm:text-base">Passionné par le développement</p>
                            </div>

                            <div class="text-center">
                                <div
                                    class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                    <svg class="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                        </path>
                                    </svg>
                                </div>
                                <h3 class="text-lg sm:text-xl font-semibold mb-2 text-blue-400">Nancy</h3>
                                <p class="text-slate-300 text-sm sm:text-base">Basé en France</p>
                            </div>

                            <div class="text-center sm:col-span-2 lg:col-span-1">
                                <div
                                    class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                    <svg class="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                                        </path>
                                    </svg>
                                </div>
                                <h3 class="text-lg sm:text-xl font-semibold mb-2 text-purple-400">BUT Informatique</h3>
                                <p class="text-slate-300 text-sm sm:text-base">3ème année</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Compétences responsive -->
                <div class="mb-16 lg:mb-20">
                    <h2
                        class="text-3xl sm:text-4xl font-bold text-center mb-8 lg:mb-12 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                        Mes Compétences
                    </h2>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                        <div v-for="skill in skills" :key="skill.name"
                            class="glass-effect rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                            <div class="flex items-center mb-3 sm:mb-4">
                                <div
                                    class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-emerald-400 to-blue-500 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                                    <span class="text-white font-bold text-sm sm:text-base">{{ skill.icon }}</span>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h3 class="text-base sm:text-lg font-semibold text-slate-200 truncate">{{ skill.name
                                    }}</h3>
                                    <div class="w-full bg-slate-700 rounded-full h-1.5 sm:h-2 mt-2">
                                        <div class="bg-gradient-to-r from-emerald-400 to-blue-500 h-1.5 sm:h-2 rounded-full transition-all duration-1000"
                                            :style="{ width: skill.level + '%' }"></div>
                                    </div>
                                </div>
                                <span
                                    class="text-emerald-400 font-semibold ml-3 sm:ml-4 text-sm sm:text-base flex-shrink-0">{{
                                        skill.level }}%</span>
                            </div>
                            <p class="text-slate-400 text-sm sm:text-base">{{ skill.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const typedRole = ref('')
const roles = ['Développeur Web', 'Développeur Mobile', 'Étudiant BUT Info', 'Créateur d\'applications']
let currentRoleIndex = 0
let currentCharIndex = 0
let isDeleting = false

const isMobile = ref(false)

const skills = ref([
    { name: 'Vue.js / JavaScript', level: 90, icon: '🚀', description: 'Développement d\'interfaces modernes et réactives' },
    { name: 'PHP / Symfony', level: 85, icon: '⚡', description: 'APIs robustes et applications backend' },
    { name: 'Flutter / Dart', level: 80, icon: '📱', description: 'Applications mobiles cross-platform' },
    { name: 'Bases de données', level: 75, icon: '💾', description: 'MySQL, PostgreSQL, MongoDB' }
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