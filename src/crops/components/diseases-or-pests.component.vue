<script>
import CustomTable from "./custom-table.component.vue";
import { SowingsApiService } from '../services/sowings-api.service.js';
import { DiseasesApiService } from '../services/diseases-api.service.js';
import {CropDiseasesApiService} from "../services/crop-diseases-api.service.js";

export default {
  name: 'DiseasesOrPests',
  components: { CustomTable },
  props: ['sowingId'],
  data() {
    return {
      tableHeaders: ['Name', 'Description', 'Solution'],
      tableData: [],
      sowing: null,
    };
  },
  async created() {
    const sowingsAPI = new SowingsApiService();
    const diseasesAPI = new DiseasesApiService();
    const cropDiseasesAPI = new CropDiseasesApiService();

    try {
      const sowingResponse = await sowingsAPI.getById(this.sowingId);
      const selectedSowing = sowingResponse.data;
      console.log('Sowing Response:', sowingResponse.data);  // Log sowing data

      let selectedDiseases = [];  // Initialize selectedDiseases

      // Check if selectedSowing is defined
      if (selectedSowing) {
        const cropDiseasesResponse = await cropDiseasesAPI.getByCropId(selectedSowing.cropId);
        selectedDiseases = cropDiseasesResponse.data || [];
        console.log('Crop Diseases Response:', selectedDiseases);
      } else {
        console.log('selectedSowing is undefined');
      }

      const diseasesData = selectedDiseases.map(disease => ({
        name: disease.name,
        description: disease.description,
        solution: disease.solution
      }));
      console.log('Diseases Data:', diseasesData);

      this.tableData = diseasesData;
      console.log('Table Data:', this.tableData);
    } catch (error) {
      console.error('Error:', error);
    }
  }
};
</script>

<template>
  <div>
    <custom-table class="table" :headers="tableHeaders" :data="tableData"/>
  </div>
</template>

<style scoped>
</style>