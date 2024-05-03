import { createRouter, createWebHistory } from 'vue-router';
import CropListAndRegistrationManagementComponent
    from "../crops/pages/crop-list-and-registration-management.component.vue";
import StaticalCardComponent from "../statical-reports/components/statical-card.component.vue";
import ControlPanelPageComponent from "../statics-control-management/pages/control-panel/components/control-panel-page.component.vue";
import myQueriesComponent from "../consultation-forum-management/pages/my-queries/my-queries.component.vue";

const routes = [
    { path: '/sowing-statistics-reports', component: StaticalCardComponent },
    {path: '/control-panel', component: ControlPanelPageComponent},
    {path:'/crop-list-and-registration',component: CropListAndRegistrationManagementComponent},
    { path: '/', redirect: '/control-panel'},
    { path: '/statical-reports', component: StaticalCardComponent },
    {path: '/consultation-forum',component: myQueriesComponent},
    { path: '/', component: ControlPanelPageComponent }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;