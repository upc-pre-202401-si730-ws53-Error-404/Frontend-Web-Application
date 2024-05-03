<template>
  <div>
    <pv-card class="green-background padded-card">
      <template #header>
        <h2>Most registered crops in the app</h2>
      </template>
      <template #content>
        <apexchart type="bar" :options="chartOptions" :series="series"></apexchart>
        <button @click="showInfo = !showInfo">Wanna know more?</button>
        <div v-if="showInfo">
          <h3>Most registered crop</h3>
          <p>{{ mostRegisteredCrop }}</p>
        </div>
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
      showInfo: false,
      mostRegisteredCrop: '',
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
      this.mostRegisteredCrop = this.chartOptions.xaxis.categories[0]; // Asume que el cultivo más registrado es el primero en la lista
    });
  },
};
</script>

<style scoped>
h2 {
  color: #000000;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
}

.green-background {
  background-color: #005f40;
}

.padded-card {
  padding: 20px; /* Ajusta este valor según tus necesidades */
}

button {
  display: block;
  margin: 20px auto;
}
</style>