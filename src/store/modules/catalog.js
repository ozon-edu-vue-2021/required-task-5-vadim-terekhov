import _ from 'lodash';
import img from '@/helpers/dataImage.js';
function randomImage(){
  const item = _.random(0,11);
  return img[item].name + '.webp';
};

export default {
  state:{
    products: [],
    perPage: 8,
    page: 1,
    total: 30,
  },
  getters:{
    getProducts(state){
      return state.products;
    },
    getPage(state){
      return state.page;
    },
    pages(state){
      return Math.ceil(state.total / state.perPage);
    },
    chunkProducts(state){
      const start = (state.page - 1) * state.perPage;
      const end = start + state.perPage;
      return state.products.slice(start,end);
    },
  },
  mutations:{
    setProduct(state,product){
      state.products = state.products.concat(product);
    },
    setNewNumber(state,data){
      let idx = state.products.findIndex( i => i.id === data.item.id);
      state.products[idx].number = Number(data.value);
    },
    changeFavorit(state,product){
      let idx = state.products.findIndex( i => i.id === product.id);
      state.products[idx].favorit = !state.products[idx].favorit;
    },
    setPage(state,page){
      state.page = page;
    }
  },
  actions:{
    async getApiProducts({commit, state}){
      try {
        const response = await fetch('https://random-data-api.com/api/food/random_food?size=' + state.perPage);  
        const products = await response.json();
        for (let i of products){
          i.number = 1;
          i.price = _.random(100,10000);
          i.image = randomImage();
          i.favorit = false;
        }
        commit('setProduct',products);
      } catch (error) {
        console.error(error);
      }
    },
    setNewNumber({commit},data){
      console.log(data);
      commit('setNewNumber',data)
    },
    changeFavorit({commit},product){
      commit('changeFavorit', product)
    },
    setPage({commit, dispatch},page){
      commit('setPage',page);
      dispatch('getApiProducts');
    },
  }
}