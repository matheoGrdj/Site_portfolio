<script setup>
import { ref, onMounted } from 'vue';

const isHovered = ref(false);
const isAnimating = ref(false);
const isRevealed = ref(false);
const typedText = ref('');
const fullText = 'reveal(profile);';
let typeIndex = 0;

const triggerAnimation = () => {
    if (isRevealed.value) {
        // Si déjà révélé, on peut réinitialiser
        resetAnimation();
        return;
    }

    isAnimating.value = true;
    typeIndex = 0;
    typedText.value = '';

    // Animation d'écriture du "code"
    const typeInterval = setInterval(() => {
        if (typeIndex < fullText.length) {
            typedText.value += fullText.charAt(typeIndex);
            typeIndex++;
        } else {
            clearInterval(typeInterval);
            setTimeout(() => {
                isRevealed.value = true;
                setTimeout(() => {
                    isAnimating.value = false;
                }, 1000);
            }, 300);
        }
    }, 100);
};

const resetAnimation = () => {
    isAnimating.value = true;
    isRevealed.value = false;
    typedText.value = 'hide(profile);';

    setTimeout(() => {
        isAnimating.value = false;
        typedText.value = '';
    }, 2000);
};
</script>

<template>
    <section class="py-16 px-6 min-h-screen bg-gray-700 text-white font-mono">
        <div class="container mx-auto max-w-5xl">
            <!-- En-tête avec photo -->
            <div class="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12 mb-16">
                <div class="mb-10 lg:mb-0 order-1 lg:order-2">
                    <div @click="triggerAnimation"
                        class="photo-container relative cursor-pointer w-56 h-56 rounded-full overflow-hidden"
                        @mouseover="isHovered = true" @mouseleave="isHovered = false">

                        <!-- Terminal animation layer -->
                        <div class="absolute inset-0 bg-gray-900 bg-opacity-90 z-20 flex flex-col justify-center items-center transition-opacity duration-500"
                            :class="{ 'opacity-0': isRevealed && !isAnimating }">
                            <!-- Terminal header -->
                            <div class="w-full bg-gray-800flex justify-between items-center">
                                <div class="flex space-x-1">
                                    <span class="w-2 h-2 rounded-full bg-red-500"></span>
                                    <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
                                    <span class="w-2 h-2 rounded-full bg-green-500"></span>
                                </div>
                            </div>
                            <!-- Terminal body -->
                            <div class="w-full h-full flex flex-col justify-center items-center p-4 overflow-hidden">
                                <div class="text-green-400 text-sm mb-2 flex">
                                    <span class="text-blue-400 mr-2">></span>
                                    <span class="typing-animation">{{ typedText }}</span>
                                    <span v-if="isAnimating && !isRevealed" class="cursor-blink">|</span>
                                </div>
                                <div v-if="isAnimating && !isRevealed" class="text-xs text-gray-400 mt-2">Developer
                                    profile is loading ...</div>
                                <div v-if="isRevealed && isAnimating" class="text-xs text-green-400 mt-2">✓ Profile
                                    loaded successfully</div>
                                <div v-if="!isRevealed && !isAnimating" class="text-xs text-gray-400 mt-2">Click to
                                    reveal profile</div>
                            </div>
                        </div>

                        <!-- Binary data overlay effect -->
                        <div class="absolute inset-0 binary-bg z-10 transition-opacity duration-500"
                            :class="{ 'opacity-0': isRevealed }">
                        </div>

                        <!-- Image with effects -->
                        <img src="../../public/photoMoi.jpg" alt="Mathéo Grandjean"
                            class="w-full h-full object-cover border-4 border-green-400 shadow-lg transition-all duration-500 transform"
                            :class="{
                                'blur-xl': !isRevealed,
                                'blur-0': isRevealed,
                                'scale-105': isHovered && isRevealed,
                                'animate-pulse': isAnimating && isRevealed
                            }">

                        <!-- Decorative scanning line when revealing -->
                        <div v-if="isAnimating && !isRevealed"
                            class="absolute top-0 left-0 right-0 h-1 bg-green-400 scan-line z-30"></div>

                        <!-- Reveal effect -->
                        <div v-if="isRevealed"
                            class="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-green-400 opacity-0 transition-opacity duration-500 z-0"
                            :class="{ 'animate-spin-slow opacity-40': isAnimating, 'opacity-20': isHovered && !isAnimating }">
                        </div>

                        <!-- Border animation on reveal -->
                        <div v-if="isRevealed && isAnimating" class="absolute -inset-4 z-10">
                            <div
                                class="absolute inset-0 rounded-full border-4 border-dashed border-green-400 animate-spin-reverse">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="order-2 lg:order-1">
                    <h1 class="text-4xl lg:text-6xl font-bold mb-6">
                        <span class="text-yellow-400">Mathéo Grandjean</span>
                    </h1>
                    <h2 class="text-2xl lg:text-4xl mb-6 text-blue-400">
                        Développeur Web & Mobile
                    </h2>
                    <p class="text-xl text-gray-300">
                        Étudiant en 3ème année de BUT Informatique
                    </p>
                </div>
            </div>

            <div class="space-y-16 mt-12 text-lg lg:text-xl">
                <!-- À propos de moi -->
                <div class="bg-gray-800 bg-opacity-50 rounded-lg p-8 hover:bg-opacity-70 transition-all duration-300">
                    <div class="flex items-center mb-6">
                        <div class="text-purple-400 mr-4 text-3xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h3 class="text-blue-400 text-3xl">À propos de moi</h3>
                    </div>
                    <div class="ml-6 space-y-4">
                        <p class="text-green-400 text-xl">21 ans, passionné par le développement informatique (logiciel,
                            web et
                            mobile).
                        </p>
                        <p class="text-gray-300">Titulaire du Permis B - avec voiture</p>
                        <p class="text-gray-300">Basé à Nancy</p>
                    </div>
                </div>

                <!-- Formation -->
                <div class="bg-gray-800 bg-opacity-50 rounded-lg p-8 hover:bg-opacity-70 transition-all duration-300">
                    <div class="flex items-center mb-6">
                        <div class="text-purple-400 mr-4 text-3xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h3 class="text-blue-400 text-3xl">Formation</h3>
                    </div>
                    <div class="ml-6 space-y-6">
                        <div>
                            <p class="text-green-400 font-semibold text-xl mb-2">BUT Informatique (2022-2025)</p>
                            <p class="text-gray-300">IUT Nancy Charlemagne</p>
                        </div>
                        <div>
                            <p class="text-green-400 font-semibold text-xl mb-2">Bac Général - Spécialités Maths et
                                Physique Chimie
                                (2022)</p>
                            <p class="text-gray-300">Lycée André Malraux à Remiremont</p>
                        </div>
                    </div>
                </div>

                <!-- Expériences -->
                <div class="bg-gray-800 bg-opacity-50 rounded-lg p-8 hover:bg-opacity-70 transition-all duration-300">
                    <div class="flex items-center mb-6">
                        <div class="text-purple-400 mr-4 text-3xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 class="text-blue-400 text-3xl">Expériences</h3>
                    </div>
                    <div class="ml-6 space-y-6">
                        <div>
                            <p class="text-green-400 font-semibold text-xl mb-2">Stage - Développement web (2024)</p>
                            <p class="text-gray-300">Application de gestion avec PHP/Symfony</p>
                            <p class="text-gray-300 mt-1">Durée : février - mai 2024</p>
                        </div>
                        <div>
                            <p class="text-green-400 font-semibold text-xl mb-2">Projet universitaire - Suivi
                                photovoltaïque</p>
                            <p class="text-gray-300">Application web avec API Symfony et frontend Vue.js</p>
                        </div>
                        <div>
                            <p class="text-green-400 font-semibold text-xl mb-2">Animateur en centre aéré (étés
                                2022-2024)</p>
                        </div>
                        <div>
                            <p class="text-green-400 font-semibold text-xl mb-2">Hôte de caisse en grande surface (2021)
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Compétences -->
                <div class="bg-gray-800 bg-opacity-50 rounded-lg p-8 hover:bg-opacity-70 transition-all duration-300">
                    <div class="flex items-center mb-6">
                        <div class="text-purple-400 mr-4 text-3xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h3 class="text-blue-400 text-3xl">Compétences</h3>
                    </div>
                    <div class="ml-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p class="text-green-400 font-semibold text-xl mb-3">Développement Web Frontend</p>
                            <p class="text-gray-300">HTML, CSS, JavaScript, Vue.js</p>
                        </div>
                        <div>
                            <p class="text-green-400 font-semibold text-xl mb-3">Développement Web Backend</p>
                            <p class="text-gray-300">PHP, Symfony, Laravel</p>
                        </div>
                        <div>
                            <p class="text-green-400 font-semibold text-xl mb-3">Développement Mobile</p>
                            <p class="text-gray-300">Flutter, Dart</p>
                        </div>
                        <div>
                            <p class="text-green-400 font-semibold text-xl mb-3">Bases de données</p>
                            <p class="text-gray-300">MySQL, PostgreSQL, MongoDB</p>
                        </div>
                    </div>
                </div>

                <!-- Atouts et centres d'intérêt -->
                <div class="bg-gray-800 bg-opacity-50 rounded-lg p-8 hover:bg-opacity-70 transition-all duration-300">
                    <div class="flex items-center mb-6">
                        <div class="text-purple-400 mr-4 text-3xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h3 class="text-blue-400 text-3xl">Atouts et centres d'intérêt</h3>
                    </div>
                    <div class="ml-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p class="text-green-400 font-semibold text-xl mb-3">Développement Web Frontend</p>
                            <p class="text-gray-300">HTML, CSS, JavaScript, Vue.js</p>
                        </div>
                        <div>
                            <p class="text-green-400 font-semibold text-xl mb-3">Développement Web Backend</p>
                            <p class="text-gray-300">PHP, Symfony, Laravel</p>
                        </div>
                        <div>
                            <p class="text-green-400 font-semibold text-xl mb-3">Développement Mobile</p>
                            <p class="text-gray-300">Flutter, Dart</p>
                        </div>
                        <div>
                            <p class="text-green-400 font-semibold text-xl mb-3">Bases de données</p>
                            <p class="text-gray-300">MySQL, PostgreSQL, MongoDB</p>
                        </div>
                        <div>
                            <p class="text-green-400 font-semibold text-xl mb-3">Développement Java</p>
                            <p class="text-gray-300">Java, JavaFX</p>
                        </div>
                        <div>
                            <p class="text-green-400 font-semibold text-xl mb-3">DevOps</p>
                            <p class="text-gray-300">Docker, Containerisation, CI/CD</p>
                        </div>
                    </div>
                </div>

                <!-- Contact -->
                <div class="bg-gray-800 bg-opacity-50 rounded-lg p-8 hover:bg-opacity-70 transition-all duration-300">
                    <div class="flex items-center mb-6">
                        <div class="text-purple-400 mr-4 text-3xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 class="text-blue-400 text-3xl">Contact</h3>
                    </div>
                    <div class="ml-6 space-y-6">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mr-3 text-green-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:matheo.grdj88@gmail.com"
                                class="text-green-400 hover:underline text-lg md:text-xl break-all">matheo.grdj88@gmail.com</a>
                        </div>
                        <div class="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 mt-4">
                            <a href="https://github.com/matheoGrdj" target="_blank"
                                class="flex items-center space-x-3 hover:text-green-400 transition-colors duration-300 bg-gray-900 px-6 py-3 rounded-full">
                                <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                <span class="text-lg">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/mathéo-grandjean-36353a271/" target="_blank"
                                class="flex items-center space-x-3 hover:text-green-400 transition-colors duration-300 bg-gray-900 px-6 py-3 rounded-full">
                                <svg class="w-7 h-7 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                <span class="text-lg">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes spin-slow {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes spin-reverse {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(-360deg);
    }
}

@keyframes scan {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(224px);
        /* hauteur de l'image */
    }
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}

.animate-spin-slow {
    animation: spin-slow 8s linear infinite;
}

.animate-spin-reverse {
    animation: spin-reverse 12s linear infinite;
}

.scan-line {
    animation: scan 2s linear forwards;
}

.cursor-blink {
    animation: blink 1s step-end infinite;
}

.photo-container::after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    z-index: -1;
    background: linear-gradient(45deg, #3b82f6, #8b5cf6, #10b981);
    filter: blur(8px);
    opacity: 0;
    transition: opacity 0.5s ease;
}

.photo-container:hover::after {
    opacity: 0.7;
}

.typing-animation {
    display: inline-block;
}
</style>