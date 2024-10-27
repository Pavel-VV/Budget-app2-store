<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <template v-if="!isEmpty">
        <div v-for="(item, prop) in getList" :key="prop">
          <BudgetListItem
            v-show="!(item.type === sortButton)"
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
import BudgetListItem from "@/components/BudgetListItem";
import { mapGetters } from "vuex";

export default {
  name: "BudgetList",
  components: {
    BudgetListItem,
  },
  props: {
    // list: {
    //   type: Object,
    //   default: () => ({}),
    // },
    sortButton: {
      type: String,
      default: "ALL",
    },
  },
  data: () => ({
    header: "Budjet List",
    emptyTitle: "Empty List",
  }),
  methods: {
    onDeleteElement(id) {
      this.$emit("deleteItemInApp", id);
    },
  },
  computed: {
    ...mapGetters("listStore", ["getList"]),
    isEmpty() {
      return !Object.keys(this.getList).length;
    },
    sortList() {
      console.log(this.sortButton);
      return 1;
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
