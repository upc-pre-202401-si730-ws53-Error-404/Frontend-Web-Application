<script>
import CustomTable from "./custom-table.component.vue";
import { SowingsApiService } from '../services/sowings-api.service.js';
import { DiseasesApiService } from '../services/diseases-api.service.js';
import { PestsApiService } from '../services/pests-api.service.js';
import {CropPestsApiService} from "../services/crop-pests-api.service.js";
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
    const pestsAPI = new PestsApiService();
    const cropDiseasesAPI= new CropDiseasesApiService();
    const cropPestsAPI= new CropPestsApiService();

    try {
      const sowingResponse = await sowingsAPI.getById(this.sowingId);
      const selectedSowing = sowingResponse.data;
      console.log(sowingResponse.data);

      const diseasesResponse = await diseasesAPI.getAll();
      const diseases = diseasesResponse.data || [];

      const cropDiseasesResponse = await cropDiseasesAPI.getByCropId(selectedSowing.cropId);
      const cropDiseases = cropDiseasesResponse.data || [];
      console.log(cropDiseases);

      const cropDiseaseIds = cropDiseases.map(cropDisease => cropDisease.id);

      const selectedDiseases = diseases.filter(disease => cropDiseaseIds.includes(disease.id));
      console.log('Selected Diseases:', selectedDiseases);

      const diseasesData = selectedDiseases.map(disease => ({
        name: disease.name,
        description: disease.description,
        solution: disease.solution
      }));
      console.log('Diseases Data:', diseasesData);

      const pestsResponse = await pestsAPI.getAll();
      const pests = pestsResponse.data || [];

      const cropPestsResponse = await cropPestsAPI.getByCropId(selectedSowing.cropId);
      const cropPests = cropPestsResponse.data || [];
      console.log(cropPests);

      const cropPestIds = cropPests.map(cropPest => cropPest.id);

      const selectedPests = pests.filter(pest => cropPestIds.includes(pest.id));
      const pestsData = selectedPests.map(pest => ({
        name: pest.name,
        description: pest.description,
        solution: pest.solution
      }));
      this.tableData = [...diseasesData, ...pestsData];
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
