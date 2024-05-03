<script>
  import CropinfoToolbar from "./cropinfo-toolbar.vue";
  import GeneralInformation from "./general-information.component.vue";

  export default {
    name: 'CropInformation',
    components: {GeneralInformation, CropinfoToolbar},
  }
</script>

<template>
  <div class="container">
    <cropinfo-toolbar class="toolbar"></cropinfo-toolbar>
    <router-view/>
  </div>

</template>

<style scoped>
  .toolbar {
  margin-bottom: 100px;
  }
</style>