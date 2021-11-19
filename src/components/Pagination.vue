<template>
  <div class="pagination">
    <div class="pagination-page"
      v-for="page in pages"
      :key="page"
      :class="{'selected': page === Page}"
      @click="paginationClick(page)"
    >
      {{page}}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Pagination',
  computed: {
    ...mapGetters(['pages','Page']),
  },
  methods: {
    ...mapActions(['setPage']),
    paginationClick(page){
      this.setPage(page);
    },
  },
}
</script>

<style scoped>
.pagination{
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 20px;
}
.pagination-page{
  border: 1px solid green;
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
  text-align: center;
}
.pagination-page:last-child{
  margin-right: 0px;
}
.pagination-page:hover{
  cursor: pointer;
  background-color: beige;
}
.selected{
  background-color: burlywood;
}
</style>