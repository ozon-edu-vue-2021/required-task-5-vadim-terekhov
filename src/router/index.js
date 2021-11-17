import Vue from 'vue';
import VueRouter from 'vue-router';

import Catalog from '@/views/Catalog.vue';
import Basket from '@/views/Basket.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: 'catalog',
    component: Catalog,
  },
  {
    path: '/basket',
    name: 'basket',
    component: Basket,
  },
];

export default new VueRouter({
  mode: 'history',
  routes,  
});