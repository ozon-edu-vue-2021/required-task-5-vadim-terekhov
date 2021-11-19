<template> 
    <div class="wrapper-favorit">
        <div class="wrapper-favorit-header">
            <h1 class="wrapper-favorit-header-title">Избранное</h1>
        </div>
        <div
            v-if="!Favorit.length"
        >
            Упс... Вы ничего не выбрали... 
            <router-link :to="{name: 'catalog'}" class="favorit-in-catalog">в каталог</router-link>
        </div>
        <div v-else class="wrapper-favorit-cards">
            <favorit-item 
                v-for="item in Favorit"
                :key="item.id"
                :FavoritItem="item"
            />
        </div>
    </div>
</template>

<script>
import FavoritItem from '@/components/FavoritItem.vue';
import { mapGetters } from 'vuex';
export default {
    name: 'Favorit',
    components: { FavoritItem },
    computed: mapGetters(['Favorit']),
}
</script>

<style scoped>
.wrapper-favorit-header{
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
.wrapper-favorit-header-title{
  margin: 5px 0px 0px 30px;
  text-transform: uppercase;
}
.favorit-in-catalog{
    text-decoration: none;
}
.wrapper-favorit-cards{
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
</style>