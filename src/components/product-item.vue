<template>
  <div class="card-expansion">
    <md-card md-with-hover>
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="16:9">
          <img :src="productData.image">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">{{productData.title}}</span>
          </md-card-header>

          <md-card-actions>
            <md-card-expand>
              <md-card-actions md-alignment="space-between">
                <md-button :disabled="!price" @click="addToCart" class="md-raised md-primary">
                  <md-icon >add_shopping_cart</md-icon> Add to card
                </md-button>

                <md-card-expand-trigger>
                  <md-button class="md-icon-button md-primary">
                    <md-icon >keyboard_arrow_down</md-icon>
                  </md-button>
                </md-card-expand-trigger>
              </md-card-actions>

              <md-card-expand-content>
                <md-card-content>
                  <md-radio v-for="(item , i) in productData.faces" :key="`${i}-${item}`" :id="item" v-model="price" :value="item">
                    {{item}}
                  </md-radio>
                </md-card-content>
              </md-card-expand-content>
            </md-card-expand>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  data() {
    return {
      price: null,
    };
  },
  props: {
    productData: {
      type: Object,
      required: true,
      default: () => { return {} }
    }
  },
  methods: {
    addToCart() {
      let recordLocal = Object.assign({}, this.productData);
      recordLocal.price = this.price;
      recordLocal.count = 1;
      recordLocal.id += this.price;
      if (!this.$store.getters.getProductById(recordLocal.id)) {
        this.$store.commit('setProducts', recordLocal);
      }
    }
  },
  filters: {
    snippet(value) {
      return value.slice(0,180) + '...';
    }
  }
};
</script>

<style lang="scss" scoped>
.card-expansion {
  flex: 0 0 380px;

  .md-card {
    width: 100%;
    margin: 4px;
    display: inline-block;
    vertical-align: top;

    .md-card-actions {
      background-color: transparent;
    }

    .md-card-expand {
      width: 100%;
    }

    .md-card-header {
      padding: 0 16px;
    }

    .md-card-content:last-of-type {
      padding: 0 16px;
    }
  }
}

</style>
