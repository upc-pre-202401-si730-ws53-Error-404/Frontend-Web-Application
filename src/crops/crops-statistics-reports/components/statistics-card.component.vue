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

export default {
  name: 'PieChart',
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        labels: ['Label 1', 'Label 2', 'Label 3'], // Reemplaza esto con tus propias etiquetas
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
      series: [44, 55, 13],
    };
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