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
    movies() {
      return store.getters['moviesNowPlaying/inRegion']('BR');
    },
  },
  mounted: function mountedMoviesNowPlaying() {
    store.dispatch('moviesNowPlaying/getMovies', 'BR');
  },
};
</script>
