<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <template v-if="!isEmpty">
        <div v-for="(item, prop) in getList" :key="prop">
          <BudgetListItem
            v-show="!(item.type === getSortType)"
            :listItem="item"
            @deleteItem="onDeleteElement"
          />
        </div>
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
    </ElCard>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import BudgetListItem from "@/components/BudgetListItem";

export default {
  name: "BudgetList",
  components: {
    BudgetListItem,
  },
  data: () => ({
    header: "Budjet List",
    emptyTitle: "Empty List",
  }),
  methods: {
    ...mapActions("listStore", ["deleteData"]),
    onDeleteElement(id) {
      this.deleteData(id);
      // this.$emit("deleteItemInApp", id);
    },
  },
  computed: {
    ...mapGetters("listStore", ["getList"]),
    ...mapGetters("sortList", ["getSortType"]),
    isEmpty() {
      return !Object.keys(this.getList).length;
    },
  },
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
</style>
