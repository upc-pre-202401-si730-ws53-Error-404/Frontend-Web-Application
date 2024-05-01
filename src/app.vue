<script>

import ToolbarContent from "./public/components/toolbar-content.component.vue";
import StaticalCard from "./statical-reports/components/statical-card.component.vue";
import ControlPanelPage
  from "./statics-control-management/pages/control-panel/components/control-panel-page.component.vue";

export default {
  name: "app",
  components: {ControlPanelPage, StaticalCard, ToolbarContent}
}
</script>

<template>
  <toolbar-content></toolbar-content>
  <router-view></router-view>

  <!--  <statical-card></statical-card>-->
</template>