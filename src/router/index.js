import { createRouter, createWebHistory } from 'vue-router';

import myQueriesComponent from "../forum/pages/my-queries.component.vue";
import CropsStatisticsComponent from "../crops/pages/crops-statistics.component.vue";
import ControlPanelPageComponent from "../public/pages/control-panel/components/control-panel-page.component.vue";
import CropInformationManagementComponent from "../crops/pages/crop-information-management.component.vue";
import CropListAndRegistrationManagementComponent from "../crops/pages/crop-list-and-registration-management.component.vue";
import HistoryTableComponent from "../crops/components/history-table.component.vue";


const routes = [
    { path: '/sowing-statistics-reports', component: CropsStatisticsComponent },
    { path: '/control-panel', component: ControlPanelPageComponent},
    { path:'/crop-list-and-registration',component: CropListAndRegistrationManagementComponent},
    { path: '/crop-information/:id', name: 'crop-information', component: CropInformationManagementComponent},
    { path: '/', redirect: '/control-panel'},
    { path: '/crop-history', component: HistoryTableComponent },
    { path: '/consultation-forum',component: myQueriesComponent }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;