import { createRouter, createWebHistory } from 'vue-router';

import myQueriesComponent from "../forum/pages/my-queries.component.vue";
import StaticalCardComponent from "../crops/components/crops-amount-stats-card.component.vue";
import CropsStatisticsComponent from "../crops/pages/crops-statistics.component.vue";
import ControlPanelPageComponent from "../public/pages/control-panel/components/control-panel-page.component.vue";
import CropInformationManagementComponent from "../crops/pages/crop-information-management.component.vue";
import CropListAndRegistrationManagementComponent from "../crops/pages/crop-list-and-registration-management.component.vue";
import GeneralInformationComponent from "../crops/components/general-information.component.vue";
import CropCareComponent from "../crops/components/crop-care.component.vue";
import DiseasesOrPestsComponent from "../crops/components/diseases-or-pests.component.vue";
import ProductsUsedComponent from "../crops/components/products-used.component.vue";
import HistoryTableComponent from "../crops/components/history-table.component.vue";
import ControlsComponent from "../crops/components/controls.component.vue";


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