<template>
    <div class=" dark:bg-gray-800">
        <!-- navbar -->
        <nav class="fixed w-full top-0 z-50 bg-blue-900">
            <div class="container mx-auto flex flex-col  ">
                <!-- main nav -->
                <div class="flex justify-between items-center p-4 lg:p-6">
                    <div class="flex items-center justify-center">
                        <!-- toggle -->
                        <button data-drawer-target="welcome-side" data-drawer-toggle="welcome-side"
                            aria-controls="welcome-side" type="button"
                            class=" textinline-flex items-center p-2 me-2 text-sm lg:hidden ">
                            <span class="sr-only">Open sidebar</span>
                            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                    d="M5 7h14M5 12h14M5 17h10" />
                            </svg>
                        </button>
                        <!-- logo -->
                        <a href="/" class="flex items-center justify-center w-full">
                            <img src="../../public/img/naujan-lgu-logo.png" class="h-12 me-2 " alt="Logo" />
                            <span
                                class="self-center text-2xl font-bold lg:text-3xl whitespace-nowrap text-white dark:text-white ">FLOOD
                                <span class="text-yellow-300">WATCH</span></span>
                        </a>
                    </div>

                    <!-- menus -->
                    <div
                        class="hidden lg:flex items-center justify-end text-gray-300 dark:text-white font-medium text-nowrap">
                        <ul class="flex ">
                            <!-- announcements -->
                            <li>
                                <a @click="scrollToSection(announcements)"
                                    class="px-4 py-2 hover:text-yellow-300 transition-all duration-150">
                                    Announcements
                                </a>
                            </li>

                            <!-- emergency hotlines -->
                            <li>
                                <a @click="scrollToSection(emergency_hotlines)"
                                    class="px-4 py-2 hover:text-yellow-300 transition-all duration-150">
                                    Emergency Hotlines
                                </a>
                            </li>

                            <!-- feautures -->
                            <li>
                                <a @click="scrollToSection(features)"
                                    class="px-4 py-2 hover:text-yellow-300 transition-all duration-150">
                                    Feautures
                                </a>
                            </li>

                            <!-- about -->
                            <li>
                                <a @click="scrollToSection(about)"
                                    class="px-4 py-2 hover:text-yellow-300 transition-all duration-150">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>



                <!-- sub nav -->
                <div class="flex flex-col fixed top-0 left-0 z-40 w-72 h-screen transition-all -translate-x-full p-6 bg-blue-900 border-e border-gray-600"
                    id="welcome-side">
                    <div class=" mb-6 flex">
                        <a href="/" class=" w-full">
                            <img src="../../public/img/naujan-lgu-logo.png" class="h-12" alt="Logo" />

                        </a>
                        <button type="button" data-drawer-hide="welcome-side" aria-controls="welcome-side"
                            class=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Close menu</span>
                        </button>
                    </div>
                    <ul
                        class="flex flex-col text-nowrap overflow-x-auto text-lg text-gray-300 gap-4 font-medium h-full">
                        <!-- announcements -->
                        <li>
                            <a @click="scrollToSection(announcements)"
                                class=" hover:text-yellow-300 transition-all duration-150">
                                Announcements
                            </a>
                        </li>

                        <!-- emergency hotlines -->
                        <li>
                            <a @click="scrollToSection(emergency_hotlines)"
                                class=" hover:text-yellow-300 transition-all duration-150">
                                Emergency Hotlines
                            </a>
                        </li>

                        <!-- feautures -->
                        <li>
                            <a @click="scrollToSection(features)"
                                class=" hover:text-yellow-300 transition-all duration-150">
                                Feautures
                            </a>
                        </li>

                        <!-- about -->
                        <li>
                            <a @click="scrollToSection(about)"
                                class=" hover:text-yellow-300 transition-all duration-150">
                                About
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- main -->
        <main class="">
            <!-- hero -->
            <section
                class="flood min-h-screen  relative overflow-hidden flex justify-center items-center bg-blue-900 text-white p-4 lg:px-6 py-40">
                <div class="flood-text z-10 p-4">
                    <h1 class="font-bold text-5xl xl:text-6xl mb-4">
                        Stay Informed. Stay Safe.
                    </h1>
                    <p class=" text-gray-200 text-base lg:text-lg">
                        Monitor flood updates and be prepared to take action in case of
                        emergency.
                    </p>
                    <a href=""
                        class="mt-8 inline-block bg-yellow-300 text-blue-900 py-3 px-6 rounded shadow hover:bg-yellow-400 font-medium">Get
                        Started</a>
                </div>

                <!-- Water animation layers -->
                <div class="wave"></div>
                <div class="wave"></div>
            </section>

            <!-- announcements -->
            <section ref="announcements" class=" bg-white dark:bg-blue-950 min-h-screen flex ">
                <div class="container mx-auto p-4 md:px-8 py-24 lg:py-28 flex flex-col">
                    <div
                        class="mb-8 text-3xl text-center lg:text-start md:text-4xl font-bold text-blue-900 dark:text-yellow-300">
                        Latest Updates
                    </div>
                    <div class="flex flex-col">
                        <div class="rounded bg-yellow-300 dark:bg-blue-500 p-4 shadow mb-6">
                            Current flood status
                        </div>
                        <div class="flex flex-col md:flex-row gap-2 lg:gap-4 items-center justify-center">
                            <!-- left -->
                            <div class=" rounded bg-gray-200 p-4 w-full shadow flex flex-nowrap">
                                asdasd
                            </div>
                            <!-- middle -->
                            <div class=" rounded bg-gray-200 p-4 w-full shadow flex flex-nowrap">
                                asdasd
                            </div>
                            <!-- right -->
                            <div class=" rounded bg-gray-200 p-4 w-full shadow flex flex-nowrap">
                                asdasd
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <!-- <section ref="emergency_hotlines" class=" bg-green-500 min-h-screen flex ">
                <div class="container mx-auto p-4 md:px-6 py-24 lg:py-28">
                    <div class="text-3xl md:text-4xl font-bold text-blue-900">
                        Hotlines
                    </div>
                </div>
            </section>

            <section ref="features" class=" bg-yellow-500 min-h-screen flex ">
                <div class="container mx-auto p-4 md:px-6 py-24 lg:py-28">
                    <div class="text-3xl md:text-4xl font-bold text-blue-900">
                        Features
                    </div>
                </div>
            </section>

            <section ref="about" class=" bg-pink-500 min-h-screen flex ">
                <div class="container mx-auto p-4 md:px-6 py-24 lg:py-28">
                    <div class="text-3xl md:text-4xl font-bold text-blue-900">
                        About
                    </div>
                </div>
            </section> -->

        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Define section references
const announcements = ref(null)
// const emergency_hotlines = ref(null)
// const features = ref(null)
// const about = ref(null)

// Function to scroll to a specific section
function scrollToSection(sectionRef) {
    if (sectionRef?.value) {
        sectionRef.value.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>

<style scoped>
.wave {
    position: absolute;
    width: 200%;
    height: 100%;
    background: #3b82f6;
    opacity: 0.6;
    border-radius: 100%;
    animation: rise 6s ease-in-out infinite;
    transform: translateY(100%);
}

.wave:nth-child(2) {
    background: #60a5fa;
    animation-delay: -3s;
}

@keyframes rise {
    0% {
        transform: translateY(100%);
    }

    50% {
        transform: translateY(20%);
    }

    100% {
        transform: translateY(100%);
    }
}

/* Responsive text styling for hero section */
.flood-text {
    z-index: 10;
    text-align: center;
}


@media (min-width: 640px) {
    .flood h1 {
        font-size: 4rem;
    }
}

@media (min-width: 768px) {
    .flood h1 {
        font-size: 5rem;
    }
}
</style>