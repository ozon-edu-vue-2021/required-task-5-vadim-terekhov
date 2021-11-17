<template>
  <div class="wrapper-basket-item">
    <div class="wrapper-basket-item-row body">
      <p class="body-item">{{ BasketItem.dish }}</p>
      <p class="body-item">
        <span class="body-btn"
          @click="handlerDecrement"
        >-</span>
        {{ BasketItem.number }}
        <span class="body-btn"
          @click="handlerIncrement"
        >+</span>
      </p>
      <p class="body-item">{{ totalPrice }}</p>
      <p class="body-item">
        <button class="body-remove"
          @click="clickHandler"
        >Удалить</button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'BasketIten',
  props: {
    BasketItem: Object,
  },
  computed: {
    totalPrice(){
      return this.BasketItem.number * this.BasketItem.price;
    },
  },
  methods: {
    ...mapActions(['removeOfBasket','incrementItemInBasket','decrementItemInBasket']),
    clickHandler(){
      this.removeOfBasket(this.BasketItem);
    },
    handlerIncrement(){
      this.incrementItemInBasket(this.BasketItem);
    },
    handlerDecrement(){
      this.decrementItemInBasket(this.BasketItem);
    }
  }
}
</script>

<style scoped>
.wrapper-basket-item-row{
  display: flex;
  justify-content: space-around;
  border: 1px solid #ccc;
}
.header{
  font-weight: bold;
  background-color:bisque;
  border: 0;
}
.body-remove{
  border: 0;
  background-color: coral;
  color: white;
  text-transform: uppercase;
  padding: 5px;
}
.body-remove:hover{
  cursor: pointer;
}
.body-item{
  flex: 1 0 25%;
  text-align: center;
}
.body-btn{
  color: white;
  background-color: darkgreen;
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
}
.body-btn:hover{
  cursor: pointer;
}
</style>