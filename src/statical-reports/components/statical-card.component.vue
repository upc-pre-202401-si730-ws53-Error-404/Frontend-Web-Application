<script>
export default {
  name: "statical-card"
}
</script>

<template>
  <pv-card >
    <template #header class="bg-teal-300">
      <h2>Number of Controls</h2>
    </template>

  <template #content>
    <pv-bar-graph
        :points="[20,5,2,5,4]"
        :width="400"
        :height="200"
    />
  </template>


  </pv-card>



</template>

<style scoped>

</style>