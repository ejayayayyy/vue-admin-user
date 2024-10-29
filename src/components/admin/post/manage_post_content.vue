<template>

    <add_new_post_component />

    <div class=" hidden xl:flex w-1/3">
        <section class="w-full">
            <div class="text-2xl font-semibold mb-4 ">
                Manage Post
            </div>

            <!-- <form class="mb-4">
                <label for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative mb-2">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search"
                        class="block w-full py-2 ps-10 text-sm text-gray-900 border border-gray-300 dark:border-gray-500 rounded bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search..." required />
                </div>
                <button type="submit"
                    class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none text-sm rounded group shadow px-4 py-1.5  flex items-center justify-center ">
                    <svg class="w-4 h-4 text-white transition duration-75 me-1" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg>

                    Search
                </button>

            </form> -->


            <div
                class="bg-white dark:bg-gray-700 rounded p-4 flex flex-col dark:text-gray-300 text-base shadow h-auto border border-gray-300 dark:border-gray-500">


                <button data-modal-target="add-new-post-modal" data-modal-toggle="add-new-post-modal"
                    class=" text-white bg-blue-600 hover:bg-blue-700 focus:outline-none text-sm rounded group shadow p-2 flex items-center justify-center w-full mb-2"
                    type="button">
                    <svg class="w-4 h-4 text-white transition duration-75 me-1" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 12h14m-7 7V5" />
                    </svg>
                    New Post
                </button>

                <hr class="text-gray-300 dark:text-gray-500 my-2">

                <span class="block text-base font-semibold mt-2 mb-1">
                    Search
                </span>
                <form class="mb-2">
                    <label for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative mb-2">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                            class="block w-full py-2 ps-10 text-sm text-gray-900 border border-gray-300 dark:border-gray-500 rounded bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search post..." required />
                    </div>
                    <!-- <button type="submit"
                        class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none text-sm rounded group shadow px-4 py-1.5  flex items-center justify-center ">
                        <svg class="w-4 h-4 text-white transition duration-75 me-1" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>

                        Search
                    </button> -->

                </form>

                <ul class=" font-medium space-y-1">
                    <!-- filter by -->
                    <li>
                        <button type="button"
                            class="flex items-center px-4 py-2 w-full text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                            <!-- aria-controls="filter" data-collapse-toggle="filter" -->
                            <svg class="w-5 h-5 text-gray-500  dark:text-gray-400 " xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z" />
                            </svg>
                            <span class="flex-1 ml-3 text-left whitespace-nowrap">Filter by:</span>
                            <!-- <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg> -->
                        </button>
                        <ul id="filter" class="">
                            <li>
                                <a href="/admin/forecast"
                                    class="flex items-center p-2 pl-12 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">Category</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center p-2 pl-12 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">Tags</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center p-2 pl-12 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">History</a>
                            </li>
                        </ul>
                    </li>

                    <!-- sort by: -->
                    <li>
                        <button type="button"
                            class="flex items-center px-4 py-2 w-full text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                            <!-- aria-controls="sort" data-collapse-toggle="sort" -->
                            <svg class="w-5 h-5 text-gray-500  dark:text-gray-400 " xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                            </svg>
                            <span class="flex-1 ml-3 text-left whitespace-nowrap">Sort by:</span>
                            <!-- <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg> -->
                        </button>
                        <ul id="sort" class="">
                            <li>
                                <a href="/admin/forecast"
                                    class="flex items-center p-2 pl-12 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">Forecast</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center p-2 pl-12 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">Tall
                                    Bridge</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center p-2 pl-12 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">History</a>
                            </li>
                        </ul>
                    </li>
                    <!-- archives -->
                    <li>
                        <button type="button"
                            class="flex items-center px-4 py-2 w-full text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                            <!-- aria-controls="sort" data-collapse-toggle="sort" -->
                            <svg class="w-5 h-5 text-gray-500  dark:text-gray-400 " aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                                    d="M10 12v1h4v-1m4 7H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1ZM4 5h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                            </svg>

                            <span class="flex-1 ml-3 text-left whitespace-nowrap">Archive</span>
                        </button>
                    </li>

                    <!-- recently deleted -->
                    <li>
                        <button type="button"
                            class="flex items-center px-4 py-2 w-full text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                            <!-- aria-controls="sort" data-collapse-toggle="sort" -->
                            <!-- <svg class="w-5 h-5 text-gray-500  dark:text-gray-400 " aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                                d="M10 12v1h4v-1m4 7H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1ZM4 5h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                        </svg> -->
                            <svg class="w-5 h-5 text-gray-500  dark:text-gray-400 " aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                            </svg>

                            <span class="flex-1 ml-3 text-left whitespace-nowrap">Trash</span>
                        </button>
                    </li>

                </ul>
            </div>
        </section>

    </div>
</template>

<script setup>
import add_new_post_component from '@/components/admin/post/add_new_post_content.vue'

// export default {
//     name: 'manage_post_component',

//     components: {
//         add_new_post_component,
//     }
// }
</script>
