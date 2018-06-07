<template lang="pug">
  .border.border-secondary.mb-3.p-3.rounded
    h1.h3= 'Movies now playing'
    list-movies(:movies='movies')
</template>

<script>
import ListMovies from '@/components/ListMovies';
import store from '@/store';

export default {
  name: 'MoviesNowPlaying',
  components: {
    'list-movies': ListMovies,
  },
  computed: {
    currentRegion() {
      return store.state.regions.current;
    },
    movies() {
      return store.getters['moviesNowPlaying/inRegion'](this.currentRegion);
    },
  },
  mounted: function mountedMoviesNowPlaying() {
    store.dispatch('moviesNowPlaying/getMovies', this.currentRegion);
  },
  watch: {
    currentRegion: function watchCurrentRegion() {
      store.dispatch('moviesNowPlaying/getMovies', this.currentRegion);
    },
  },
};
</script>
