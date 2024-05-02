<template>
  <div>
    <pv-card>
      <template #header>
        <h2>Most registered crops in the app</h2>
      </template>
      <template #content>
        <apexchart type="pie" :options="chartOptions" :series="series"></apexchart>
      </template>
    </pv-card>
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'
import { CropApiService } from '../services/crop-api.service.js';

export default {
  name: 'PieChart',
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        labels: [], // Las etiquetas se llenarán con los nombres de los cultivos
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      series: [],
    };
  },
  created() {
    const cropsAPI = new CropApiService();
    cropsAPI.getAll().then(response => {
      const crops = response.data;
      console.log(crops);
      const cropCounts = {};

      crops.forEach(crop => {
        if (crop.name in cropCounts) {
          cropCounts[crop.name]++;
        } else {
          cropCounts[crop.name] = 1;
        }
      });

      this.chartOptions.labels = Object.keys(cropCounts);
      this.series = Object.values(cropCounts);
    });
  },
};
</script>

<style scoped>
h2{
  color: #4CAF50;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
}
</style>