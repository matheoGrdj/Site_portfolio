<template>
    <section class="py-12 px-6 min-h-screen bg-gray-700 text-white font-mono">
        <div class="container mx-auto max-w-6xl">
            <h2 class="text-4xl lg:text-5xl font-bold mb-12">
                <span class="text-yellow-400">class </span>
                <span class="text-blue-400">Contact </span>
                <span class="text-gray-400">{</span>
            </h2>

            <div class="space-y-8 ml-8 lg:ml-12 text-lg lg:text-xl">
                <div class="contact-method">
                    <span class="text-purple-400">const </span>
                    <span class="text-blue-400">email</span>
                    <span class="text-gray-400">= </span>
                    <a href="mailto:matheo.grdj88@gmail.com"
                        class="text-green-400 hover:underline transition-all duration-300">
                        "matheo.grdj88@gmail.com"
                    </a>;
                </div>

                <div class="contact-method">
                    <span class="text-purple-400">const </span>
                    <span class="text-blue-400">phone</span>
                    <span class="text-gray-400">=</span>
                    <span class="text-green-400">"+33 7 69 13 87 85"</span>;
                </div>

                <div class="contact-method">
                    <span class="text-purple-400">const </span>
                    <span class="text-blue-400">location</span>
                    <span class="text-gray-400">=</span>
                    <span class="text-green-400">"5 rue de Cronstadt"</span>;
                </div>

                <div class="contact-method mt-12">
                    <span class="text-purple-400">function </span>
                    <span class="text-yellow-400">sendMessage</span>() {
                    <div class="bg-gray-800 p-6 rounded-lg mt-4 hover:bg-gray-700 transition-colors duration-300">
                        <form class="space-y-6">
                            <input type="text" placeholder="const yourName = ''"
                                class="w-full bg-gray-900 p-3 rounded border border-gray-700 focus:border-green-400 focus:outline-none text-base lg:text-lg">
                            <input type="email" placeholder="const yourEmail = ''"
                                class="w-full bg-gray-900 p-3 rounded border border-gray-700 focus:border-green-400 focus:outline-none text-base lg:text-lg">
                            <textarea placeholder="const message = ''"
                                class="w-full bg-gray-900 p-3 rounded border border-gray-700 focus:border-green-400 focus:outline-none h-40 text-base lg:text-lg">
                            </textarea>
                            <button
                                class="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition-colors duration-300 cursor-pointer text-base lg:text-lg">
                                .submit()
                            </button>
                        </form>
                    </div>
                    <br>
                    }
                </div>
            </div>

            <div class="text-gray-400 mt-12 text-xl lg:text-2xl">}</div>
        </div>
    </section>
</template>