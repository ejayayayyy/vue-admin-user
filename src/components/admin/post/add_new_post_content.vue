<template>
    <!-- Add New Post Modal -->
    <div id="add-new-post-modal" tabindex="-1" aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[100] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-3xl max-h-full">
            <!-- modal -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-center p-4 md:p-5 border-b rounded-t dark:border-gray-500">
                    <img class="w-10 h-10 rounded-full mr-3" src="../../../../public/img/naujan-lgu-logo.png"
                        alt="Profile Picture">

                    <div>
                        <h3 class="text-base font-semibold text-gray-900 dark:text-white">MDRRMO</h3>
                    </div>

                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="add-new-post-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path>
                        </svg>

                        <span class="sr-only">Close modal</span>
                    </button>
                </div>

                <!-- add new post modal -->
                <div class="p-4 md:p-5 space-y-4">
                    <form @submit.prevent="submitForm">
                        <div class="flex flex-col space-y-1">
                            <!-- title -->
                            <input type="text" id="title" v-model="post.newTitle"
                                class="bg-gray-50 dark:text-white dark:placeholder:text-gray-300  dark:bg-gray-600 border border-gray-300 dark:border-gray-500 text-gray-900 text-sm rounded block w-full p-2.5 mb-4"
                                placeholder="Enter your post title">
                            <!-- content -->

                            <!-- <textarea id="content" v-model="post.newContent"
                                class="bg-gray-50 dark:text-white dark:bg-gray-600 dark:placeholder:text-gray-300 dark:border-gray-500 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5 h-40 mb-4"
                                rows="3" cols="3" style="resize: none;" placeholder="Enter your report" required>
                                </textarea> -->

                            <!-- Content Section - Quill Editor -->
                            <div>
                                <div style="height: 100%; width: 100%;"
                                    class=" bg-gray-50 dark:text-white dark:bg-gray-600 dark:placeholder:text-gray-300 dark:border-gray-500 border border-gray-300 text-gray-900 text-sm rounded block w-full mb-4">
                                    <quill-editor  v-model="post.newContent" 
                                        class="z-10" :options="editorOptions" />
                                </div>
                            </div>


                        </div>

                        <hr class="bg-gray-600 my-4">

                        <div
                            class="flex items-center justify-between  rounded bg-gray-50 dark:bg-gray-600 border border-gray-300 dark:border-gray-500 px-4 py-2 mb-4">
                            <div class="flex items-center justify-between w-full">
                                <span class="text-base font-semibold text-gray-500 dark:text-gray-300">
                                    Additional information
                                </span>

                                <div class="flex space-x-1">
                                    <!-- add photo -->
                                    <input type="file" @change="handleNewPhotoUpload" multiple
                                        accept="image/*" class="hidden" ref="photoInput">
                                    <button type="button" @click="triggerPhotoUpload"
                                        class="text-gray-600 dark:text-gray-300 hover:text-blue-500 flex items-center justify-center p-2 rounded-full
                                        hover:bg-gray-300 dark:hover:bg-gray-500">
                                        <img class="w-6 h-6" src="https://img.icons8.com/fluency/48/add-image.png"
                                            alt="Add Photos">
                                    </button>

                                    <!-- add location -->
                                    <button type="button" @click="toggleMap"
                                        class="text-gray-800 dark:text-gray-300 hover:text-blue-500 flex items-center justify-center p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500">
                                        <img class="w-6 h-6" src="https://img.icons8.com/color/48/marker--v1.png"
                                            alt="Add Location">
                                    </button>
                                </div>

                            </div>
                        </div>

                        <!-- preview for photo -->
                        <div v-if="post.photos.length > 0"
                            class="flex space-x-2 overflow-x-auto rounded border border-gray-300 dark:border-gray-500  bg-gray-50 dark:bg-gray-600 p-2.5 mb-4">
                            <div class="flex flex-nowrap flex-shrink-0 gap-2 z-0">
                                <div v-for="(photo, index) in post.photos" :key="index" class="relative group">
                                    <!-- Preview Image -->
                                    <img :src="photo.previewUrl" class="w-20 h-20 z-0 object-cover rounded">

                                    <!-- Remove Photo Button (X in the top-right corner) -->
                                    <button @click="removePhoto(index)"
                                        class="absolute top-0 right-0 text-white bg-black bg-opacity-50 rounded-full p-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity ">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- preview for location -->
                        <div v-if="showMap" class="h-[300px] rounded overflow-hidden mb-2 ">
                            <l-map v-if="showMap" style="height: 100%;" :zoom="zoom" :center="location"
                                @click="setLocationFromMap">
                                <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
                                <l-marker :lat-lng="location" v-if="location"></l-marker>
                            </l-map>
                        </div>

                        <!-- manual coordinates -->
                        <div v-if="showMap" class="flex flex-col ">
                            <label class="block text-gray-500 dark:text-gray-300 text-sm mb-2">Enter Coordinates</label>
                            <div class="flex space-x-2 w-full ">
                                <input v-model="latitude" type="number" step="any" placeholder="Latitude"
                                    class="w-full p-2.5 border rounded text-sm bg-gray-50 dark:placeholder:text-gray-300  dark:bg-gray-600 border-gray-300 dark:border-gray-500">
                                <input v-model="longitude" type="number" step="any" placeholder="Longitude"
                                    class="w-full p-2.5 border rounded text-sm bg-gray-50 dark:placeholder:text-gray-300  dark:bg-gray-600 border-gray-300 dark:border-gray-500 ">
                            </div>
                            <button @click="setLocationFromInput" type="button"
                                class="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2  rounded text-sm">
                                Pin Location
                            </button>
                        </div>

                        <!-- Submit -->
                        <div class="flex items-center justify-center sm:justify-end mt-8 space-x-2 border-t pt-4 ">
                            <button type="button"
                                class="bg-gray-200 dark:bg-gray-500 dark:hover:bg-gray-600 text-dark hover:bg-gray-300 px-4 py-2 rounded"
                                data-modal-hide="add-new-post-modal">
                                Discard
                            </button>
                            <button
                                class="w-full sm:w-auto text-white bg-blue-500 hover:bg-blue-600 focus:outline-none text-sm rounded group shadow px-4 py-2 sm:text-base flex items-center justify-center"
                                @click="logContent">
                                Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { LMap, LTileLayer, LMarker } from "vue3-leaflet";
import "leaflet/dist/leaflet.css";
import { quillEditor } from 'vue3-quill';


const post = reactive({
    newTitle: '',
    newContent: '',
    photos: [],
    location: null,
});

const photoInput = ref(null);

const zoom = ref(13);
const latitude = ref(null);
const longitude = ref(null);
const location = ref([13.736717, 100.523186]);
const showMap = ref(false);

// Text editor settings
const editorTheme = ref('snow');
const editorOptions = reactive({
    theme: 'snow',
    modules: {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }], 
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }], // text direction
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['clean'],
        ]
    }
});

onMounted(() => {
    updateEditorTheme();
    window.addEventListener('resize', updateEditorTheme);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateEditorTheme);
});


// Methods
function logContent() {
    console.log(post.newContent);
}

// Photo handling methods
function triggerPhotoUpload() {
    if (photoInput.value) {
        photoInput.value.click();
    }
}

function handleNewPhotoUpload(event) {
    const files = Array.from(event.target.files);
    const photoPreviews = files.map(file => ({
        file,
        previewUrl: URL.createObjectURL(file)
    }));

    post.photos = [...post.photos, ...photoPreviews];
}

function removePhoto(index) {
    // post.photos.splice(index, 1);
    post.photos = post.photos.filter((_, photoIndex) => photoIndex !==index) 
}

// Map handling methods
function toggleMap() {
    showMap.value = !showMap.value;
}

function setLocationFromMap(event) {
    const { lat, lng } = event.latlng;
    latitude.value = lat;
    longitude.value = lng;
    location.value = [lat, lng];
}

function setLocationFromInput() {
    if (latitude.value && longitude.value) {
        location.value = [parseFloat(latitude.value), parseFloat(longitude.value)];
    }
}

// Text editor responsive theme update
function updateEditorTheme() {

    editorTheme.value = window.matchMedia('(max-width: 640px)').matches ? 'bubble' : 'snow'
    editorOptions.theme = editorTheme.value;
}

function submitForm() {
    console.log(post);

    post.newTitle = '';
    post.newContent = '';
    post.photos = [];
    latitude.value = null;
    longitude.value = null;
}
</script>



<!-- <script>
import { LMap, LTileLayer, LMarker } from "vue3-leaflet";
import "leaflet/dist/leaflet.css";
import { quillEditor } from 'vue3-quill';

export default {
    name: 'add_new_post_component',

    components: {
        LMap,
        LTileLayer,
        LMarker,
        quillEditor
    },

    data() {
        return {
            post: {
                newTitle: '',
                newContent: '',
                photos: [],
                location: null,
            },

            // photo
            lightboxIndex: 0,
            isLightboxOpen: false,

            // location
            zoom: 13,
            latitude: null,
            longitude: null,
            location: [13.736717, 100.523186],
            showMap: false,

            // text editor
            editorTheme: 'snow',
            editorKey: 0,
            editorOptions: {
                theme: 'snow', // Can be 'snow' or 'bubble'
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                        ['blockquote', 'code-block'],

                        [{ 'header': 1 }, { 'header': 2 }], // custom button values
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
                        [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
                        [{ 'direction': 'rtl' }], // text direction

                        [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                        [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
                        [{ 'font': [] }],
                        [{ 'align': [] }],

                        ['clean'], // remove formatting button
                    ]
                }
            }
        };
    },

    // text editor responsive
    mounted() {
        this.updateEditorTheme();
        window.addEventListener('resize', this.updateEditorTheme);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateEditorTheme);
    },



    computed: {
        displayedPhotos() {
            return this.post.photos.slice(0, 4);
        },

        extraPhotos() {
            return this.post.photos.length - 4;
        }
    },

    methods: {
        logContent() {
            console.log(this.post.newContent);
        },

        // photo
        // trigger input file
        triggerPhotoUpload() {
            this.$refs.photoInput.click();
        },
        // Handle new photo uploads and generate preview URLs
        handleNewPhotoUpload(event) {
            const files = Array.from(event.target.files);
            const photoPreviews = files.map(file => {
                return {
                    file,
                    previewUrl: URL.createObjectURL(file)
                };
            });

            this.post.photos = [...this.post.photos, ...photoPreviews];
        },
        // remove photo
        removePhoto(index) {
            this.post.photos.splice(index, 1);
        },

        // map
        toggleMap() {
            this.showMap = !this.showMap;
        },
        // Set location from map click
        setLocationFromMap(event) {
            const { lat, lng } = event.latlng;
            this.latitude = lat;
            this.longitude = lng;
            this.location = [lat, lng];
        },
        // Set location from manually entered coordinates
        setLocationFromInput() {
            if (this.latitude && this.longitude) {
                this.location = [parseFloat(this.latitude), parseFloat(this.longitude)];
            }
        },

        // text editor
        updateEditorTheme() {
            // sm screen
            if (window.matchMedia('(max-width: 640px)').matches) {
                this.editorTheme = 'bubble';
            } else {
                this.editorTheme = 'snow';
            }

            this.editorOptions = {
                ...this.editorOptions,
                theme: this.editorTheme
            };

            this.editorKey += 1;
        },

        submitForm() {
            console.log(this.post);

            this.post.newTitle = '';
            this.post.newContent = '';
            this.post.photos = [];
            this.latitude = null;
            this.longitude = null;
            this.isModalOpen = false;
        }
    }
}
</script> -->
