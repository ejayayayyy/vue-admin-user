import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/tailwind.css';
import 'flowbite';
import 'vue-chartjs';
import 'chart.js'  
import 'leaflet/dist/leaflet.css'; 
import "quill/dist/quill.core.css";
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';


const app = createApp(App);
app.use(router);
app.mount('#app');

