<script>
import CustomTable from "./custom-table.component.vue";
import { ProductsApiService } from '../services/products-api.service.js';

export default {
  name: "ProductsUsed",
  components: {CustomTable},
  props: {
    sowingId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      products: [],
      tableHeaders: ['Date', 'Type', 'Name', 'Quantity'],
    };
  },
  created() {
    const productsAPI = new ProductsApiService();
    productsAPI.getAll()
        .then(response => {
          this.products = response.data.filter(product => product.sowing_id === this.sowingId);
        })
        .catch(e => {
          console.log(e);
        });
  },
  computed: {
    tableData() {
      return this.products.map(product => [product.date, product.type, product.name, product.quantity]);
    }
  }
};
</script>

<template>
  <div>
    <custom-table class="table" :headers="tableHeaders" :data="tableData" />
  </div>
</template>

<style scoped>
</style>