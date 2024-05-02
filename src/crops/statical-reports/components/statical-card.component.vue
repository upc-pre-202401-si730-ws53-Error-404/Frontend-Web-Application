
<template>
  <div>
    <pv-card class="pv-card-left">
      <template #header class="bg-teal-300">
        <h2>Number of Controls</h2>
      </template>

      <template #content >
        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Type Name</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="crop in crops" :key="crop.id">
            <td>{{ crop.id }}</td>
            <td>{{ crop.name }}</td>
            <td>{{ crop.description }}</td>
            <td>{{ crop.type_name }}</td>
          </tr>
          </tbody>
        </table>
      </template>

      <template #footer>
        <p>Percentage of quantity of controls per crop</p>
      </template>
    </pv-card>
  </div>
</template>

<script>
import { CropApiService } from '../services/crop-api.service.js';

export default {
  name: 'statical-card',
  data() {
    return {
      crops: [],
      cropsAPI: new CropApiService(),
    };
  },
  created() {
    this.cropsAPI.getAll().then(response => {
      this.crops = response.data;
    });
  },
};
</script>