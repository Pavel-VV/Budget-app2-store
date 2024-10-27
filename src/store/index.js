import Vue from "vue";
import Vuex from "vuex";
import listStore from "./modules/listStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    listStore,
  },
});
