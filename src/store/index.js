import Vue from 'vue';
import Vuex from 'vuex';
import configuration from './modules/configuration';
import moviesNowPlaying from './modules/moviesNowPlaying';
import moviesUpcoming from './modules/moviesUpcoming';
import regions from './modules/regions';
import searchResult from './modules/searchResult';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    configuration,
    moviesNowPlaying,
    moviesUpcoming,
    regions,
    searchResult,
  },
});

export default store;
