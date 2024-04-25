import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import PrimeVue from "primevue/config";
import Toolbar from "primevue/toolbar";

createApp(App)
    .use(PrimeVue, {ripple: true})
    .component('pv-toolbar',Toolbar)
    .mount('#app')
