import { createRouter, createWebHistory } from 'vue-router';

import StaticalCardComponent from "../statical-reports/components/statical-card.component.vue";
import ControlPanelPageComponent from "../statics-control-management/pages/control-panel/components/control-panel-page.component.vue";

const routes = [
    { path: '/statical-reports', component: StaticalCardComponent },
    { path: '/', component: ControlPanelPageComponent }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;