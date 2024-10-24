<template>
  <div id="app">
    <FormData @submitDataForm="onSubmitDataForm" />
    <TotalBalance :total="totalBalance" />
    <SortList @onSortList="sortList" />
    <BudgetList
      :list="list"
      :sortButton="sortButtonList"
      @deleteItemInApp="onDeleteItem"
    />
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import FormData from "@/components/FormData";
import SortList from "@/components/SortList";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    FormData,
    SortList,
  },
  data: () => ({
    list: {
      1: {
        type: "INCOME",
        value: 100,
        comment: "Some comment",
        id: 1,
      },
      2: {
        type: "OUTCOME",
        value: -50,
        comment: "Some outcome comment",
        id: 2,
      },
    },
    sortButtonList: "",
  }),
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id);
    },
    onSubmitDataForm(data) {
      const dataObj = { ...data, id: Math.random() };
      this.$set(this.list, dataObj.id, dataObj);
    },
    sortList(type) {
      console.log("in App:", type);
      this.sortButtonList = type;
    },
  },
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce((acc, el) => {
        return acc + el.value;
      }, 0);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
