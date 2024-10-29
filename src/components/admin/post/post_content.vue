<template>
    <div class=" flex  dark:bg-gray-800 dark:text-white text-base p-4 md:p-6 lg:p-8">

        <!-- modals -->
        <edit_post_component />
        <delete_post_component />

        <!-- Manage -->
        <manage_post_component />

        <!-- contents -->
        <div class=" flex flex-col mx-auto xl:mx-4 sm:w-3/4 lg:w-4/5 xl:w-full  ">
            <div class="text-2xl font-semibold mb-4 hidden xl:flex">
                Post
            </div>

            <div>
                <!-- mini navigation -->
                <div
                    class=" w-full rounded mb-4 flex items-center justify-center xl:hidden p-4 xl:p-0 bg-white dark:bg-gray-700 xl:bg-none border border-gray-300 dark:border-gray-500 xl:border-none ">
                    <!-- manage -->
                    <button
                        class="w-auto text-gray-900 rounded bg-white dark:bg-gray-500 dark:text-white group shadow text-sm px-4 py-2  flex items-center justify-center"
                        data-dropdown-toggle="dropdown-adjustments">

                        <svg class="w-4 h-4  transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white md:me-1"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4" />
                        </svg>

                        <span class="hidden md:flex">
                            Manage
                        </span>
                    </button>
                    <div id="dropdown-adjustments"
                        class="z-40 hidden list-none border dark:border-gray-500 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                        <ul class="py-1 divide-y dark:divide-gray-600 " role="none">
                            <!-- filter -->
                            <li>
                                <div class="">
                                    <!-- Dropdown -->
                                    <button
                                        class=" text-gray-900 rounded bg-white dark:bg-gray-700 dark:text-white group shadow  text-sm px-4 py-2  flex items-center justify-center"
                                        data-dropdown-toggle="dropdown-filter" data-dropdown-placement="right-start">
                                        <svg class="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white me-1"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z" />
                                        </svg>
                                        Filter by:
                                    </button>
                                    <div id="dropdown-filter"
                                        class="z-50 hidden list-none border dark:border-gray-500 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul class="py-1 divide-y dark:divide-gray-600" role="none">
                                            <li>
                                                <a href="/admin/post/edit"
                                                    class="block px-6 py-1 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    role="menuitem">Edit</a>
                                            </li>
                                            <li>
                                                <a href="/admin/user/settings"
                                                    class="block px-6 py-1 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    role="menuitem">Report</a>
                                            </li>
                                            <li>
                                                <a href="/admin/user/settings"
                                                    class="block px-6 py-1 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    role="menuitem">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <!-- sort -->
                            <li>
                                <div class="">
                                    <!-- Dropdown -->
                                    <button
                                        class=" text-gray-900 rounded bg-white dark:bg-gray-700 dark:text-white group shadow  text-sm px-4 py-2  flex items-center justify-center"
                                        data-dropdown-toggle="dropdown-sort" data-dropdown-placement="right-start">
                                        <svg class="w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white me-1"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                            viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                                        </svg>
                                        Sort by:
                                    </button>
                                    <div id="dropdown-sort"
                                        class="z-50 hidden list-none border dark:border-gray-500 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul class="py-1 divide-y dark:divide-gray-600" role="none">
                                            <li>
                                                <a href="/admin/post/edit"
                                                    class="block px-6 py-1 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    role="menuitem">Edit</a>
                                            </li>
                                            <li>
                                                <a href="/admin/user/settings"
                                                    class="block px-6 py-1 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    role="menuitem">Report</a>
                                            </li>
                                            <li>
                                                <a href="/admin/user/settings"
                                                    class="block px-6 py-1 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    role="menuitem">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <!-- search -->
                    <form class="w-full mx-2">
                        <label for="default-search"
                            class="mb- text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative flex items-center justify-center ">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search"
                                class="block w-full overflow-hidden py-1.5 ps-10 text-sm text-gray-900 border border-gray-300 dark:border-gray-500 rounded bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search..." required />

                            <button type="submit"
                                class="text-white absolute end-0 bottom-0 h-full dark:bg-gray-500  hover:bg-gray-600 font-medium text-sm px-4 rounded">
                                <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                        d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                                </svg>
                            </button>
                        </div>
                    </form>

                    <!-- add -->
                    <button data-modal-target="add-new-post-modal" data-modal-toggle="add-new-post-modal"
                        class="w-auto text-nowrap text-white bg-blue-500 hover:bg-blue-600 focus:outline-none text-sm rounded group shadow px-4 py-2  flex items-center justify-center "
                        type="button">
                        <svg class="w-4 h-4 text-white transition duration-75 md:me-1" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 12h14m-7 7V5" />
                        </svg>
                        <span class="hidden md:flex">
                            New Post
                        </span>
                    </button>
                </div>

                <!-- Posts -->
                <div
                    class="bg-white dark:bg-gray-700 w-full p-5 rounded mb-4 shadow border border-gray-300 dark:border-gray-500">
                    <!-- Header -->
                    <div class="flex items-center justify-between">
                        <div class="flex gap-3">
                            <img src="../../../../public/img/naujan-lgu-logo.png" class="h-11 w-11" alt="Logo">
                            <div class="flex flex-col">
                                <p class="font-semibold">MDRRMO</p>
                                <span class="text-sm text-gray-500 dark:text-gray-400">date</span>
                            </div>
                        </div>
                        <!-- Dropdown -->
                        <button class="hover:bg-gray-200 dark:hover:bg-gray-500 rounded-full"
                            data-dropdown-toggle="dropdown-edit">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                    d="M6 12h.01m6 0h.01m5.99 0h.01" />
                            </svg>
                        </button>
                        <div id="dropdown-edit"
                            class="z-40 hidden list-none border dark:border-gray-500 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-1 divide-y dark:divide-gray-600" role="none">
                                <!-- edit post -->
                                <li>
                                    <button type="button"
                                        class="flex items-center px-4 py-2 w-full text-sm text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                                        data-modal-target="edit_post_modal" data-modal-toggle="edit_post_modal">
                                        <svg class="w-5 h-5 text-gray-500  dark:text-gray-400 mr-2" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                            viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                        </svg>
                                        Edit post
                                    </button>
                                </li>
                                <!-- archive -->
                                <li>
                                    <button type="button"
                                        class="flex items-center px-4 py-2 w-full text-sm text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600">
                                        <svg class="w-5 h-5 text-gray-500  dark:text-gray-400 mr-2" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                            viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                                                d="M10 12v1h4v-1m4 7H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1ZM4 5h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                                        </svg>
                                        Archive
                                    </button>
                                </li>
                                <!-- delete -->
                                <li>
                                    <button type="button"
                                        class="flex items-center px-4 py-2 w-full text-sm text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                                        data-modal-target="delete_post_modal" data-modal-toggle="delete_post_modal">
                                        <svg class="w-5 h-5 text-gray-500  dark:text-gray-400 mr-2" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                            viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                                        </svg>
                                        Delete
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="flex my-4 flex-col">
                        <div class="text-xl md:text-2xl font-bold mb-2">{{ props.postTitle }}</div>

                        <!-- description -->
                        <div
                            class="text-sm flex flex-col items-center text-justify mb-4 text-gray-700 dark:text-gray-300">
                            <span ref="descriptionRef" :class="isExpandedDesc ? '' : 'line-clamp-3'">
                                {{ props.postContent }}
                            </span>

                            <button v-if="isTruncatedDesc" @click="toggleExpandDesc"
                                class="text-gray-500 dark:text-white bg-gray-100 dark:bg-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600 w-full p-2 mt-3 rounded-full focus:outline-none mb-2">
                                {{ isExpandedDesc ? 'Show less' : 'See details' }}
                            </button>
                        </div>

                        <!-- Photo -->
                        <div :class="isExpandedPic ? 'flex flex-wrap' : 'flex flex-wrap justify-between'">
                            <div v-for="(photo, index) in displayedPhotos" :key="index"
                                class="relative w-1/2 lg:w-1/4 p-1">

                                <!-- Photo -->
                                <img :src="photo" alt="photo" class="w-full h-full object-cover cursor-pointer rounded"
                                    @click="openLightbox(index)" />

                                <!-- Show "+x" overlay on the last (4th) photo if there are more than 4 photos and not expanded -->
                                <div v-if="index === 3 && extraPhotos > 0 && !isExpandedPic"
                                    class="absolute inset-1 rounded bg-black dark:bg-gray-900 dark:bg-opacity-50 bg-opacity-50 flex items-center justify-center cursor-pointer"
                                    @click="toggleExpandPic">
                                    <span class="text-white text-2xl font-bold">+{{ extraPhotos }}</span>
                                </div>
                            </div>

                            <div v-if="isExpandedPic" class="w-full flex flex-wrap justify-between">
                                <div v-for="(photo, index) in remainingPhotos" :key="index + 4"
                                    class="w-1/2 lg:w-1/4 p-1">
                                    <img :src="photo" alt="photo" class="w-full h-full object-cover mb-2"
                                        @click="openLightbox(index + 4)" />
                                </div>
                            </div>
                        </div>

                        <!-- lightbox modal -->
                        <div v-if="isLightboxOpen"
                            class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                            <button @click="closeLightbox" class="absolute top-4 right-4 text-white text-2xl"><svg
                                    class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                </svg>
                            </button>
                            <button @click="prevPhoto"
                                class="absolute left-40 top-1/2 transform -translate-y-1/2 text-white text-3xl px-4">‹</button>
                            <button @click="nextPhoto"
                                class="absolute right-40 top-1/2 transform -translate-y-1/2 text-white text-3xl px-4">›</button>

                            <div class="relative">
                                <img :src="photos[lightboxIndex]" class="w-auto max-h-screen object-contain"
                                    alt="Photo" />
                            </div>
                        </div>

                        <!-- show less btn -->
                        <div v-if="isExpandedPic">
                            <button @click="toggleExpandPic"
                                class="text-sm text-gray-500 dark:text-white bg-gray-100 dark:bg-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600 w-full p-2 mt-3 rounded-full focus:outline-none mb-2">
                                Show less
                            </button>
                        </div>

                        <!-- map -->
                        <div class=" mt-4 z-0">
                            <h2 class="font-bold text-xl md:text-2xl mb-2">Location</h2>
                            <div class="text-base mb-4 text-gray-700 dark:text-gray-300">
                                Coordinates: <span class="font-semibold dark:text-white">({{ props.locationLat }}, {{ props.locationLng }})</span>
                            </div>
                            <div
                                class="map-container h-[300px] md:h-[400px] flex rounded overflow-hidden border border-gray-300 dark:border-gray-500">
                                <l-map :zoom="mapSettings.zoom" :center="mapSettings.center"
                                    style="height: 100%; width: 100%;">
                                    <l-tile-layer :url="mapSettings.tileLayer" :attribution="mapSettings.attribution" />
                                    <l-marker :lat-lng="[props.locationLat, props.locationLng]" />
                                </l-map>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- notification -->
        <notification_component />

    </div>
</template>

<script setup>
// imports
import { ref, reactive, onMounted, onBeforeUnmount, computed, nextTick, defineProps } from 'vue';
import { LMap, LTileLayer, LMarker } from "vue3-leaflet";
import "leaflet/dist/leaflet.css";
import manage_post_component from '@/components/admin/post/manage_post_content.vue';
import notification_component from '@/components/admin/post/notification_content.vue';
import edit_post_component from '@/components/admin/post/edit_post_content.vue';
import delete_post_component from '@/components/admin/post/delete_post_content.vue';

// props or default value
const props = defineProps({
    postTitle: {
        type: String,
        default: 'Title',
    },
    postContent: {
        type: String,
        default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta quis maxime fuga facere itaque? Nostrum, illum hic! Rerum fugiat facilis excepturi numquam repudiandae iure, cupiditate eius commodi adipisci quam!",
    },
    locationLat: {
        type: Number,
        default: 13.2376,
    },
    locationLng: {
        type: Number,
        default: 121.2397,
    },
});

// variables
const isExpandedDesc = ref(false);
const isTruncatedDesc = ref(false);
const isExpandedPic = ref(false);
const isLightboxOpen = ref(false);
const lightboxIndex = ref(0);
const descriptionRef = ref(null);

const photos = reactive([
    'https://via.placeholder.com/800',
    'https://via.placeholder.com/600',
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/400',
]);

const mapSettings = reactive({
    zoom: 13,
    center: [props.locationLat, props.locationLng],
    tileLayer: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: '&copy; OpenStreetMap contributors',
});

// functions
// this is for the show more/show less button when text are truncated
onMounted(() => {
    checkDescTruncated();
    window.addEventListener('resize', checkDescTruncated);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', checkDescTruncated);
});

// this is for photos
const displayedPhotos = computed(() => (isExpandedPic.value ? photos : photos.slice(0, 4)));
const extraPhotos = computed(() => (photos.length > 4 ? photos.length - 4 : 0));
const remainingPhotos = computed(() => (isExpandedPic.value ? photos.slice(photos.length) : []));

function toggleExpandDesc() {
    isExpandedDesc.value = !isExpandedDesc.value;
}

function checkDescTruncated() {
    nextTick(() => {
        const description = descriptionRef.value;
        if (description) {
            isTruncatedDesc.value = description.scrollHeight > description.clientHeight;
        }
    });
}

function toggleExpandPic() {
    isExpandedPic.value = !isExpandedPic.value;
}

function openLightbox(index) {
    lightboxIndex.value = index;
    isLightboxOpen.value = true;
}

function closeLightbox() {
    isLightboxOpen.value = false;
}

function nextPhoto() {
    lightboxIndex.value = (lightboxIndex.value + 1) % photos.length;
}

function prevPhoto() {
    lightboxIndex.value = (lightboxIndex.value - 1 + photos.length) % photos.length;
}
</script>




<!-- <script>

import { LMap, LTileLayer, LMarker } from "vue3-leaflet";
import "leaflet/dist/leaflet.css";
import manage_post_component from '@/components/admin/post/manage_post_content.vue';
import notification_component from '@/components/admin/post/notification_content.vue';
import edit_post_component from '@/components/admin/post/edit_post_content.vue';
import delete_post_component from '@/components/admin/post/delete_post_content.vue';

export default {
    components: {
        LMap,
        LTileLayer,
        LMarker,
        manage_post_component,
        notification_component,
        edit_post_component,
        delete_post_component
    },


    props: {
        // post
        postTitle: {
            type: String,
            default: 'Title',
        },
        postContent: {
            type: String,
            default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta quis maxime fuga facere itaque? Nostrum, illum hic! Rerum fugiat facilis excepturi numquam repudiandae iure, cupiditate eius commodi adipisci quam!",
        },

        // map
        locationLat: {
            type: Number,
            default: 13.2376,
        },
        locationLng: {
            type: Number,
            default: 121.2397
        },

        // photos
        // photos: {
        //     type: Array,
        //     default: () => []
        // },
    },

    data() {
        return {
            // Description state
            isExpandedDesc: false,
            isTruncatedDesc: false,

            // Photo state
            isExpandedPic: false,
            photos: [
                'https://via.placeholder.com/800',
                'https://via.placeholder.com/600',
                'https://via.placeholder.com/400',
                'https://via.placeholder.com/400',
                'https://via.placeholder.com/400',
            ],
            isLightboxOpen: false,
            lightboxIndex: 0,

            zoom: 13,
            center: [13.2376, 121.2397],
            tileLayer: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            selectedLocation: null,

        };
    },

    // photo
    mounted() {
        this.checkDescTruncated();
        window.addEventListener('resize', this.checkDescTruncated);
    },

    beforeUnmount() {
        window.removeEventListener('resize', this.checkDescTruncated);
    },

    computed: {
        displayedPhotos() {
            return this.isExpandedPic ? this.photos : this.photos.slice(0, 4);
        },
        extraPhotos() {
            return this.photos.length > 4 ? this.photos.length - 4 : 0;
        },
        remainingPhotos() {
            return this.isExpandedPic ? this.photos.slice(this.photos.length) : [];
        }
    },

    methods: {
        // description
        toggleExpandDesc() {
            this.isExpandedDesc = !this.isExpandedDesc;
        },
        checkDescTruncated() {
            this.$nextTick(() => {
                const description = this.$refs.descriptionRef;
                if (description) {
                    this.isTruncatedDesc = description.scrollHeight > description.clientHeight;
                }
            });
        },

        // photo
        toggleExpandPic() {
            this.isExpandedPic = !this.isExpandedPic;
        },

        // Lightbox methods
        openLightbox(index) {
            this.lightboxIndex = index;
            this.isLightboxOpen = true;
        },
        closeLightbox() {
            this.isLightboxOpen = false;
        },
        nextPhoto() {
            if (this.lightboxIndex < this.photos.length - 1) {
                this.lightboxIndex++;
            } else {
                this.lightboxIndex = 0;
            }
        },
        prevPhoto() {
            if (this.lightboxIndex > 0) {
                this.lightboxIndex--;
            } else {
                this.lightboxIndex = this.photos.length - 1;
            }
        },
    }
};
</script> -->