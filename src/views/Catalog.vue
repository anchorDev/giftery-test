<template>
  <div class="catalog-list">
    <product-item v-for="(item , i) in brands" :key="`${i}-${item}`" :productData="item" />
  </div>
</template>

<script>
import ProductItem from '../components/product-item.vue';
import { mapGetters, mapActions } from "vuex";
import router from "../router.js"

export default {
  name: 'Catalog',
  components: {
    ProductItem,
  },
  data() {
    return {
      brands: []
    };
  },
  watch:{
    '$route.params.id' (to, from) {
      this.brands = this.$store.getters.getBrandsByCategories(to);
    }
  },
  methods: {
    ...mapActions(["fetchBrands"]),
  },
  mounted() {
    this.fetchBrands();
    this.brands = this.filteredBrands;
  },
  computed: {
    ...mapGetters(['getBrandsByCategories']),
    filteredBrands() {
      return this.$store.getters.getBrandsByCategories(router.currentRoute.params['id']);
    }
  }
};
</script>

<style lang="scss" scoped>
  .catalog-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
