<template>
  <div>
    <md-table v-model="getProducts" md-card class="md-accent">
      <md-table-toolbar>
        <h1 class="md-title">Корзина</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Бренд" md-sort-by="title">
          <img :src="item.image" width="100" alt="product image">
          {{ item.title }}
        </md-table-cell>
        <md-table-cell md-label="Номинал" md-sort-by="price">{{ item.price }}</md-table-cell>
        <md-table-cell md-label="Кол-во" md-sort-by="gender">
          <div class="md-layout-item">
            <select v-model="item.count" @change="onChange(item)">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </md-table-cell>
        <md-table-cell md-label="Сума" md-sort-by="title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="" md-sort-by="id">
          <md-button class="md-icon-button" @click="removeProductById(item.id)">
            <md-icon>delete</md-icon>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
    <md-card class="md-accent card-footer">
      <md-card-header>
        <div class="md-title">K Оплате {{getTotalPrice}}</div>
        <md-button class="md-raised md-button-spaced md-primary">Оплатить</md-button>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Cart',
  data() {
    return {
      products: [],
    }
  },
  methods: {
    ...mapActions(['removeProductById']),
    onChange(item) {
      this.$store.commit('updateProduct', item)
    }
  },
  mounted() {
    this.products = this.getProducts;
  },
  computed: mapGetters(['getProducts', 'getTotalPrice']),
}
</script>

<style lang="scss">
.card-footer {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;

  .md-card-header {
    display: flex;
    align-items: center;

    .md-title:first-child {
      margin-top: 0;
    }

    .md-button {
      margin-left: 15px;
    }
  }
}
</style>
