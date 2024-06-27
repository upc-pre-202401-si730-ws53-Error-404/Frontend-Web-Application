<template>
  <div>
    <h2>Enfermedades del Cultivo</h2>
    <table>
      <thead>
      <tr>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Solución</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="disease in diseases" :key="disease.id">
        <td>{{ disease.name }}</td>
        <td>{{ disease.description }}</td>
        <td>{{ disease.solution }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { DiseasesApiService } from '../services/diseases-api.service.js';

export default {
  name: 'CropDiseases',
  props: ['cropId'],
  data() {
    return {
      diseases: []
    };
  },
  methods: {
    async fetchDiseases() {
      console.log('Fetching diseases for cropId:', this.cropId); // Log cropId
      try {
        const diseasesService = new DiseasesApiService();
        const response = await diseasesService.getByCropId(this.cropId);
        console.log('Diseases response:', response); // Log full response
        this.diseases = response.data;
        console.log('Diseases data:', this.diseases); // Log the data
      } catch (error) {
        console.error('Error fetching diseases:', error);
      }
    }
  },
  created() {
    this.fetchDiseases();
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
  text-align: left;
}
</style>
