<script>

import ToolbarContent from "./public/components/toolbar-content.component.vue";
import StaticalCard from "./crops/components/crops-amount-stats-card.component.vue";
import ControlPanelPage
  from "./public/pages/control-panel/components/control-panel-page.component.vue";

export default {
  name: "app",
  components: {ControlPanelPage, ToolbarContent},
}
</script>

<template>

  <toolbar-content></toolbar-content>
  <router-view></router-view>

</template>