<script>

export default {
  name: "toolbar-content",
}
</script>

<template>
  <pv-toolbar class="fixed-toolbar pv-toolbar" style=" padding: 1rem 1rem 1rem 1.5rem">
    <template #start>
      <span class="toolbar-section">
        <img src="https://raw.githubusercontent.com/upc-pre-202401-si730-ws53-Error-404/TB1_AplicacionesWeb/main/resources/ChaquitacllaLogoNuevo.png" alt="Logo" style="width: 10rem; height: auto; border-radius: 10%; margin-right: 1rem" />
      </span>
    </template>

    <template #center >
        <div class="toolbar-section center-start ">
          <router-link to="/control-panel">
            <pv-button class="bg-transparent mr-4">
              <p>Control Panel</p>
            </pv-button>
          </router-link>
          <router-link to="/crop-list-and-registration">
            <pv-button class="bg-transparent mr-4">
              <p>Crop Registration</p>
            </pv-button>
          </router-link>
      </div>

    </template>

    <template #end>
        <pv-button class="toolbar-section user" :Ripple="false" @click="">
          <i class="pi pi-user " style="font-size: 2rem"></i>
          <p class="ml-3" >Roberto Juarez</p>
        </pv-button>
    </template>
  </pv-toolbar>
</template>

<style scoped>
.toolbar-section {
  display: inline-block;
  flex-direction: row;
  justify-content: space-between;
}


.user {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  align-items: center;
    font-size: 1rem;
    padding: 0.5rem;
    height: auto !important;
    width: auto !important;
  transform: none !important;
}

.user:active, .user:focus {
  transform: none !important;
}


.fixed-toolbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.pv-toolbar {
  display: flex;
  justify-content: space-between;
  background-color: var(--primary-main-green)
}

.center-start {
  display: flex;
  justify-content: flex-start;
}
</style>