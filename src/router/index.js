import { createRouter, createWebHistory } from 'vue-router';

import StaticalCardComponent from "../crops/crops-statistics-reports/components/statistics-card.component.vue";
import ControlPanelPageComponent from "../public/pages/control-panel/components/control-panel-page.component.vue";

const routes = [
    { path: '/crops-statistics-reports', component: StaticalCardComponent },
    { path: '/', component: ControlPanelPageComponent }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;