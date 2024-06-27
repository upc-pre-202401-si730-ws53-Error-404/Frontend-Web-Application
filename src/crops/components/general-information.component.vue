<script>
import { SowingsApiService } from "../services/sowings-api.service.js";
import {CropsRecomendationApiService} from "../services/crops-recomendation-api.service.js";

export default {
  name: 'GeneralInformation',
  props: ['sowingId'],
  data() {
    return {
      sowing: null,
      crop: null,
      rows: [],
      sowings: []
    };
  },
  watch: {
    sowingId: {
      immediate: true,
      handler(newVal, oldVal) {
        console.log('sowingId changed from', oldVal, 'to', newVal);
        this.loadSowing();
      }
    }
  },
  methods: {
    async loadSowing() {
      if (!this.sowingId) {
        return;
      }

      const sowingService = new SowingsApiService();
      const cropApiService = new CropsRecomendationApiService();

      try {
        const sowingResponse = await sowingService.getById(this.sowingId);

        if (!sowingResponse || !sowingResponse.data) {
          console.error('Error: Sowing data not found');
          return;
        }

        this.sowing = sowingResponse.data;

        console.log(sowingResponse);
        if (!this.sowing.crop_id) {
          console.error('Error: crop_id is missing in sowing data');
          return;
        }

        const cropResponse = await cropApiService.getCropById(this.sowing.crop_id);

        if (!cropResponse || !cropResponse.data) {
          console.error('Error: Crop data not found');
          return;
        }

        this.crop = cropResponse.data;

        this.rows = [
          ['Crop Name', this.crop ? this.crop.name : 'N/A'],
          ['Date Created', this.sowing.start_date],
          ['Planted Area (m2)', this.sowing.area_land]
        ];

      } catch (error) {
        console.error('Error fetching sowing or crop:', error);
        if (error.response) {
          console.error('Response error:', error.response.data);
        }
      }
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="image-container">
      <img class="crop-image" :src="crop?.imageUrl" alt="Crop Image"/>  <!-- Bind the crop image -->
    </div>
    <div class="labels-container">
      <div class="row" v-for="(row, index) in rows" :key="index">
        <div class="column" v-for="(label, columnIndex) in row" :key="columnIndex"
             :class="{ 'grey-label': columnIndex % 2 === 0, 'green-label': columnIndex % 2 !== 0 }">
          {{ label }}
        </div>
        <div class="separator" v-if="index < rows.length - 1"></div>
      </div>
    </div>
  </div>
  <div class="description">
    <p>
      {{ crop?.description }}
    </p>
  </div>
</template>

<style scoped>
/* Estilos para el componente */
</style>