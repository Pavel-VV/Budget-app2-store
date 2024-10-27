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
  mutations: {},
  actions: {},
};

export default listStore;
