<script>

import GeneralInformation from "../components/general-information.component.vue";
import CropCare from "../components/crop-care.component.vue";
import Controls from "../components/controls.component.vue";
import DiseasesOrPests from "../components/diseases-or-pests.component.vue";
import ProductsUsed from "../components/products-used.component.vue";

export default {
  name: "crop-information-management",
  components: {ProductsUsed, DiseasesOrPests, Controls, CropCare, GeneralInformation},
}
</script>

<template>
  <div>
    <h2 style="color:black;">Crop Information Management</h2>
    <pv-tab-view>
      <pv-tab-panel header="General Information">
        <general-information/>
      </pv-tab-panel>
      <pv-tab-panel header="Crop Care">
        <crop-care/>
      </pv-tab-panel>
      <pv-tab-panel header="Controls">
        <controls/>
      </pv-tab-panel>
      <pv-tab-panel header="Diseases or Pest">
        <diseases-or-pests/>
      </pv-tab-panel>
      <pv-tab-panel header="Products Used">
        <products-used/>
      </pv-tab-panel>
    </pv-tab-view>
  </div>
</template>

<style scoped>

</style>