import { createRouter, createWebHistory } from 'vue-router';

import StaticalCardComponent from "../crops/components/crops-amount-stats-card.component.vue";
import CropsStatisticsComponent from "../crops/pages/crops-statistics.component.vue";
import ControlPanelPageComponent from "../public/pages/control-panel/components/control-panel-page.component.vue";
import CropListAndRegistrationManagementComponent
    from "../crops/pages/crop-list-and-registration-management.component.vue";

const routes = [
    { path: '/sowing-statistics-reports', component: CropsStatisticsComponent },
    {path: '/control-panel', component: ControlPanelPageComponent},
    {path:'/crop-list-and-registration',component: CropListAndRegistrationManagementComponent},
    { path: '/', redirect: '/control-panel'}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;