<script>

import ToolbarContent from "./public/components/toolbar-content.component.vue";
import StaticalCard from "./crops/components/statistics-card.component.vue";
import ControlPanelPage
  from "./public/pages/control-panel/components/control-panel-page.component.vue";
import HistoryTable from "./crops/components/history-table.component.vue";

export default {
  name: "app",
  components: {ControlPanelPage, StaticalCard, ToolbarContent,HistoryTable}
}
</script>

<template>
  <toolbar-content></toolbar-content>
  <router-view></router-view>

</template>