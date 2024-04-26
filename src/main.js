import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import PrimeVue from "primevue/config";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Card from "primevue/card";


import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

createApp(App)
    .use(PrimeVue, {ripple: true})
    .component('pv-toolbar',Toolbar)
    .component('pv-button', Button)
    .component('pv-input-text', InputText)
    .component('pv-card', Card)
    .mount('#app')
