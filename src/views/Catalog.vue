<template>
  <div class="wrapper-catalog">
    <div class="wrapper-catalog-header">
      <h1 class="wrapper-catalog-header-title">Каталог</h1>
      <div>
        <router-link :to="{name: 'favorit'}"
          class="favorit"
        >Избранное</router-link>
      </div>
      <div class="wrapper-catalog-header-basket basket">
        <router-link :to="{name: 'basket'}"
          class="basket-link"
        >
          Корзина
          <span class="basket-count"> {{ countBasket }} </span>
        </router-link>
        
      </div>
    </div>
    <div class="wrapper-catalog-cards">
      <product-item 
        v-for="(item,idx) in getProducts"
        :key="`${idx}+${item.id}`"
        :ProductItem="item"
      />
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'Catalog',
  components: { ProductItem },
  computed: {
    ...mapGetters(['getProducts','countBasket']),
  },
  
}
</script>

<style>
.wrapper-catalog-cards{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.wrapper-catalog-header{
  border-bottom: 1px solid #bbb;
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #bbb;
  padding: 10px 0px;
}
.wrapper-catalog-header-title{
  margin: 5px 0px 0px 30px;
  text-transform: uppercase;
}
.basket{
  color: white;
  background-color: #777;
  margin-right: 20px;
  border-radius: 5px;;
  padding: 10px;
}
.basket-link{
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  padding: 10px;
}
.basket-count{
  background-color: #444;
  padding: 5px;
  border-radius: 5px;
  margin-left: 7px;
}
.favorit{
  text-transform: uppercase;
  text-decoration: none;
  background-color: burlywood;
  padding: 10px;
  border-radius: 5px;
  color: black;
  transition: all .7s;
}
.favorit:hover{
  cursor: pointer;
  background-color: green;
  color: white;
}
</style>