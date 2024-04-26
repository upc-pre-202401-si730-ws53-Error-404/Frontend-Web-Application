<script>

import ToolbarContent from "./public/components/toolbar-content.component.vue";
import StaticalCard from "./statical-reports/components/statical-card.component.vue";

export default {
  name: "app",
  components: {StaticalCard, ToolbarContent}
}
</script>

<template>
  <toolbar-content></toolbar-content>
  <statical-card></statical-card>
</template>