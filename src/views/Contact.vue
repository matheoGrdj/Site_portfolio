<script setup>
import { ref, reactive } from 'vue';

// Contact form state
const formData = reactive({
    name: '',
    email: '',
    message: ''
});

// Form validation state
const errors = reactive({
    name: '',
    email: '',
    message: ''
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);
const submitError = ref('');

// Form validation
const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const validateForm = () => {
    let isValid = true;

    // Reset errors
    errors.name = '';
    errors.email = '';
    errors.message = '';

    // Validate name
    if (!formData.name.trim()) {
        errors.name = 'Le nom est requis';
        isValid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
        errors.email = 'L\'email est requis';
        isValid = false;
    } else if (!validateEmail(formData.email)) {
        errors.email = 'L\'email est invalide';
        isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
        errors.message = 'Le message est requis';
        isValid = false;
    }

    return isValid;
};

// Form submission
const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    isSubmitting.value = true;
    submitError.value = '';

    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Success
        isSubmitted.value = true;
        formData.name = '';
        formData.email = '';
        formData.message = '';

    } catch (error) {
        submitError.value = 'Une erreur est survenue. Veuillez réessayer.';
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<template>
    <section class="py-16 px-6 min-h-screen bg-gray-700 text-white font-mono">
        <div class="container mx-auto max-w-5xl">
            <h2 class="text-4xl lg:text-5xl font-bold mb-12">
                <span class="text-yellow-400">Me Contacter</span>
            </h2>

            <div class="space-y-16 mt-12 text-lg lg:text-xl">
                <!-- Informations de contact -->
                <div
                    class="bg-gray-800 bg-opacity-50 rounded-lg p-6 sm:p-8 hover:bg-opacity-70 transition-all duration-300 shadow-lg">
                    <div class="flex items-center mb-6">
                        <div class="text-purple-400 mr-4 text-2xl sm:text-3xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 sm:h-10 sm:w-10" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 class="text-blue-400 text-2xl sm:text-3xl">Coordonnées</h3>
                    </div>

                    <div class="ml-3 sm:ml-6 space-y-6">
                        <div class="flex items-center flex-wrap">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-green-400 shrink-0"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span class="text-gray-300">Email: </span>
                            <a href="mailto:matheo.grdj88@gmail.com"
                                class="text-green-400 hover:underline ml-2 break-all">
                                matheo.grdj88@gmail.com
                            </a>
                        </div>

                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-green-400 shrink-0"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span class="text-gray-300">Localisation: </span>
                            <span class="text-green-400 ml-2">Nancy et alentours</span>
                        </div>

                        <div
                            class="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 mt-6">
                            <a href="https://github.com/matheoGrdj" target="_blank"
                                class="flex items-center justify-center space-x-3 hover:text-green-400 transition-colors duration-300 bg-gray-900 px-4 sm:px-6 py-3 rounded-full w-full sm:w-auto">
                                <svg class="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                <span class="text-base md:text-lg">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/mathéo-grandjean-36353a271/" target="_blank"
                                class="flex items-center justify-center space-x-3 hover:text-green-400 transition-colors duration-300 bg-gray-900 px-4 sm:px-6 py-3 rounded-full w-full sm:w-auto">
                                <svg class="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                <span class="text-base md:text-lg">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Formulaire de contact -->
                <div
                    class="bg-gray-800 bg-opacity-50 rounded-lg p-6 sm:p-8 hover:bg-opacity-70 transition-all duration-300 shadow-lg">
                    <div class="flex items-center mb-6">
                        <div class="text-purple-400 mr-4 text-2xl sm:text-3xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 sm:h-10 sm:w-10" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                        </div>
                        <h3 class="text-blue-400 text-2xl sm:text-3xl">M'envoyer un message</h3>
                    </div>

                    <div class="mt-6">
                        <div v-if="isSubmitted" class="bg-green-900 bg-opacity-50 p-4 rounded-lg mb-6 text-center">
                            <svg class="h-12 w-12 text-green-400 mx-auto mb-3" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <p class="text-green-300 text-lg">Message envoyé avec succès !</p>
                            <p class="text-green-200 mt-2">Merci de m'avoir contacté. Je vous répondrai dans les plus
                                brefs délais.</p>
                        </div>

                        <form @submit="handleSubmit" class="space-y-6" v-if="!isSubmitted">
                            <div>
                                <div class="flex justify-between items-center mb-2">
                                    <label for="name" class="block text-green-400">Nom</label>
                                    <span v-if="errors.name" class="text-red-400 text-sm">{{ errors.name }}</span>
                                </div>
                                <input id="name" v-model="formData.name" type="text" placeholder="Votre nom"
                                    class="w-full bg-gray-900 p-3 rounded border transition-all duration-200"
                                    :class="[errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-700 focus:border-green-400']"
                                    :disabled="isSubmitting" autocomplete="name">
                            </div>

                            <div>
                                <div class="flex justify-between items-center mb-2">
                                    <label for="email" class="block text-green-400">Email</label>
                                    <span v-if="errors.email" class="text-red-400 text-sm">{{ errors.email }}</span>
                                </div>
                                <input id="email" v-model="formData.email" type="email" placeholder="Votre email"
                                    class="w-full bg-gray-900 p-3 rounded border transition-all duration-200"
                                    :class="[errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-700 focus:border-green-400']"
                                    :disabled="isSubmitting" autocomplete="email">
                            </div>

                            <div>
                                <div class="flex justify-between items-center mb-2">
                                    <label for="message" class="block text-green-400">Message</label>
                                    <span v-if="errors.message" class="text-red-400 text-sm">{{ errors.message }}</span>
                                </div>
                                <textarea id="message" v-model="formData.message" placeholder="Votre message"
                                    class="w-full bg-gray-900 p-3 rounded border transition-all duration-200 focus:outline-none h-40"
                                    :class="[errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-700 focus:border-green-400']"
                                    :disabled="isSubmitting"></textarea>
                            </div>

                            <div v-if="submitError"
                                class="text-red-400 text-center p-3 bg-red-900 bg-opacity-30 rounded-lg">
                                {{ submitError }}
                            </div>

                            <button type="submit"
                                class="w-full sm:w-auto flex items-center justify-center bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white hover:text-gray-800 px-6 py-3 rounded-full shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                :disabled="isSubmitting">
                                <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                    </path>
                                </svg>
                                <span>{{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}</span>
                            </button>
                        </form>

                        <div v-if="isSubmitted" class="flex justify-center mt-4">
                            <button @click="isSubmitted = false"
                                class="text-green-400 hover:text-green-300 underline cursor-pointer">
                                Envoyer un nouveau message
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Horaires de disponibilité -->
                <div
                    class="bg-gray-800 bg-opacity-50 rounded-lg p-6 sm:p-8 hover:bg-opacity-70 transition-all duration-300 shadow-lg">
                    <div class="flex items-center mb-6">
                        <div class="text-purple-400 mr-4 text-2xl sm:text-3xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 sm:h-10 sm:w-10" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 class="text-blue-400 text-2xl sm:text-3xl">Disponibilité</h3>
                    </div>

                    <div class="ml-3 sm:ml-6">
                        <p class="text-gray-300 mb-4">Je suis disponible pour répondre à vos messages :</p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="bg-gray-900 bg-opacity-50 p-4 rounded-lg hover:bg-opacity-70 transition">
                                <p class="text-green-400 font-bold">Jours ouvrables</p>
                                <p class="text-gray-300">9h - 18h</p>
                            </div>
                            <div class="bg-gray-900 bg-opacity-50 p-4 rounded-lg hover:bg-opacity-70 transition">
                                <p class="text-green-400 font-bold">Temps de réponse</p>
                                <p class="text-gray-300">Sous 24-48h</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Animation pour les transitions */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Pour corriger le débordement sur mobile */
@media (max-width: 640px) {

    input,
    textarea,
    button {
        font-size: 16px;
        /* Empêcher le zoom sur mobile lors de la saisie */
    }
}
</style>