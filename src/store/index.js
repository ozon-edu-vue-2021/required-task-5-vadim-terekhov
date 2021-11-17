import Vue from 'vue';
import Vuex from 'vuex';
import catalog from '@/store/modules/catalog.js';
import basket from '@/store/modules/basket.js';
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    catalog,
    basket,
  }
})