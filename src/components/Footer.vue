<script setup>
import { computed } from 'vue'

const year = new Date().getFullYear();

const footerSizeClasses = ['hero-particle--sm', 'hero-particle--sm', 'hero-particle--md', 'hero-particle--lg']
const footerParticles = computed(() => {
    const arr = []
    for (let i = 0; i < 12; i++) {
        arr.push({
            id: i,
            sizeClass: footerSizeClasses[i % footerSizeClasses.length],
            left: (Math.random() * 100).toFixed(1) + '%',
            top: (Math.random() * 100).toFixed(1) + '%',
            delay: (Math.random() * 4).toFixed(1) + 's',
            duration: (5 + Math.random() * 4).toFixed(1) + 's'
        })
    }
    return arr
})

const skills = [
    { name: 'Vue.js', icon: '⚡' },
    { name: 'Symfony', icon: '🚀' },
    { name: 'Flutter', icon: '📱' },
    { name: 'Node.js', icon: '💚' }
];

const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/matheoGrdj',
        icon: 'github',
        color: 'hover:text-slate-200'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mathéo-grandjean-36353a271/',
        icon: 'linkedin',
        color: 'hover:text-blue-400'
    }
];
</script>

<template>
    <footer class="relative bg-slate-950 border-t border-slate-800">
        <!-- Fond décoratif -->
        <div class="absolute inset-0 footer-backdrop"></div>

        <!-- Particules décoratives responsive -->
        <div class="absolute inset-0 overflow-hidden">
            <div v-for="p in footerParticles" :key="p.id"
                class="absolute rounded-full hero-particle animate-float-organic hidden sm:block"
                :class="p.sizeClass"
                :style="{
                    left: p.left,
                    top: p.top,
                    animationDelay: p.delay,
                    '--float-duration': p.duration
                }">
            </div>
        </div>

        <div class="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                <!-- Section principale responsive -->
                <div class="sm:col-span-2 space-y-4 sm:space-y-6">
                    <!-- Logo/Nom responsive -->
                    <div class="space-y-3 sm:space-y-4">
                        <div class="flex items-center space-x-3">
                            <div
                                class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center">
                                <span class="text-white font-bold text-lg sm:text-xl">MG</span>
                            </div>
                            <div>
                                <h3 class="text-xl sm:text-2xl font-bold text-slate-100">
                                    <span class="text-emerald-400">&lt;</span>
                                    <span class="hidden xs:inline">Mathéo Grandjean</span>
                                    <span class="xs:hidden">M. Grandjean</span>
                                    <span class="text-emerald-400">/&gt;</span>
                                </h3>
                                <p class="text-slate-400 text-xs sm:text-sm">Développeur Full-Stack</p>
                            </div>
                        </div>

                        <p class="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
                            Étudiant passionné en développement web et mobile, créant des solutions innovantes
                            avec les technologies modernes.
                        </p>
                    </div>

                    <!-- Status responsive -->
                    <div
                        class="flex items-center space-x-3 p-3 sm:p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                        <div class="flex items-center space-x-2">
                            <div class="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                            <span class="text-emerald-400 font-medium text-sm sm:text-base">Disponible pour de nouveaux
                                projets</span>
                        </div>
                    </div>
                </div>

                <!-- Technologies responsive -->
                <div class="space-y-4 sm:space-y-6">
                    <h4 class="text-lg sm:text-xl font-semibold text-slate-100 border-b border-slate-800 pb-2">
                        Technologies
                    </h4>
                    <div class="grid grid-cols-2 gap-2 sm:gap-3">
                        <div v-for="skill in skills" :key="skill.name"
                            class="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-slate-900/30 rounded-lg hover:bg-slate-900/50 transition-colors duration-300">
                            <span class="text-lg sm:text-xl">{{ skill.icon }}</span>
                            <span class="text-slate-300 font-medium text-xs sm:text-sm lg:text-base">{{ skill.name
                                }}</span>
                        </div>
                    </div>
                </div>

                <!-- Contact & Réseaux responsive -->
                <div class="space-y-4 sm:space-y-6">
                    <h4 class="text-lg sm:text-xl font-semibold text-slate-100 border-b border-slate-800 pb-2">
                        Contact
                    </h4>

                    <!-- Email responsive -->
                    <div class="space-y-3 sm:space-y-4">
                        <a href="mailto:matheo.grdj88@gmail.com"
                            class="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-slate-900/30 rounded-lg hover:bg-slate-900/50 transition-all duration-300 group">
                            <div
                                class="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors duration-300">
                                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p class="text-slate-300 font-medium text-xs sm:text-sm">Email</p>
                                <p class="text-slate-400 text-xs sm:text-sm break-all">matheo.grdj88@gmail.com</p>
                            </div>
                        </a>

                        <!-- Localisation responsive -->
                        <div class="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-slate-900/30 rounded-lg">
                            <div
                                class="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                </svg>
                            </div>
                            <div>
                                <p class="text-slate-300 font-medium text-xs sm:text-sm">Localisation</p>
                                <p class="text-slate-400 text-xs sm:text-sm">Nancy, France</p>
                            </div>
                        </div>
                    </div>

                    <!-- Réseaux sociaux responsive -->
                    <div class="space-y-2 sm:space-y-3">
                        <h5 class="text-slate-200 font-medium text-sm sm:text-base">Réseaux</h5>
                        <div class="flex space-x-3 sm:space-x-4">
                            <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank"
                                :title="social.name"
                                class="p-2 sm:p-3 bg-slate-900/50 rounded-lg transition-all duration-300 group"
                                :class="social.color">
                                <!-- GitHub Icon -->
                                <svg v-if="social.icon === 'github'"
                                    class="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-current transition-colors duration-300"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>

                                <!-- LinkedIn Icon -->
                                <svg v-if="social.icon === 'linkedin'"
                                    class="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-current transition-colors duration-300"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Séparateur responsive -->
            <div class="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
                <div class="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
                    <!-- Copyright responsive -->
                    <div class="text-center sm:text-left order-2 sm:order-1">
                        <p class="text-slate-400 text-sm">
                            © {{ year }} Mathéo Grandjean. Tous droits réservés.
                        </p>
                    </div>

                    <!-- Code message responsive -->
                    <div
                        class="bg-slate-900/50 rounded-lg px-3 sm:px-4 py-2 border border-slate-800 order-1 sm:order-2">
                        <code class="text-emerald-400 font-mono text-xs sm:text-sm">
                            <span class="hidden sm:inline">console.log('Développé avec ❤️ et Vue.js {{ year }}');</span>
                            <span class="sm:hidden">Made with ❤️</span>
                        </code>
                    </div>

                    <!-- Navigation rapide responsive -->
                    <div class="flex justify-center space-x-4 sm:space-x-6 order-3">
                        <router-link to="/"
                            class="text-slate-400 hover:text-emerald-400 transition-colors duration-300 text-sm">
                            Accueil
                        </router-link>
                        <router-link to="/projects"
                            class="text-slate-400 hover:text-emerald-400 transition-colors duration-300 text-sm">
                            Projets
                        </router-link>
                        <router-link to="/contact"
                            class="text-slate-400 hover:text-emerald-400 transition-colors duration-300 text-sm">
                            Contact
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
@keyframes float-gentle {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
        opacity: 0.3;
    }

    50% {
        transform: translateY(-20px) rotate(180deg);
        opacity: 0.8;
    }
}

.animate-float-gentle {
    animation: float-gentle 6s ease-in-out infinite;
}

/* Breakpoint personnalisé pour très petits écrans */
@media (max-width: 400px) {
    .xs\:hidden {
        display: none;
    }

    .xs\:inline {
        display: inline;
    }
}

@media (min-width: 400px) {
    .xs\:hidden {
        display: inline;
    }

    .xs\:inline {
        display: none;
    }
}
</style>