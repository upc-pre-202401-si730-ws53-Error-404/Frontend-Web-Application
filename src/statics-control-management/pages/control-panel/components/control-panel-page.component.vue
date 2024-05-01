<script>
export default {
  name: "control-panel-page",
  data() {
    return {
      items: [
        { label: 'Statical reports', to: '/statical-reports' },
        { label: 'Crop Registration', to: '/crop-registration' },
        { label: 'Consultation forum', to: '/consultation-forum' },
        { label: 'Crop History', to: '/crop-history' }
      ]
    }
  }
}
</script>

<template>
  <div class="main-container">
    <div class="left-container">
      <pv-card class="justify-content-center mt-2">
        <template #content>
          <i class="pi pi-chart-bar icon-large"></i>
        </template>
        <template #footer>
          <router-link :to="items[0].to"  rel="noopener">
            <pv-button class="button-green" :label="items[0].label" />
          </router-link>
        </template>
      </pv-card>

      <pv-card class="justify-content-center mt-2">
        <template #content>
          <i class="pi pi-clipboard icon-large"></i>
        </template>
        <template #footer>
          <router-link to="/"  rel="noopener">
            <pv-button class="button-green" label="Crop Registration" />
          </router-link>
        </template>
      </pv-card>

      <pv-card class="justify-content-center mt-2">
        <template #content>
          <i class="pi pi-comments icon-large"></i>
        </template>
        <template #footer>
          <router-link to="/"  rel="noopener">
            <pv-button class="button-green" label="Consultation forum" />
          </router-link>
        </template>
      </pv-card>

      <pv-card class="justify-content-center mt-2">
        <template #content>
          <i class="pi pi-history icon-large"></i>
        </template>
        <template #footer>
          <router-link to="/"  rel="noopener">
            <pv-button class="button-green" label="Crop History" />
          </router-link>
        </template>
      </pv-card>


    </div>

    <div class="right-container">
      <p>Here the donut-graph with SCB</p>
    </div>
  </div>

</template>

<style scoped>
.main-container {
  display: flex;
  margin-top:8em;
}

.left-container,
.right-container {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.icon-large {
  font-size: 8em;
  color: black;
  margin-bottom: 0.1em;
}

.button-green {
  background-color: var(--primary-main-green);
  color: white;
}


</style>