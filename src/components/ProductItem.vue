<template>
  <div class="wrapper-product-item">
    <picture>
      <source srcset="" type="image/webp">
      <img class="wrapper-product-item-img" :src="require('../assets/images/' + this.ProductItem.image )">
    </picture>
    <p class="wrapper-product-item-title">{{ ProductItem.dish }}</p>
    <p class="wrapper-product-item-number">
      <label for="">Количество </label>
      <input type="number" min="1"
        class="wrapper-product-item-input"
        v-model="numberProductItem"
        @change="changeHandler"
      > 
    </p>
    <p class="wrapper-product-item-price">{{ ProductItem.price }} $</p>
    <button 
      class="wrapper-product-item-btn"
      @click="handlerClick"
    >Добавить в корзину</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'ProductItem',
  props: {
    ProductItem: Object,
  },
  data(){
    return {
      numberProductItem: 1,
    }
  },
  methods: {
    ...mapActions(['addToBasket','setNewNumber']),
    handlerClick(){
      this.addToBasket(this.ProductItem);
      this.numberProductItem = 1;
    },
    changeHandler(){
      this.setNewNumber({item: this.ProductItem,value: this.numberProductItem});
    }
  },
}
</script>

<style>
.wrapper-product-item{
  border: 1px solid #ccc;
  max-width: 24%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  flex: 1 0 auto;
}
.wrapper-product-item-btn{
  display: block;
  border: none;
  background-color: burlywood;
  padding: 10px;
  text-transform: uppercase;
  border-radius: 5px;
  color: black;
  transition: all .7s;
}
.wrapper-product-item-btn:hover{
  cursor: pointer;
  background-color: green;
  color: white;
}
.wrapper-product-item-img{
  display: block;
  max-width: 200px;
  width: 100%;
  max-height: 200px;
  height: 100%;
}
.wrapper-product-item-title{
  max-height: 20px;
  text-align: center;
}
.wrapper-product-item-input{
  width: 50px;
  border: 0;
  border-bottom: 2px solid #ccc;
  text-align: center;
}
.wrapper-product-item-input:focus{
  outline: none;
  border-bottom: 2px solid green;
}
</style>