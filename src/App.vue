<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "App",
  methods: {
    ...mapActions(['getApiProducts']),
  },
  created(){
    this.getApiProducts();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  box-sizing: border-box;
  max-width: 900px;
  width: 100%;
  margin: 0px auto;
}

html,
body
{
  height: 100%;
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}
</style>
