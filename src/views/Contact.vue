// filepath: src/views/Contact.vue
<script setup>
import { ref, reactive } from 'vue';
import emailjs from 'emailjs-com';

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
        await emailjs.send(
            'service_f9epp1q',
            'template_hyns275',
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
            'EHmdNQmMvNuRzDaFY'
        );
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
    <section class="page-shell min-h-screen">
        <div class="container mx-auto max-w-6xl">
            <!-- En-tête -->
            <div class="section-head" data-reveal>
                <h1 class="text-5xl lg:text-6xl font-bold mb-6 section-title">
                    <span
                        class="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Me Contacter
                    </span>
                </h1>
                <div class="section-rule"></div>
                <p class="text-xl text-slate-300 max-w-3xl mx-auto section-lead">
                    Une question, un projet ou simplement envie d'échanger ? N'hésitez pas à me contacter !
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-12">
                <!-- Informations de contact -->
                <div class="space-y-8">
                    <!-- Coordonnées -->
                    <div
                        class="glass-effect card-surface rounded-3xl p-8 border border-slate-700/50 hover:border-emerald-400/30 transition-all duration-500" data-reveal>
                        <div class="flex items-center mb-6">
                            <div
                                class="w-16 h-16 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-slate-200">Coordonnées</h3>
                        </div>

                        <div class="space-y-4">
                            <div
                                class="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-colors duration-300">
                                <div class="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-slate-400 text-sm">Email</p>
                                    <a href="mailto:matheo.grdj88@gmail.com"
                                        class="text-emerald-400 link-ink font-medium">
                                        matheo.grdj88@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div
                                class="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-colors duration-300">
                                <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-slate-400 text-sm">Localisation</p>
                                    <p class="text-blue-400 font-medium">Nancy et alentours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Réseaux sociaux -->
                    <div
                        class="glass-effect card-surface rounded-3xl p-8 border border-slate-700/50 hover:border-purple-400/30 transition-all duration-500" data-reveal>
                        <div class="flex items-center mb-6">
                            <div
                                class="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-slate-200">Réseaux</h3>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <a href="https://github.com/matheoGrdj" target="_blank"
                                class="flex items-center space-x-3 p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-all duration-300 group">
                                <div
                                    class="w-10 h-10 bg-gray-500/20 rounded-lg flex items-center justify-center group-hover:bg-gray-500/30 transition-colors duration-300">
                                    <svg class="w-5 h-5 text-gray-400 group-hover:text-gray-300" fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </div>
                                <span
                                    class="text-slate-300 group-hover:text-white transition-colors duration-300 font-medium">GitHub</span>
                            </a>

                            <a href="https://www.linkedin.com/in/mathéo-grandjean-36353a271/" target="_blank"
                                class="flex items-center space-x-3 p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-all duration-300 group">
                                <div
                                    class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                                    <svg class="w-5 h-5 text-blue-400 group-hover:text-blue-300" fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </div>
                                <span
                                    class="text-slate-300 group-hover:text-white transition-colors duration-300 font-medium">LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    <!-- Disponibilité -->
                    <div
                        class="glass-effect card-surface rounded-3xl p-8 border border-slate-700/50 hover:border-emerald-400/30 transition-all duration-500" data-reveal>
                        <div class="flex items-center mb-6">
                            <div
                                class="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold text-slate-200">Disponibilité</h3>
                                <div class="flex items-center space-x-2 mt-1">
                                    <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                    <span class="text-emerald-400 text-sm font-medium">En ligne</span>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="p-4 bg-slate-800/30 rounded-xl">
                                <p class="text-emerald-400 font-semibold mb-1">Jours ouvrables</p>
                                <p class="text-slate-300">9h - 18h</p>
                            </div>
                            <div class="p-4 bg-slate-800/30 rounded-xl">
                                <p class="text-emerald-400 font-semibold mb-1">Temps de réponse</p>
                                <p class="text-slate-300">Sous 24-48h</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Formulaire de contact -->
                <div
                    class="glass-effect card-surface rounded-3xl p-8 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-500" data-reveal>
                    <div class="flex items-center mb-8">
                        <div
                            class="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-slate-200">Envoyer un message</h3>
                    </div>

                    <!-- Message de succès -->
                    <div v-if="isSubmitted" class="text-center py-12">
                        <div
                            class="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg class="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <h4 class="text-2xl font-bold text-emerald-400 mb-4">Message envoyé !</h4>
                        <p class="text-slate-300 mb-6">Merci pour votre message. Je vous répondrai dans les plus brefs
                            délais.</p>
                        <button @click="isSubmitted = false" class="btn btn-primary">
                            Envoyer un nouveau message
                        </button>
                    </div>

                    <!-- Formulaire -->
                    <form v-else @submit="handleSubmit" class="space-y-6">
                        <div>
                            <label for="name" class="block text-slate-300 font-medium mb-2">Nom complet</label>
                            <input id="name" v-model="formData.name" type="text"
                                class="w-full field-base border rounded-xl px-4 py-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300"
                                :class="[errors.name ? 'border-red-500 focus:ring-red-500/50' : 'border-slate-600 focus:ring-emerald-500/50 focus:border-emerald-400']"
                                placeholder="Votre nom complet" :disabled="isSubmitting">
                            <p v-if="errors.name" class="text-red-400 text-sm mt-1">{{ errors.name }}</p>
                        </div>

                        <div>
                            <label for="email" class="block text-slate-300 font-medium mb-2">Adresse email</label>
                            <input id="email" v-model="formData.email" type="email"
                                class="w-full field-base border rounded-xl px-4 py-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300"
                                :class="[errors.email ? 'border-red-500 focus:ring-red-500/50' : 'border-slate-600 focus:ring-emerald-500/50 focus:border-emerald-400']"
                                placeholder="votre.email@exemple.com" :disabled="isSubmitting">
                            <p v-if="errors.email" class="text-red-400 text-sm mt-1">{{ errors.email }}</p>
                        </div>

                        <div>
                            <label for="message" class="block text-slate-300 font-medium mb-2">Message</label>
                            <textarea id="message" v-model="formData.message" rows="6"
                                class="w-full field-base border rounded-xl px-4 py-3 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
                                :class="[errors.message ? 'border-red-500 focus:ring-red-500/50' : 'border-slate-600 focus:ring-emerald-500/50 focus:border-emerald-400']"
                                placeholder="Décrivez votre projet, votre question ou simplement dites bonjour !"
                                :disabled="isSubmitting"></textarea>
                            <p v-if="errors.message" class="text-red-400 text-sm mt-1">{{ errors.message }}</p>
                        </div>

                        <div v-if="submitError" class="p-4 bg-red-900/30 border border-red-500/50 rounded-xl">
                            <p class="text-red-400">{{ submitError }}</p>
                        </div>

                        <button type="submit" :disabled="isSubmitting"
                            class="btn btn-primary btn-block disabled:opacity-50 disabled:cursor-not-allowed">
                            <svg v-if="isSubmitting" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                            </svg>
                            <span>{{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}</span>
                        </button>
                    </form>
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
