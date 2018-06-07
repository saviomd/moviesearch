import Vue from 'vue';
import Vuex from 'vuex';
import configuration from './modules/configuration';
import moviesNowPlaying from './modules/moviesNowPlaying';
import moviesUpcoming from './modules/moviesUpcoming';
import searchResult from './modules/searchResult';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    configuration,
    moviesNowPlaying,
    moviesUpcoming,
    searchResult,
  },
});

export default store;
