<script>
import CustomTable from "./custom-table.component.vue";
import { SowingsApiService } from '../services/sowings-api.service.js';

export default {
  name: 'Controls',
  components: {CustomTable},
  props: ['sowingId'],
  data() {
    return {
      date: null,
      tableHeaders: ['Date', 'Leave', 'Stem', 'Soil'],
      tableData: []
    };
  },
  created() {
    const sowingsAPI = new SowingsApiService();
    sowingsAPI.getAll().then(response => {
      const sowings = response.data;
      const selectedSowing = sowings.find(sowing => Number(sowing.id) === Number(this.sowingId));
      if (selectedSowing && selectedSowing.controls) {
        this.tableData = selectedSowing.controls.map(control => [control.date, control.leave, control.stem, control.soil]);
      }
    });
  }
};
</script>

<template>
  <div>
    <custom-table class="table" :headers="tableHeaders" :data="tableData" />
  </div>
</template>

<style scoped>
</style>