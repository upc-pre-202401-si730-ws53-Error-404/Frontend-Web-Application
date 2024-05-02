<template>
  <div style="height: 400px; width: 400px">
    <Pie v-if="loaded" :data="chartData" :options="options" />
  </div>
</template>


<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import { CropsByUserApiService } from "../services/crops-by-user-api.service.js";
ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'pie-chart-crops',
  components: {
    Pie
  },
  data: () => ({
    loaded: false,
    chartData: null,
    cropsByUserApi: new CropsByUserApiService(),
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  async mounted() {
    this.loaded = false;
    try {
      const response = await this.cropsByUserApi.getAllCrops();
      console.log(response)
      const crops = response.data.crops;
      console.log(crops)// Asumiendo que `crops` es el array que necesitas.
      this.chartData = {
        labels: crops.map(crop => crop.name),
        datasets: [{
          label: 'Percentage',
          data: crops.map(crop => crop.percentage),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverOffset: 4
        }]
      };
      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  }
}
</script>
