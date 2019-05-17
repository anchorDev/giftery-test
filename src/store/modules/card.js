const state = {
  products: [],
};

const getters = {
  getProducts: (state) => state.products,
  getProductsLength: (state) =>  state.products.length,
  getProductById: (state) => (id) => state.products.find(product => product.id === id),
  getTotalPrice: (state) => {
    const priceArr = state.products.map(item => parseInt(item.count * item.price));
    return priceArr.reduce((a,b) => a + b, 0)
  }
};

const actions = {
  removeProductById({ commit }, id) {
    commit('removeProduct', id);
  }
};

const mutations = {
  setProducts: (state, product) => (state.products.push(product)),
  removeProduct: (state, id) =>
    (state.products = state.products.filter(brand => brand.id !== id)),
  updateProduct({ commit }, newProduct) {
    const index = state.products.findIndex(product => product.id === newProduct.id);
    if (index !== -1) {
      state.products.splice(index, 1, newProduct);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
