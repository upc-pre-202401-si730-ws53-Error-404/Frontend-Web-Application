import { createRouter, createWebHistory } from 'vue-router';
import CropListAndRegistrationManagementComponent
    from "../crops/pages/crop-list-and-registration-management.component.vue";
import myQueriesComponent from "../crops/pages/my-queries.component.vue";
import ControlPanelPageComponent from "../public/pages/control-panel/components/control-panel-page.component.vue";

function StaticalCardComponent() {

}

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