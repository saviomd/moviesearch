<template lang="pug">
  .border.border-secondary.mb-3.p-3.rounded
    h1.h3= "Upcoming movies"
    list-movies(:movies="movies")
</template>

<script>
import ListMovies from "@/components/ListMovies";
import store from "@/store";

export default {
  name: "MoviesUpcoming",
  components: {
    "list-movies": ListMovies
  },
  computed: {
    currentRegion() {
      return store.state.regions.current;
    },
    movies() {
      return store.getters["moviesUpcoming/inRegion"](this.currentRegion);
    }
  },
  mounted: function mountedMoviesUpcoming() {
    store.dispatch("moviesUpcoming/getMovies", this.currentRegion);
  },
  watch: {
    currentRegion: function watchCurrentRegion() {
      store.dispatch("moviesUpcoming/getMovies", this.currentRegion);
    }
  }
};
</script>
