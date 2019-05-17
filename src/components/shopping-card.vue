<template>
  <router-link to="/card">
    <md-badge :md-content="getProductsLength">
      <md-button class="md-icon-button md-accent">
        <md-icon>shopping_cart</md-icon>
      </md-button>
    </md-badge>
  </router-link>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'ShoppingCard',
  computed: mapGetters(['getProductsLength'])
};
</script>

<style lang="scss">
.md-badge.md-theme-default.md-position-top {
  background-color: #f16536;
}
</style>
