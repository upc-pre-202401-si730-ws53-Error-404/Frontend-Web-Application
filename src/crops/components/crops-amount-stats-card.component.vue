<script>
import VueApexCharts from 'vue3-apexcharts'
import {SowingsApiService} from '../services/sowings-api.service.js';
import {CropsRecomendationApiService} from '../services/crops-recomendation-api.service.js';

export default {
  name: 'crops-amount-stats-card',
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      showDialog: false,
      statusSowing: null,
      sowingsAPI: null,
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
        name: 'Crops',
        data: []
      }],
    };
  },
  created() {
    this.sowingsAPI = new SowingsApiService();
    this.cropsAPI = new CropsRecomendationApiService();
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
      this.sowingsAPI.getAll().then(response => {
        const sowings = response.data;
        const cropCounts = {};
        sowings.forEach(sowing => {
          if (sowing.cropId in cropCounts) {
            cropCounts[sowing.cropId]++;
          } else {
            cropCounts[sowing.cropId] = 1;
          }
        });

        this.chartOptions.xaxis.categories = Object.keys(cropCounts);
        this.series[0].data = Object.values(cropCounts);

        // Find the crop with the highest count
        let mostRegisteredCropId = '';
        let highestCount = 0;
        for (const cropId in cropCounts) {
          if (cropCounts[cropId] > highestCount) {
            mostRegisteredCropId = cropId;
            highestCount = cropCounts[cropId];
          }
        }

        // Get the name of the most registered crop
        this.cropsAPI.getCropById(mostRegisteredCropId).then(response => {
          this.mostRegisteredCrop = response.data.name;
        });
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