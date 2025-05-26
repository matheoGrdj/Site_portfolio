<template>
    <nav
        class="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 transition-all duration-300">
        <div class="container mx-auto px-3 sm:px-4 lg:px-6">
            <div class="flex justify-between items-center h-14 sm:h-16">
                <!-- Logo animé responsive -->
                <div class="font-bold text-base sm:text-lg lg:text-xl group cursor-pointer">
                    <span
                        class="text-emerald-400 group-hover:scale-110 transition-transform duration-300 inline-block">{</span>
                    <span
                        class="text-blue-400 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">dev</span>:
                    <span class="text-purple-400 hidden xs:inline">"Mathéo Grandjean"</span>
                    <span class="text-purple-400 xs:hidden">"MG"</span>
                    <span
                        class="text-emerald-400 group-hover:scale-110 transition-transform duration-300 inline-block">}</span>
                </div>

                <!-- Navigation desktop -->
                <div class="hidden md:flex items-center space-x-4 lg:space-x-8">
                    <ul class="flex items-center space-x-3 lg:space-x-6 relative">
                        <li v-for="link in navLinks" :key="link.to" class="relative">
                            <router-link :to="link.to"
                                class="relative px-2 lg:px-4 py-2 text-sm lg:text-base text-slate-300 hover:text-emerald-400 transition-all duration-300 group"
                                active-class="text-emerald-400">
                                {{ link.name }}
                                <span
                                    class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                            </router-link>
                        </li>
                    </ul>

                    <!-- Status Badge responsive -->
                    <div class="glass-effect px-2 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm">
                        <div class="flex items-center space-x-1 lg:space-x-2">
                            <div class="w-1.5 lg:w-2 h-1.5 lg:h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            <span class="text-emerald-400 hidden lg:inline">Disponible</span>
                            <span class="text-emerald-400 lg:hidden">•</span>
                        </div>
                    </div>
                </div>

                <!-- Menu burger -->
                <button @click="isMenuOpen = !isMenuOpen"
                    class="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors duration-300">
                    <div class="space-y-1.5">
                        <div class="w-5 sm:w-6 h-0.5 bg-slate-300 transition-all duration-300"
                            :class="{ 'rotate-45 translate-y-2': isMenuOpen }"></div>
                        <div class="w-5 sm:w-6 h-0.5 bg-slate-300 transition-all duration-300"
                            :class="{ 'opacity-0': isMenuOpen }"></div>
                        <div class="w-5 sm:w-6 h-0.5 bg-slate-300 transition-all duration-300"
                            :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"></div>
                    </div>
                </button>
            </div>

            <!-- Menu mobile -->
            <transition name="slide-down">
                <div v-if="isMenuOpen" class="md:hidden pb-4 pt-2">
                    <ul class="flex flex-col space-y-3 items-center">
                        <li v-for="link in navLinks" :key="link.to">
                            <router-link :to="link.to"
                                class="block text-slate-300 hover:text-emerald-400 transition-colors duration-300 py-2 px-4 rounded-lg text-center"
                                active-class="text-emerald-400 bg-emerald-400/10" @click="isMenuOpen = false">
                                {{ link.name }}
                            </router-link>
                        </li>
                        <!-- Status mobile -->
                        <li class="mt-2 px-4 py-2 bg-slate-800/50 rounded-full">
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

const isMenuOpen = ref(false)

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
</style>