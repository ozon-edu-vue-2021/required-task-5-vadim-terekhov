<template>
  <div class="wrapper-favorit-item">
      {{ FavoritItem.dish }}
  </div>
</template>

<script>
export default {
    name: 'FavoritItem',
    props: {
      FavoritItem: Object,
    },
}
</script>

<style scoped>

</style>