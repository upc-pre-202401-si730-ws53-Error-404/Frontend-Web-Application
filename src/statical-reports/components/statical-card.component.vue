<script>
import {CropApiService} from "../services/crop-api.service.js";

export default {
  name: "statical-card",
  data(){
    return {
      crops:[],
      cropNames:[],
      cropControls:[],
      cropQuantityPhases:[],

      cropsData:[],
      cropsPhenologicalPhasesByCrop:[],
      cropsAPI : new CropApiService()
    }
  },

  created(){
    this.getCrops();
  },
  methods:{
    getCrops(){
      this.cropsAPI.getAllCrops()
          .then(response => {
            this.crops = response.data;
            console.log(this.crops);
            this.cropNames = this.crops.map(crop => crop.name);
            console.log(this.cropNames);
            this.cropControls = this.crops.map(crop => crop.quantityControls);
            console.log(this.cropControls)
            this.cropQuantityPhases = this.crops.map(crop => crop.quantityPhenologicalPhases);

            this.cropsPhenologicalPhasesByCrop = this.crops.map(crop => ({
              label: crop.name,
              value: crop.quantityPhenologicalPhases
            }));

            this.cropsData = this.crops.map(crop => ({
              label: crop.name,
              value: crop.quantityControls
            }));
            console.log(this.cropsData);

          })
          .catch(error => {
            console.log(error);
          });
    }
  }

}



</script>

<template>
  <div class="pv-card-container">
    <pv-card class="pv-card-left">
      <template #header class="bg-teal-300">
        <h2>Number of Controls</h2>
      </template>

        <template #content >
          <pv-bar-graph
              :points= cropsData
              :show-y-axis="true"
              :show-x-axis="true"
              :width="400"
              :height="200"
              :show-values="true"
              :show-custom-labels="true"
          />
        </template>


      <template #footer>
        <p>Percentage of quantity of controls per crop</p>
      </template>

    </pv-card>

    <pv-card class="pv-card-right">
      <template #header class="bg-teal-300">
        <h2>Quantity of Phenological Phases by Crop</h2>
      </template>

      <template #content>
        <pv-bar-graph
            :points= cropsPhenologicalPhasesByCrop
            :show-y-axis="true"
            :show-x-axis="true"
            :width="400"
            :height="200"
            :show-values="true"
            :show-custom-labels="true"
        />

      </template>


    </pv-card>
  </div>


</template>

<style scoped>
.pv-card-left {
  background-color: var(--primary-main-green);
  color: white;
  border-radius: 10px;
  width: 35rem;
  margin-right: 5%;
}

.pv-card-right {
  background-color: var(--primary-main-green);
  color: white;
  border-radius: 10px;
  width: auto;
  margin-left: 5%;
}

.pv-card-container {
  display: flex;
  justify-content: space-between;
}

.content-background {
  background-color: var(--primary-main-white);
}
</style>

