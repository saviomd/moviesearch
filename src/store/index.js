import Vue from 'vue';
import Vuex from 'vuex';
import configuration from './modules/configuration';
import searchResult from './modules/searchResult';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    configuration,
    searchResult,
  },
});

export default store;
