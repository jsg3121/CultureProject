import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    history: [],
    cultureList: [],
    cultureCategory: ""
  },
  mutations: {
    history(state, culture) {
      let overlap = false;
      if (state.history.length >= 1) {
        if (state.history[0].cultcode == culture.cultcode) {
          overlap = true;
        }
      }
      if (state.history.length >= 2) {
        if (state.history[1].cultcode == culture.cultcode) {
          state.history.splice(1, 1);
          overlap = false;
        }
      }
      if (overlap == false) state.history.unshift(culture);
      if (state.history.length == 4) state.history.pop();
    },
    cultureCategory(state, category) {
      state.cultureCategory = category;
    },
    cultureList(state, list) {
      state.cultureList = list;
    }
  },
  plugins: [createPersistedState()]
});
