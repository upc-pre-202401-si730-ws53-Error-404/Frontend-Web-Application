import { createRouter, createWebHistory } from 'vue-router';

import myQueriesComponent from "../forum/pages/my-queries.component.vue";
import StaticalCardComponent from "../crops/components/crops-amount-stats-card.component.vue";
import CropsStatisticsComponent from "../crops/pages/crops-statistics.component.vue";
import ControlPanelPageComponent from "../public/pages/control-panel/components/control-panel-page.component.vue";
import CropListAndRegistrationManagementComponent
    from "../crops/pages/crop-list-and-registration-management.component.vue";
import CropInformationManagementComponent from "../crops/pages/crop-information-management.component.vue";
import CropListAndRegistrationManagementComponent from "../crops/pages/crop-list-and-registration-management.component.vue";
import GeneralInformationComponent from "../crops/crop-information/components/general-information.component.vue";
import CropCareComponent from "../crops/crop-information/components/crop-care.component.vue";
import ControlsComponent from "../crops/crop-information/components/controls.component.vue";
import DiseasesOrPestsComponent from "../crops/crop-information/components/diseases-or-pests.component.vue";
import ProductsUsedComponent from "../crops/crop-information/components/products-used.component.vue";
import HistoryTableComponent from "../crops/components/history-table.component.vue";


const routes = [

    { path: '/sowing-statistics-reports', component: CropsStatisticsComponent },
    { path: '/control-panel', component: ControlPanelPageComponent},
    { path:'/crop-list-and-registration',component: CropListAndRegistrationManagementComponent},
    { path: '/crop-information',   component: CropInformationManagementComponent},
    { path: '/', redirect: '/control-panel'},
    { path:'/general-information',component: GeneralInformationComponent},
    { path:'/crop-care',component: CropCareComponent},
    { path:'/controls',component: ControlsComponent},
    { path:'/diseases-or-pests',component: DiseasesOrPestsComponent},
    { path:'/products-used',component: ProductsUsedComponent},
    { path: '/crop-history', component: HistoryTableComponent },
    {path: '/consultation-forum',component: myQueriesComponent}

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;