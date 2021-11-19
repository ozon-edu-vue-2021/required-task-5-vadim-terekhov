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
    page: 0,
    total: 30,
    visited: [],

  },
  getters:{
    Products(state){
      return state.products;
    },
    Page(state){
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
    visited(state){
      return state.visited;
    },
  },
  mutations:{
    setProduct(state,product){
      state.products = state.products.concat(product);
    },
    setNewNumber(state,{id,value}){
      let idx = state.products.findIndex( i => i.id === id);
      state.products[idx].number = Number(value);
    },
    changeFavorit(state,productId){
      let idx = state.products.findIndex( i => i.id === productId);
      state.products[idx].favorit = !state.products[idx].favorit;
    },
    setPage(state,page){
      state.page = page;
    },
    setVisited(state,value){
      state.visited.push(value);
    }
  },
  actions:{
    async getApiProducts({commit, state, getters},page){
      commit('setPage', page);
      if (!getters.visited.find(i => i === page)){
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
      }
      commit('setVisited',page);
    },
    setNewNumber({commit},data){
      commit('setNewNumber',data)
    },
    changeFavorit({commit},productId){
      commit('changeFavorit', productId)
    },
    setPage({commit, dispatch},page){
      dispatch('getApiProducts',page);
      //commit('setPage',page);
      console.log(commit);
    },
  }
}