<template>
  <div class="wrapper-basket">
    <div class="wrapper-basket-header">
      <h1 class="wrapper-basket-header-title">Корзина</h1>
      <button class="wrapper-basket-header-btn"
        :disabled="!getBasket.length"
        @click="handlerClick"
      >Оформить</button>
    </div>
    <div
      class="wrapper-basket-empty"
      v-if="!getBasket.length"
    >
      в корзине пусто ...
    </div>
    <div v-else>
      <div class="wrapper-basket-row header">
        <p>Название</p>
        <p>Количество</p>
        <p>Стоимость</p>
        <p>Убрать</p>
      </div>
      <basket-item
        v-for="item in getBasket"
        :key="item.id"
        :BasketItem="item"
      />
      <div class="wrapper-basket-total">Общая сумма: {{ total }}</div>
    </div>
    
  </div>
</template>

<script>
import BasketItem from '@/components/BasketItem.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'Basket',
  components: { BasketItem },
  computed: {
    ...mapGetters(['getBasket']),
    total(){
      return this.getBasket.reduce( (prev,cur) => {
        return prev + (cur.number * cur.price);
      },0);

    }
  },
  methods:{
    handlerClick(){
      const result = this.getBasket.map( i => i.dish);
      alert(JSON.stringify(result));
    }
  }
}
</script>

<style scoped>
.wrapper-basket-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wrapper-basket-header-title{
  margin-left: 30px;
}
.wrapper-basket-header-btn{
  display: block;
  margin-right: 20px;
  border: none;
  text-transform: uppercase;
  background-color: burlywood;
  color: black;
  border-radius: 5px;
  padding: 5px;
  transition: all .7s;
}
.wrapper-basket-header-btn:hover{
  cursor: pointer;
  background-color: green;
  color: white;
}
.wrapper-basket-header-btn:disabled,
.wrapper-basket-header-btn[disabled]{
  background-color: #cccccc;
  color: #666666;
}
.wrapper-basket-row{
  display: flex;
  justify-content: space-around;
  border: 1px solid #ccc;
}
.wrapper-basket-total{
  background-color: darkolivegreen;
  color: white;
  text-transform: uppercase;
  text-align: center;
  padding: 10px;
}
.header{
  font-weight: bold;
  background-color:bisque;
  border: 0;
}
</style>