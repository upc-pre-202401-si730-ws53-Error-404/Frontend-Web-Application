<script>
import {SowingsApiService} from "../services/sowings-api.service.js";
import {Sowing} from "../models/sowing.entity.js";
import {FilterMatchMode} from "primevue/api";

export default {
  name: 'crop-history',
  components: {
    SowingHistoryCard: () => import('./sowing-history-card.component.vue')
  },
  data(){
    return{
      sowings:[],
      sowing:{},
      selectedSowing:{},
      selectedSowingDetailsVisible: false,
      filters:{},
      cropsService: null,
      sowingService: null,
      createAndEditDialogIsVisible: false,
      isEdit: false,
      submitted: false
    }
  },
  methods:{
    initFilters() {
      this.filters = {global: {value: null, matchMode: FilterMatchMode.CONTAINS}};
    },
    showSowingDetails(sowing) {
      if (sowing && sowing.id) {
        this.selectedSowing = sowing;
        this.selectedSowingDetailsVisible = true;
      }
    },
  },
  created(){
    this.sowingService = new SowingsApiService();

    this.sowingService.getAll()
        .then((response) => {
          let data;
          try {
            data = JSON.parse(response.data);
          } catch (error) {
            console.error('Error parsing response.data:', error);
            return;
          }
          console.log('Type of data:', typeof data);
          console.log('Content of data:', data);
          if (Array.isArray(data)) {
            let sowings = data;
            Promise.all(sowings.map((sowing) => Sowing.toDisplayableSowing(sowing)))
                .then((displayableSowings) => {
                  this.sowings = displayableSowings;
                })
                .catch((error) => {
                  console.error('Error converting sowings to displayable format:', error);
                });
          } else {
            console.error('Error: data is not an array');
          }
        });
    this.initFilters();
  }
}
</script>
<template>
  <div>
    <h1 class="title"> Crop History</h1>
    <pv-data-table
        class="table-margin"
        ref="dt"
        :value="sowings"
        v-model:selection="selectedSowing"
        dataKey="id" selectionMode="single"
        :paginator="true"
        :rows="5"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5,10,25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
      <template #header>
        <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
          <pv-icon-field iconPosition="left">
            <pv-input-icon>
              <i class="pi pi-search" />
            </pv-input-icon>
            <pv-input-text v-model="filters['global'].value" placeholder="Search..." />
          </pv-icon-field>
        </div>
      </template>
      <pv-column field="crop_name" header="Crop" style="min-width:12rem"></pv-column>
      <pv-column field="start_date" header="Planted Date" style="min-width:16rem"></pv-column>
      <pv-column field="harvest_date" header="Harvest Date" style="min-width:16rem"></pv-column>
      <pv-column header="View record" style="min-width:12rem">
        <template #body="slotProps">
          <pv-button class="green-button" label="See" @click="showSowingDetails(slotProps.data)" />
        </template>
      </pv-column>
    </pv-data-table>
    <sowing-history-card :sowingId="selectedSowing.id" v-model:visible="selectedSowingDetailsVisible" />
  </div>
</template>

<style scoped>

</style>