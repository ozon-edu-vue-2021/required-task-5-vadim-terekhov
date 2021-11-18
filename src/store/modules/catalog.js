import _ from 'lodash';
import img from '@/helpers/dataImage.js';
function randomImage(){
  const item = _.random(0,11);
  return img[item].name + '.webp';
};

export default {
  state:{
    products: [],
  },
  getters:{
    getProducts(state){
      return state.products;
    }
  },
  mutations:{
    setProduct(state,products){
      state.products = products;
    },
    setNewNumber(state,data){
      let idx = state.products.findIndex( i => i.id === data.item.id);
      state.products[idx].number = Number(data.value);
    },
    changeFavorit(state,product){
      let idx = state.products.findIndex( i => i.id === product.id);
      state.products[idx].favorit = !state.products[idx].favorit;
    },
  },
  actions:{
    async getApiProducts({commit}){
      try {
        const response = await fetch('https://random-data-api.com/api/food/random_food?size=30');  
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
  }
}