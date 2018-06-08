import Vue from 'vue';
import Vuex from 'vuex';
import configuration from './modules/configuration';
import movieDetails from './modules/movieDetails';
import moviesNowPlaying from './modules/moviesNowPlaying';
import moviesUpcoming from './modules/moviesUpcoming';
import regions from './modules/regions';
import searchResult from './modules/searchResult';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    configuration,
    movieDetails,
    moviesNowPlaying,
    moviesUpcoming,
    regions,
    searchResult,
  },
});

export default store;
