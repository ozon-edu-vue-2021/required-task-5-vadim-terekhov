export default {
  state:{
    Basket: [],
  },
  getters:{
    countBasket(state){
      return state.Basket.length;
    },
    getBasket(state){
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
    removeOfBasket(state,product){
      state.Basket = state.Basket.filter( i => i.id !== product.id);
    },
    incrementItemInBasket(state,product){
      let idx = state.Basket.findIndex( i => i.id === product.id);
      state.Basket[idx].number += 1;
    },
    decrementItemInBasket(state,product){
      let idx = state.Basket.findIndex( i => i.id === product.id);
      if (state.Basket[idx].number > 1){
        state.Basket[idx].number -= 1;
      }
    }
  },
  actions:{
    addToBasket({commit},product){
      commit('addToBasket', product);
    },
    removeOfBasket({commit},product){
      commit('removeOfBasket', product);
    },
    incrementItemInBasket({commit},product){
      commit('incrementItemInBasket',product);
    },
    decrementItemInBasket({commit},product){
      commit('decrementItemInBasket',product);
    }
  }
}