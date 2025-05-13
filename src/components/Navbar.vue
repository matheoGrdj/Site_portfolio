<template>
    <nav class="bg-gray-900 text-white p-4 font-mono relative">
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <!-- Logo -->
                <div class="font-bold text-xl">
                    <span class="text-green-400">{</span>
                    <span class="text-blue-400">dev</span>:
                    <span class="text-purple-400">"Mathéo Grandjean"</span>
                    <span class="text-green-400">}</span>
                </div>

                <!-- Menu Burger -->
                <button @click="isMenuOpen = !isMenuOpen"
                    class="md:hidden p-2 hover:bg-gray-800 rounded transition-colors duration-300">
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path v-if="!isMenuOpen" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2" />
                        <path v-else
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                    </svg>
                </button>

                <!-- Desktop Navigation and Status -->
                <div class="hidden md:flex md:items-center md:space-x-8">
                    <ul class="flex items-center space-x-6">
                        <li v-for="link in navLinks" :key="link.to">
                            <router-link :to="link.to" class="hover:text-green-400 transition-colors duration-300"
                                active-class="text-green-400">
                                .{{ link.name }}()
                            </router-link>
                        </li>
                    </ul>

                    <!-- Status Badge for Desktop -->
                    <div class="bg-gray-800 px-3 py-1 rounded-full text-sm">
                        <span class="text-yellow-400">const</span>
                        <span class="text-blue-400">status</span> =
                        <span class="text-green-400">"available"</span>
                    </div>
                </div>
            </div>

            <!-- Mobile Navigation Links -->
            <div class="md:hidden" :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen }">
                <ul class="flex flex-col space-y-2 items-center mt-4">
                    <li v-for="link in navLinks" :key="link.to">
                        <router-link :to="link.to"
                            class="block hover:text-green-400 transition-colors duration-300 py-2"
                            active-class="text-green-400">
                            .{{ link.name }}()
                        </router-link>
                    </li>
                </ul>

                <!-- Status Badge for Mobile -->
                <div class="mt-4 flex justify-center">
                    <div class="bg-gray-800 px-3 py-1 rounded-full text-sm">
                        <span class="text-yellow-400">const</span>
                        <span class="text-blue-400">status</span> =
                        <span class="text-green-400">"available"</span>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navLinks = [
    { name: 'home', to: '/' },
    { name: 'projects', to: '/projects' },
    { name: 'skills', to: '/skills' },
    { name: 'contact', to: '/contact' }
]
</script>