import { createStore } from "vuex";

export default createStore({
  state: {
    data: {},
  },
  getters: {
    getData: (state) => state.data,
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    },
  },
  actions: {},
  modules: {},
});
