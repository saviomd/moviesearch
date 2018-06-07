import Vue from 'vue';
import Vuex from 'vuex';
import configuration from './modules/configuration';
import moviesNowPlaying from './modules/moviesNowPlaying';
import searchResult from './modules/searchResult';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    configuration,
    moviesNowPlaying,
    searchResult,
  },
});

export default store;
