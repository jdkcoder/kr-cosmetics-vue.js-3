import { createApp } from 'vue';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueSmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App);
app.use(AOS.init()).use(VueSmoothScroll).mount('#app');
