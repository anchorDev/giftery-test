import Vue from 'vue';
import Vuex from 'vuex';
import brands from './modules/brands'
import card from './modules/card'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    brands,
    card,
  }
});
