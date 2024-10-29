import Vue from "vue";

const sortList = {
  namespaced: true,
  state: {
    sortButton: {
      type: "ALL",
    },
  },
  getters: {
    getSortType: ({ sortButton }) => sortButton.type,
  },
  mutations: {
    SET_TYPE(state, typeString) {
      Vue.set(state.sortButton, "type", typeString);
    },
  },
  actions: {
    setType({ commit }, typeString) {
      commit("SET_TYPE", typeString);
    },
  },
};

export default sortList;
