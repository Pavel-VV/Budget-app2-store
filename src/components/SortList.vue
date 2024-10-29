<template>
  <div class="sort-button">
    <ElButton class="button-sort" @click="sortList('OUTCOME')">Доход</ElButton>
    <ElButton class="button-sort" @click="sortList('INCOME')">Расход</ElButton>
    <ElButton class="button-sort" @click="sortList('ALL')">Всё</ElButton>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SortList",
  methods: {
    ...mapActions("sortList", ["setType"]),
    sortList(type) {
      this.setType(type);
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
