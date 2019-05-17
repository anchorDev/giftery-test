import Brands from "../../data/brands.json"

const state = {
  brands: [],
};

const getters = {
  getBrandsByCategories: state => (id) => {
    return state.brands.filter(brand => {
      return brand.categories.findIndex(categories_id => categories_id === parseFloat(id)) >= 0
    });
  }
};

const actions = {
  fetchBrands({ commit }) {
    commit('setBrands', Brands);
  },
};

const mutations = {
  setBrands: (state, brands) => (state.brands = brands),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
