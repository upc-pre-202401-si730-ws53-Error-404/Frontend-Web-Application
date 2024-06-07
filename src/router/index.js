import { createRouter, createWebHistory } from 'vue-router';


import CropsStatisticsComponent from "../crops/pages/crops-statistics.component.vue";
import ControlPanelPageComponent from "../public/pages/control-panel/components/control-panel-page.component.vue";
import CropInformationManagementComponent from "../crops/pages/crop-information-management.component.vue";
import CropListAndRegistrationManagementComponent from "../crops/pages/crop-list-and-registration-management.component.vue";
import HistoryTableComponent from "../crops/components/history-table.component.vue";
import ForumManagementComponent from "../forum/pages/forum-management.component.vue";
import SignInComponent from "../users/components/sign-in.component.vue";


const routes = [
    { path: '/', redirect: '/login'},
    { path: '/login', component: SignInComponent },
    { path: '/sowing-statistics-reports', component: CropsStatisticsComponent },
    { path: '/control-panel', component: ControlPanelPageComponent},
    { path:'/crop-list-and-registration',component: CropListAndRegistrationManagementComponent},
    { path: '/crop-information/:id', name: 'crop-information', component: CropInformationManagementComponent},
    { path: '/crop-history', component: HistoryTableComponent },
    { path: '/consultation-forum',component: ForumManagementComponent }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;