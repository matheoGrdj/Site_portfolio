<template>
    <nav class="site-nav fixed w-full top-0 z-50">
        <div class="container mx-auto px-3 sm:px-4 lg:px-6">
            <div class="flex justify-between items-center h-14 sm:h-16">
                <!-- Logo animé responsive -->
                <div class="logo-mark font-bold text-base sm:text-lg lg:text-xl group cursor-pointer">
                    <span
                        class="text-emerald-400 group-hover:scale-110 transition-transform duration-300 inline-block">{</span>
                    <span
                        class="text-blue-400 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">dev</span>:
                    <span class="text-purple-400 hidden xs:inline">"Mathéo Grandjean"</span>
                    <span class="text-purple-400 xs:hidden">"MG"</span>
                    <span
                        class="text-emerald-400 group-hover:scale-110 transition-transform duration-300 inline-block">}</span>
                </div>

                <div class="flex items-center gap-2 sm:gap-3">
                    <!-- Navigation desktop -->
                    <div class="hidden md:flex items-center space-x-4 lg:space-x-8">
                        <ul class="flex items-center space-x-3 lg:space-x-6 relative">
                            <li v-for="link in navLinks" :key="link.to" class="relative">
                                <router-link :to="link.to"
                                    class="relative px-2 lg:px-4 py-2 text-sm lg:text-base nav-link group"
                                    active-class="nav-active">
                                    {{ link.name }}
                                    <span class="absolute bottom-0 left-0 w-full nav-underline"></span>
                                </router-link>
                            </li>
                        </ul>

                        <!-- Status Badge responsive -->
                        <div class="status-pill px-2 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm">
                            <div class="flex items-center space-x-1 lg:space-x-2">
                                <div class="w-1.5 lg:w-2 h-1.5 lg:h-2 bg-emerald-400 rounded-full animate-pulse">
                                </div>
                                <span class="text-emerald-400 hidden lg:inline">Disponible</span>
                                <span class="text-emerald-400 lg:hidden">•</span>
                            </div>
                        </div>
                    </div>

                    <!-- Theme toggle -->
                    <button type="button" class="theme-toggle" :aria-pressed="isDark"
                        :aria-label="isDark ? 'Activer le theme clair' : 'Activer le theme sombre'"
                        :title="isDark ? 'Activer le theme clair' : 'Activer le theme sombre'"
                        @click="handleThemeToggle">
                        <svg v-if="isDark" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                        <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" aria-hidden="true">
                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                        </svg>
                    </button>

                    <!-- Menu burger -->
                    <button @click="isMenuOpen = !isMenuOpen" :aria-expanded="isMenuOpen"
                        aria-label="Ouvrir le menu"
                        class="md:hidden icon-button menu-toggle">
                        <div class="space-y-1.5">
                            <div class="w-5 sm:w-6 h-0.5 bg-current transition-all duration-300"
                                :class="{ 'rotate-45 translate-y-2': isMenuOpen }"></div>
                            <div class="w-5 sm:w-6 h-0.5 bg-current transition-all duration-300"
                                :class="{ 'opacity-0': isMenuOpen }"></div>
                            <div class="w-5 sm:w-6 h-0.5 bg-current transition-all duration-300"
                                :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"></div>
                        </div>
                    </button>
                </div>
            </div>

            <!-- Menu mobile -->
            <transition name="slide-down">
                <div v-if="isMenuOpen" class="md:hidden pb-4 pt-2">
                    <ul class="flex flex-col space-y-3 items-center">
                        <li v-for="link in navLinks" :key="link.to">
                            <router-link :to="link.to"
                                class="block nav-link py-2 px-4 text-center"
                                active-class="nav-active" @click="isMenuOpen = false">
                                {{ link.name }}
                            </router-link>
                        </li>
                        <!-- Status mobile -->
                        <li class="mt-2 px-4 py-2 surface-soft rounded-full">
                            <div class="flex items-center space-x-2 justify-center">
                                <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                <span class="text-emerald-400 text-sm">Disponible</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
import { getCurrentTheme, toggleTheme } from '../utils/theme'

const isMenuOpen = ref(false)
const isDark = ref(getCurrentTheme() === 'dark')

const handleThemeToggle = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const origin = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
    const nextTheme = toggleTheme(origin)

    isDark.value = nextTheme === 'dark'
}

const navLinks = [
    { name: 'Accueil', to: '/' },
    { name: 'Projets', to: '/projects' },
    { name: 'Contact', to: '/contact' }
]
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.3s ease;
}

.slide-down-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}

.slide-down-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

/* Custom breakpoint pour très petits écrans */
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

@media (min-width: 768px) {
    .menu-toggle {
        display: none;
    }
}
</style>
