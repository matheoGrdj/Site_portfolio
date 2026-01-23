<template>
    <section class="page-shell min-h-screen">
        <div class="container mx-auto max-w-6xl">
            <!-- En-tête avec animation -->
            <div class="section-head" data-reveal>
                <h1 class="text-5xl lg:text-6xl font-bold mb-6 section-title">
                    <span
                        class="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Mes Projets
                    </span>
                </h1>
                <div class="section-rule"></div>
                <p class="text-xl text-slate-300 max-w-3xl mx-auto section-lead">
                    Découvrez mes réalisations techniques, de la conception au déploiement
                </p>
            </div>

            <!-- Grille de projets -->
            <div class="grid gap-8 lg:gap-12">
                <!-- Projet Tutoré -->
                <div class="group relative">
                    <div class="glass-effect card-surface rounded-3xl p-8 transition-all duration-500 border border-slate-700/50 hover:border-emerald-400/30"
                        data-reveal>
                        <div class="flex flex-col lg:flex-row gap-8">
                            <!-- Icône et titre -->
                            <div class="lg:w-1/3">
                                <div class="flex items-center mb-6">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3
                                            class="text-2xl font-bold text-slate-200 group-hover:text-emerald-400 transition-colors duration-300">
                                            Suivi Photovoltaïque
                                        </h3>
                                        <div class="flex flex-wrap gap-2 mt-3">
                                            <span class="chip">Vue.js</span>
                                            <span class="chip">Symfony</span>
                                            <span class="chip">API
                                                REST</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Contenu -->
                            <div class="lg:w-2/3">
                                <p class="text-slate-300 text-lg leading-relaxed mb-6">
                                    Application web complète de monitoring en temps réel pour une centrale
                                    photovoltaïque villageoise.
                                    Interface moderne avec dashboards interactifs et API backend robuste.
                                </p>

                                <div class="grid md:grid-cols-2 gap-4 mb-6">
                                    <div class="flex items-center space-x-3">
                                        <div class="bullet-dot"></div>
                                        <span class="text-slate-400">Monitoring temps réel</span>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <div class="bullet-dot"></div>
                                        <span class="text-slate-400">Dashboards interactifs</span>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <div class="bullet-dot"></div>
                                        <span class="text-slate-400">API REST complète</span>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <div class="bullet-dot"></div>
                                        <span class="text-slate-400">Projet universitaire</span>
                                    </div>
                                </div>

                                <div class="flex items-center text-sm text-slate-400">
                                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                    Projet de 3ème année BUT Informatique
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Drivup Auto-École -->
                <div class="group relative">
                    <div class="glass-effect card-surface rounded-3xl p-8 transition-all duration-500 border border-slate-700/50 hover:border-cyan-400/30"
                        data-reveal>
                        <div class="flex flex-col lg:flex-row gap-8">
                            <div class="lg:w-1/3">
                                <div class="flex items-center mb-6">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3
                                            class="text-2xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors duration-300">
                                            Drivup Auto-École
                                        </h3>
                                        <div class="flex flex-wrap gap-2 mt-3">
                                            <span class="chip">Nuxt.js</span>
                                            <span class="chip">Netlify</span>
                                            <span class="chip">Production</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:w-2/3">
                                <p class="text-slate-300 text-lg leading-relaxed mb-6">
                                    Application web moderne pour l'auto-école Drivup basée à Strasbourg. Développée avec
                                    Nuxt.js
                                    et déployée sur Netlify, elle offre une interface intuitive pour la gestion des
                                    cours de conduite.
                                </p>

                                <div class="grid md:grid-cols-2 gap-4 mb-6">
                                    <div class="flex items-center space-x-3">
                                        <div class="bullet-dot"></div>
                                        <span class="text-slate-400">Interface moderne</span>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <div class="bullet-dot"></div>
                                        <span class="text-slate-400">Framework Nuxt.js</span>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <div class="bullet-dot"></div>
                                        <span class="text-slate-400">Hébergé sur Netlify</span>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <div class="bullet-dot"></div>
                                        <span class="text-slate-400">En production</span>
                                    </div>
                                </div>

                                <div
                                    class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                                    <div class="flex items-center text-sm text-slate-400">
                                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                            </path>
                                        </svg>
                                        Auto-école Drivup - Strasbourg
                                    </div>

                                    <a href="https://drivup.netlify.app" target="_blank" class="btn btn-secondary">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                            </path>
                                        </svg>
                                        <span>Visiter le site</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Crazy Charly Day -->
                <div class="group relative">
                    <div class="glass-effect card-surface rounded-3xl p-8 transition-all duration-500 border border-slate-700/50 hover:border-orange-400/30"
                        data-reveal>
                        <div class="flex flex-col lg:flex-row gap-8">
                            <div class="lg:w-1/3">
                                <div class="flex items-center mb-6">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3
                                            class="text-2xl font-bold text-slate-200 group-hover:text-orange-400 transition-colors duration-300">
                                            Challenge 24h
                                        </h3>
                                        <div class="flex flex-wrap gap-2 mt-3">
                                            <span class="chip">24h</span>
                                            <span class="chip">Algorithme</span>
                                            <span class="chip">Déploiement</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:w-2/3">
                                <p class="text-slate-300 text-lg leading-relaxed mb-6">
                                    Challenge intense de développement : création complète d'une application web en 24h.
                                    Conception d'algorithmes d'optimisation et déploiement en production.
                                </p>

                                <div class="grid md:grid-cols-2 gap-4 mb-6">
                                    <div class="flex items-center space-x-3">
                                        <div class="bullet-dot animate-pulse"></div>
                                        <span class="text-slate-400">24h de développement</span>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <div class="bullet-dot animate-pulse"></div>
                                        <span class="text-slate-400">Algorithme évolutif</span>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <div class="bullet-dot animate-pulse"></div>
                                        <span class="text-slate-400">Application fonctionnelle</span>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <div class="bullet-dot animate-pulse"></div>
                                        <span class="text-slate-400">Déployé en production</span>
                                    </div>
                                </div>

                                <div class="flex items-center text-sm text-slate-400">
                                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                    Challenge IUT Charlemagne (8h-23h)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tic Tac Toe -->
                <!-- <div class="group relative">
                    <div
                        class="glass-effect card-surface rounded-3xl p-8 transition-all duration-500 border border-slate-700/50 hover:border-green-400/30" data-reveal>
                        <div class="flex flex-col lg:flex-row gap-8">
                            <div class="lg:w-1/3">
                                <div class="flex items-center mb-6">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3
                                            class="text-2xl font-bold text-slate-200 group-hover:text-green-400 transition-colors duration-300">
                                            Tic Tac Toe
                                        </h3>
                                        <div class="flex flex-wrap gap-2 mt-3">
                                            <span class="chip">Vue.js</span>
                                            <span class="chip">JavaScript</span>
                                            <span class="chip">Jeu</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:w-2/3">
                                <p class="text-slate-300 text-lg leading-relaxed mb-6">
                                    Jeu de morpion interactif développé en Vue.js avec une logique de jeu complète.
                                    Interface utilisateur intuitive et animations fluides.
                                </p>

                                <div class="grid md:grid-cols-2 gap-4 mb-6">
                                    <div class="flex items-center space-x-3">
                                        <div class="bullet-dot"></div>
                                        <span class="text-slate-400">Interface interactive</span>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <div class="bullet-dot"></div>
                                        <span class="text-slate-400">Logique complète</span>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <div class="bullet-dot"></div>
                                        <span class="text-slate-400">Animations fluides</span>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <div class="bullet-dot"></div>
                                        <span class="text-slate-400">Multijoueur local</span>
                                    </div>
                                </div>

                                <div
                                    class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                                    <div class="flex items-center text-sm text-slate-400">
                                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z">
                                            </path>
                                        </svg>
                                        Projet 3ème année BUT
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->

                <!-- Application de Stage -->
                <div class="group relative">
                    <div class="glass-effect card-surface rounded-3xl p-8 transition-all duration-500 border border-slate-700/50 hover:border-blue-400/30"
                        data-reveal>
                        <div class="flex flex-col lg:flex-row gap-8">
                            <div class="lg:w-1/3">
                                <div class="flex items-center mb-6">
                                    <div
                                        class="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3
                                            class="text-2xl font-bold text-slate-200 group-hover:text-blue-400 transition-colors duration-300">
                                            App de Gestion
                                        </h3>
                                        <div class="flex flex-wrap gap-2 mt-3">
                                            <span class="chip">PHP</span>
                                            <span class="chip">Symfony</span>
                                            <span class="chip">Stage</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:w-2/3">
                                <p class="text-slate-300 text-lg leading-relaxed mb-6">
                                    Application web complète de gestion de bureaux développée durant mon stage
                                    professionnel.
                                    Architecture robuste avec framework Symfony.
                                </p>

                                <div class="grid md:grid-cols-2 gap-4 mb-6">
                                    <div class="flex items-center space-x-3">
                                        <div class="bullet-dot"></div>
                                        <span class="text-slate-400">Gestion complète</span>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <div class="bullet-dot"></div>
                                        <span class="text-slate-400">Architecture Symfony</span>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <div class="bullet-dot"></div>
                                        <span class="text-slate-400">Interface admin</span>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <div class="bullet-dot"></div>
                                        <span class="text-slate-400">Base de données</span>
                                    </div>
                                </div>

                                <div class="flex items-center text-sm text-slate-400">
                                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                    Stage professionnel (Février - Mai 2024)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section GitHub -->
                <div class="text-center mt-16">
                    <div class="glass-effect card-surface rounded-3xl p-12 border border-slate-700/50 hover:border-emerald-400/30 transition-all duration-500"
                        data-reveal>
                        <div class="max-w-3xl mx-auto">
                            <div class="flex justify-center mb-6">
                                <div
                                    class="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center">
                                    <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </div>
                            </div>

                            <h3
                                class="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                Découvrir tous mes projets
                            </h3>

                            <p class="text-xl text-slate-300 mb-8 leading-relaxed">
                                Explorez l'ensemble de mes contributions, expérimentations et projets open source sur
                                GitHub
                            </p>

                            <a href="https://github.com/matheoGrdj" target="_blank" class="btn btn-primary btn-lg">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                <span>Visiter mon GitHub</span>
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
