import Vue from 'vue';
import Vuex from 'vuex';
import searchResult from './modules/searchResult';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    searchResult,
  },
});

export default store;
