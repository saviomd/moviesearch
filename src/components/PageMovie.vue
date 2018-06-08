<template lang="pug">
  div(v-if='movie')
    h1.h3= '{{ movie.title }}'
    h2.h5= '{{ movie.tagline }}'
    .mb-3= '{{ movie.overview }}'
</template>

<script>
import store from '@/store';

export default {
  name: 'PageMovie',
  computed: {
    movie() {
      return store.getters['movieDetails/movie'](this.$route.params.id);
    },
  },
  mounted: function mountedPageMovie() {
    store.dispatch('movieDetails/getMovie', this.$route.params.id);
  },
};
</script>
