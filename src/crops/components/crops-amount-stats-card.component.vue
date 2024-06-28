<script>
import VueApexCharts from 'vue3-apexcharts'
import {StatisticsApiService} from '../services/statistics-api.service.js';

export default {
  name: 'crops-amount-stats-card',
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      showDialog: false,
      statusSowing: null,
      statisticsAPI: null,
      cropsAPI: null,
      mostRegisteredCrop: '',
      chartOptions: {
        chart: {
          type: 'bar'
        },
        colors: ['#F15B46', '#FEB019', '#FEB019', '#8D5B4C', '#F47560'],
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
    this.statisticsAPI = new StatisticsApiService();
    this.cropsAPI =
    this.statusSowing = false;
    this.getAllSowings();
  },
  methods: {
    openDialog() {
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    },
    getAllSowings(){
      this.statisticsAPI.getAllSowings(this.statusSowing).then(response => {
        const sowings = response.data;
        const cropCounts = {};
        console.log(sowings);
        sowings.forEach(sowing => {
          if (sowing.crop_name in cropCounts) {
            cropCounts[sowing.crop_name]++;
          } else {
            cropCounts[sowing.crop_name] = 1;
          }
        });

        this.chartOptions.xaxis.categories = Object.keys(cropCounts);
        this.series[0].data = Object.values(cropCounts);
        console.log(cropCounts);
        this.mostRegisteredCrop = this.chartOptions.xaxis.categories[0];
      });
    }
  }
};
</script>

<template>
  <div class="card-container">
    <pv-card class="bg padded-card">
      <template #header>
        <h2>{{$t('mostRegisteredCrops')}}</h2>
      </template>
      <template #content>
        <apexchart :options="chartOptions" :series="series" type="bar"></apexchart>
        <button @click="openDialog">{{$t('wannaKnowMore')}}</button>
      </template>
    </pv-card>
    <div v-if="showDialog" class="dialog-overlay">
      <div class="dialog">
        <h3>{{$t('wannaKnowMore')}}</h3>
        <p>{{ mostRegisteredCrop }}</p>
        <button @click="closeDialog">{{$t('close')}}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-between;
}

h2 {
  color: #ffff;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
}

.bg {
  background-color: #005f40;
}

.padded-card {
  margin-top: 40px;
  margin-left: 40px;
  padding: 20px;
  border-radius: 15px;
}

button {
  display: block;
  background-color: white;
  color: black;
  margin: auto;
  border: 2px solid black;
}

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog {
  background: white;
  color: black;
  padding: 20px;
  border-radius: 5px;
}
</style>