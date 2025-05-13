<template>
    <section class="py-12 px-6 min-h-screen bg-gray-700 text-white font-mono">
        <div class="container mx-auto max-w-6xl">
            <h2 class="text-4xl lg:text-5xl font-bold mb-12">
                <span class="text-yellow-400">class </span>
                <span class="text-blue-400">Projects </span>
                <span class="text-gray-400">{</span>
            </h2>

            <div class="space-y-12 ml-8 lg:ml-12 text-lg lg:text-xl">
                <div
                    class="project-card bg-gray-700 bg-opacity-50 p-6 lg:p-8 rounded-lg hover:bg-opacity-70 transition-all duration-300">
                    <span class="text-purple-400">const </span>
                    <span class="text-blue-400 text-xl lg:text-2xl">projetTutore </span>
                    <span class="text-gray-400">=</span> {
                    <div class="ml-6 mt-4">
                        <span class="text-blue-400">name:</span>
                        <span class="text-green-400">"Suivi Production Photovoltaïque"</span>,
                        <br />
                        <span class="text-blue-400">stack:</span> [
                        <span class="text-green-400">"Vue.js"</span>,
                        <span class="text-green-400">"Symfony"</span>
                        ],
                        <br />
                        <span class="text-blue-400">description:</span>
                        <span class="text-green-400">"Application web de monitoring en temps réel"</span>
                    </div>
                    };
                </div>

                <div
                    class="project-card bg-gray-700 bg-opacity-50 p-6 lg:p-8 rounded-lg hover:bg-opacity-70 transition-all duration-300">
                    <span class="text-purple-400">const </span>
                    <span class="text-blue-400 text-xl lg:text-2xl">crazyCharlyDay </span>
                    <span class="text-gray-400">=</span> {
                    <div class="ml-6 mt-4">
                        <span class="text-blue-400">name:</span>
                        <span class="text-green-400">"24h Challenge"</span>,
                        <br />
                        <span class="text-blue-400">features:</span> [
                        <div class="ml-6 mt-2 space-y-2">
                            <span class="text-green-400 block">"Algorithme évolutif"<span
                                    class="text-white">,</span></span>
                            <span class="text-green-400 block">"Déploiement serveur"<span
                                    class="text-white">,</span></span>
                            <span class="text-green-400 block">"Application complète"</span>
                        </div>
                        ]
                    </div>
                    };
                </div>

                <div
                    class="mt-12 bg-gray-700 bg-opacity-30 p-6 lg:p-8 rounded-lg hover:bg-opacity-50 transition-all duration-300">
                    <span class="text-purple-400">function </span>
                    <span class="text-yellow-400 text-xl lg:text-2xl">viewSourceCode</span>() {
                    <div class="ml-6 mt-4">
                        return
                        <a href="https://github.com/matheoGrdj" target="_blank"
                            class="text-green-400 hover:underline transition-all duration-300 text-lg lg:text-xl">
                            "github.com/matheoGrdj"
                        </a>;
                    </div>
                    }
                </div>
            </div>

            <div class="text-gray-400 mt-12 text-2xl lg:text-3xl">}</div>
        </div>
    </section>
</template>