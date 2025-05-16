<template>
    <section class="py-16 px-4 md:px-6 min-h-screen bg-gray-700 text-white font-mono">
        <div class="container mx-auto max-w-5xl">
            <h2 class="text-4xl lg:text-5xl font-bold mb-12 px-2">
                <span class="text-yellow-400">Mes Projets</span>
            </h2>

            <div class="space-y-10 md:space-y-16 mt-12 text-base md:text-lg lg:text-xl">
                <!-- Projet Tutoré -->
                <div class="bg-gray-800 bg-opacity-50 rounded-lg p-6 md:p-8 transition-all duration-300 shadow-lg">
                    <div class="flex items-center mb-6">
                        <div class="text-purple-400 mr-4 text-2xl md:text-3xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 md:h-10 md:w-10" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 class="text-blue-400 text-2xl md:text-3xl font-semibold">Suivi Production Photovoltaïque
                        </h3>
                    </div>
                    <div class="ml-3 md:ml-6 space-y-3 md:space-y-4">
                        <p class="text-gray-300"><span class="text-green-400 font-semibold">Description:</span>
                            Application web permettant le monitoring en temps réel de la production d'une centrale
                            photovoltaïque
                            villageoise</p>

                        <p class="text-gray-300"><span class="text-green-400 font-semibold">Technologies:</span> Vue.js
                            (frontend), Symfony (API backend)</p>

                        <p class="text-gray-300"><span class="text-green-400 font-semibold">Contexte:</span> Projet
                            universitaire réalisé en dernière année de BUT</p>
                    </div>
                </div>

                <!-- Crazy Charly Day -->
                <div
                    class="bg-gray-800 bg-opacity-50 rounded-lg p-6 md:p-8 transition-all duration-300 shadow-lg transform">
                    <div class="flex items-center mb-6">
                        <div class="text-purple-400 mr-4 text-2xl md:text-3xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 md:h-10 md:w-10" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 class="text-blue-400 text-2xl md:text-3xl font-semibold">Challenge 24h - Crazy Charly Day
                        </h3>
                    </div>
                    <div class="ml-3 md:ml-6 space-y-3 md:space-y-4">
                        <p class="text-gray-300"><span class="text-green-400 font-semibold">Description:</span>
                            Développement d'une application web complète en 24h lors d'un challenge universitaire</p>

                        <p class="text-gray-300"><span class="text-green-400 font-semibold">Points forts:</span></p>
                        <ul class="list-disc list-inside ml-2 md:ml-4 text-gray-300">
                            <li>Création d'un algorithme d'optimisation évolutif</li>
                            <li>Déploiement sur serveur</li>
                            <li>Application entièrement fonctionnelle</li>
                        </ul>

                        <p class="text-gray-300"><span class="text-green-400 font-semibold">Contexte:</span> Challenge
                            organisé par l'IUT Charlemagne (8h-23h)</p>
                    </div>
                </div>

                <!-- Tic Tac Toe -->
                <div
                    class="bg-gray-800 bg-opacity-50 rounded-lg p-6 md:p-8 transition-all duration-300 shadow-lg transform">
                    <div class="flex flex-wrap items-center mb-6">
                        <div class="text-purple-400 mr-4 text-2xl md:text-3xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 md:h-10 md:w-10" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 class="text-blue-400 text-2xl md:text-3xl font-semibold">Jeu Tic Tac Toe (Morpion)</h3>
                    </div>
                    <div class="ml-3 md:ml-6 space-y-3 md:space-y-4">
                        <p class="text-gray-300"><span class="text-green-400 font-semibold">Description:</span> Jeu de
                            morpion interactif où deux joueurs s'affrontent en plaçant alternativement des X et des O
                            sur une
                            grille 3×3</p>

                        <p class="text-gray-300"><span class="text-green-400 font-semibold">Technologies:</span> Vue.js
                            pour l'interface utilisateur, JavaScript pour la logique de jeu et une petite API</p>

                        <p class="text-gray-300"><span class="text-green-400 font-semibold">Contexte:</span> Projet
                            réalisé en 3ème année de BUT Informatique</p>

                        <div class="mt-6 flex justify-start">
                            <a href="#" target="_blank"
                                class="inline-flex items-center space-x-3 hover:text-gray-800 transition-colors duration-300 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 px-5 py-3 rounded-full shadow-md transform">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span class="text-base md:text-lg font-medium">Tester le jeu (en travaux)</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Stage -->
                <div
                    class="bg-gray-800 bg-opacity-50 rounded-lg p-6 md:p-8 transition-all duration-300 shadow-lg transform">
                    <div class="flex items-center mb-6">
                        <div class="text-purple-400 mr-4 text-2xl md:text-3xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 md:h-10 md:w-10" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 class="text-blue-400 text-2xl md:text-3xl font-semibold">Application de Gestion</h3>
                    </div>
                    <div class="ml-3 md:ml-6 space-y-3 md:space-y-4">
                        <p class="text-gray-300"><span class="text-green-400 font-semibold">Description:</span>
                            Application web de gestion de bureaux développée en stage</p>

                        <p class="text-gray-300"><span class="text-green-400 font-semibold">Technologies:</span> PHP
                            avec framework Symfony</p>

                        <p class="text-gray-300"><span class="text-green-400 font-semibold">Contexte:</span> Stage
                            réalisé de février à mai 2024</p>
                    </div>
                </div>

                <!-- Lien GitHub -->
                <div
                    class="bg-gray-800 bg-opacity-50 rounded-lg p-6 md:p-8  transition-all duration-300 text-center shadow-lg transform ">
                    <div class="flex flex-col md:flex-row items-center justify-center mb-6 space-y-3 md:space-y-0">
                        <div class="text-purple-400 mr-0 md:mr-4 text-2xl md:text-3xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 md:h-10 md:w-10" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </div>
                        <h3 class="text-yellow-400 text-2xl md:text-3xl font-semibold">Voir plus de projets ?</h3>
                    </div>

                    <p class="text-gray-300 mb-6 text-lg md:text-xl">Retrouvez tous mes projets et contributions sur
                        GitHub</p>

                    <div class="flex justify-center">
                        <a href="https://github.com/matheoGrdj" target="_blank"
                            class="inline-flex items-center space-x-3 hover:text-green-400 transition-colors duration-300 bg-gray-900 px-6 py-3 rounded-full shadow-md transform">
                            <svg class="w-6 h-6 md:w-7 md:h-7 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <span class="text-base md:text-lg font-medium">Visiter mon GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>