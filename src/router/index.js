import { createRouter, createWebHistory } from 'vue-router';

import StaticalCardComponent from "../crops/components/statistics-card.component.vue";
import ControlPanelPageComponent from "../public/pages/control-panel/components/control-panel-page.component.vue";
import CropListAndRegistrationManagementComponent
    from "../crops/pages/crop-list-and-registration-management.component.vue";
import HistoryTableComponent from "../crops/components/history-table.component.vue";

const routes = [
    { path: '/sowing-statistics-reports', component: StaticalCardComponent },
    {path: '/control-panel', component: ControlPanelPageComponent},
    {path:'/crop-list-and-registration',component: CropListAndRegistrationManagementComponent},
    { path: '/', redirect: '/control-panel'},
    { path: '/crop-history', component: HistoryTableComponent }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;