import Vue from 'vue';
import Vuex from 'vuex';
import configuration from './modules/configuration';
import movieDetails from './modules/movieDetails';
import moviesNowPlaying from './modules/moviesNowPlaying';
import moviesUpcoming from './modules/moviesUpcoming';
import personDetails from './modules/personDetails';
import regions from './modules/regions';
import searchResult from './modules/searchResult';
import tvDetails from './modules/tvDetails';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    configuration,
    movieDetails,
    moviesNowPlaying,
    moviesUpcoming,
    personDetails,
    regions,
    searchResult,
    tvDetails,
  },
});

export default store;
