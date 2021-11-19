export default {
  state:{
    Basket: [],
  },
  getters:{
    countBasket(state){
      return state.Basket.length;
    },
    Basket(state){
      return state.Basket;
    },
  },
  mutations:{
    addToBasket(state, product){
      let isProduct = false;
      if (state.Basket.length){
        for (let i of state.Basket){
          if (i.id === product.id){
            i.number++;
            isProduct = true;
            break;
          }
        }
        if(!isProduct){
          state.Basket.push(product);
        }
      }else{
        state.Basket.push(product);
      }
    },
    removeOfBasket(state,productId){
      state.Basket = state.Basket.filter( i => i.id !== productId);
    },
    incrementItemInBasket(state,productId){
      let idx = state.Basket.findIndex( i => i.id === productId);
      state.Basket[idx].number += 1;
    },
    decrementItemInBasket(state,productId){
      let idx = state.Basket.findIndex( i => i.id === productId);
      if (state.Basket[idx].number > 1){
        state.Basket[idx].number -= 1;
      }
    },
  },
  actions:{
    addToBasket({commit},product){
      commit('addToBasket', product);
    },
    removeOfBasket({commit},productId){
      commit('removeOfBasket', productId);
    },
    incrementItemInBasket({commit},productId){
      commit('incrementItemInBasket',productId);
    },
    decrementItemInBasket({commit},productId){
      commit('decrementItemInBasket',productId);
    },
  }
}