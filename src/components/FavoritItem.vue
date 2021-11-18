<template>
  <div class="wrapper-favorit-item">
      <picture>
        <source srcset="" type="image/webp">
        <img class="wrapper-favorit-item-img" :src="require('../assets/images/' + this.FavoritItem.image )">
      </picture>
      <p class="wrapper-favorit-item-title">{{ FavoritItem.dish }}</p>
      <p class="wrapper-favorit-item-price">{{ FavoritItem.price }} $</p>
      <button 
        class="wrapper-favorit-item-btn"
        @click="removeFavorit"
      >Убрать</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'FavoritItem',
    props: {
      FavoritItem: Object,
    },
    methods: {
      ...mapActions(['removeFromFavorit']),
      removeFavorit(){
        this.removeFromFavorit(this.FavoritItem);
      },
    }
}
</script>

<style scoped>
.wrapper-favorit-item{
  border: 1px solid #ccc;
  max-width: 24%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 0px 3px 20px 3px;
  flex: 1 0 auto;
}
.wrapper-favorit-item-btn{
  display: block;
  border: none;
  background-color: burlywood;
  padding: 10px;
  text-transform: uppercase;
  border-radius: 5px;
  color: black;
  transition: all .7s;
  margin-bottom: 5px;
}
.wrapper-favorit-item-btn:hover{
  cursor: pointer;
  background-color: green;
  color: white;
}
.wrapper-favorit-item-img{
  display: block;
  max-width: 200px;
  width: 100%;
  max-height: 200px;
  height: 100%;
}
.wrapper-favorit-item-title{
  max-height: 20px;
  text-align: center;
}
</style>