<template>
  <div class="sort-button">
    <ElButton class="button-sort" @click="sortList('OUTCOME')">Доход</ElButton>
    <ElButton class="button-sort" @click="sortList('INCOME')">Расход</ElButton>
    <ElButton class="button-sort" @click="sortList('ALL')">Всё</ElButton>
  </div>
</template>

<script>
export default {
  name: "SortList",
  methods: {
    sortList(type) {
      this.$emit("onSortList", type);
    },
  },
};
</script>

<style scoped>
.button-sort {
  width: 100px;
}

.sort-button {
  margin: 20px;
}
</style>
