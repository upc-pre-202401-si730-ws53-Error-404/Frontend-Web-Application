<script>
import VueApexCharts from 'vue3-apexcharts'
import {SowingsApiService} from '../services/sowings-api.service.js';
import {CropsRecomendationApiService} from '../services/crops-recomendation-api.service.js';
import {ControlsApiService} from '../services/controls-api-service.js';

export default {
  name: "controls-by-crop-stats",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      showDialog: false,
      statusSowing: null,
      mostControlledCrop: '',
      chartOptions: {
        chart: {
          type: 'pie'
        },
        labels: [],
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
  async created() {
    const sowingsAPI = new SowingsApiService();
    const cropsAPI = new CropsRecomendationApiService();
    const controlsAPI = new ControlsApiService();

    const sowings = await sowingsAPI.getAll();
    const controlCounts = {};

    for (const sowing of sowings.data) {
      const controls = await controlsAPI.getAllControlsBySowingId(sowing.id);
      const crop = await cropsAPI.getCropById(sowing.cropId);
      const cropName = crop.data.name;

      if (cropName in controlCounts) {
        controlCounts[cropName] += controls.data.length;
      } else {
        controlCounts[cropName] = controls.data.length;
      }
    }

    const mostControlledCrop = Object.keys(controlCounts).reduce((a, b) => controlCounts[a] > controlCounts[b] ? a : b);

    this.mostControlledCrop = mostControlledCrop;
    this.chartOptions.labels = Object.keys(controlCounts);
    this.series = Object.values(controlCounts);
  },
  methods: {
    openDialog() {
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    }
  }
};
</script>

<template>
  <div class="card-container">
    <pv-card class="bg padded-card">
      <template #header>
        <h2>{{$t('mostControlledCrops')}}</h2>
      </template>
      <template #content>
        <apexchart :options="chartOptions" :series="series" type="pie"></apexchart>
        <button @click="openDialog">{{$t('showCropWithMostControls')}}</button>
      </template>
    </pv-card>
    <div v-if="showDialog" class="dialog-overlay">
      <div class="dialog">
        <h3>{{$t('showCropWithMostControls')}}</h3>
        <p>{{ mostControlledCrop }}</p>
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
  margin-top: 25px;
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