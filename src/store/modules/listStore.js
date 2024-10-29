import Vue from "vue";

const listStore = {
  namespaced: true,
  state: {
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
  },
  getters: {
    totalBalance: ({ list }) => {
      return Object.values(list).reduce((acc, el) => {
        return acc + el.value;
      }, 0);
    },
    getList: ({ list }) => list,
  },
  mutations: {
    ADD_DATA_LIST(state, data) {
      Vue.set(state.list, data.id, data);
    },
    DELETE_DATA_LIST({ list }, id) {
      Vue.delete(list, id);
    },
  },
  actions: {
    addNewData({ commit }, data) {
      const dataObj = { ...data, id: String(Math.random()) };
      commit("ADD_DATA_LIST", dataObj);
    },
    deleteData({ commit }, id) {
      commit("DELETE_DATA_LIST", id);
    },
  },
};

export default listStore;
