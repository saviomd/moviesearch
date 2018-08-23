import Vue from "vue";
import Vuex from "vuex";
import configuration from "./stores/configuration";
import movieDetails from "./stores/movieDetails";
import moviesNowPlaying from "./stores/moviesNowPlaying";
import moviesUpcoming from "./stores/moviesUpcoming";
import personDetails from "./stores/personDetails";
import regions from "./stores/regions";
import searchResult from "./stores/searchResult";
import tvDetails from "./stores/tvDetails";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    configuration,
    movieDetails,
    moviesNowPlaying,
    moviesUpcoming,
    personDetails,
    regions,
    searchResult,
    tvDetails
  }
});
