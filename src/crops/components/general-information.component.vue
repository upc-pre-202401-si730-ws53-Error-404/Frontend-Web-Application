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

        console.log('Sowing data:', this.sowing); // Log sowing data

        if (!this.sowing.cropId) {
          console.error('Error: crop_id is missing in sowing data');
          return;
        }

        const cropResponse = await cropApiService.getCropById(this.sowing.crop_id);

        if (!cropResponse || !cropResponse.data) {
          console.error('Error: Crop data not found');
          return;
        }

        this.crop = cropResponse.data;

        console.log('Crop data:', this.crop); // Log crop data

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
.container {
  display: flex;
  margin-bottom: 50px;
}

.image-container {
  flex: 1;
  margin-right: 50px;
}

.labels-container {
  flex: 1;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 50px;
  display: flex;
  flex-direction: column;

}

.row {
  display: flex;
  margin-bottom: 10px;
}

.column {
  flex: 1;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
}

.grey-label {
  background-color: #D9D9D9;
  color: black;
}

.green-label {
  background-color: #005f40;
  color: white;
}

.description{
  background-color: #005f40;
  color: white;
  padding: 10px 20px;
  text-align: center;
  border-radius: 5px;
}
.crop-image {
  width: 400px;
  height: 400px;
  border-radius: 20px;
}
</style>