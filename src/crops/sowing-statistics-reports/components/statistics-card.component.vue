<template>
  <div>
    <pv-card>
      <template #header>
        <h2>Most registered crops in the app</h2>
      </template>
      <template #content>
        <apexchart type="bar" :options="chartOptions" :series="series"></apexchart>
      </template>
    </pv-card>
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'
import { StatisticsApiService } from '../services/statistics-api.service.js';

export default {
  name: 'BarChart',
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'bar'
        },
        colors: ['#F15B46', '#FEB019', '#FEB019', '#8D5B4C', '#F47560'], // Define los colores de las barras
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [],
        },
        tooltip: {
          style: {
            colors: ['#ff0000']
          }
        }
      },
      series: [{
        data: []
      }],
    };
  },
  created() {
    const statisticsAPI = new StatisticsApiService();
    statisticsAPI.getAllSowings().then(response => {
      const sowings = response.data;
      const cropCounts = {};

      sowings.forEach(sowing => {
        if (sowing.crop_name in cropCounts) {
          cropCounts[sowing.crop_name]++;
        } else {
          cropCounts[sowing.crop_name] = 1;
        }
      });

      this.chartOptions.xaxis.categories = Object.keys(cropCounts);
      this.series[0].data = Object.values(cropCounts);
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