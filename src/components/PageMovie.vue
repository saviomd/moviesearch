<template lang="pug">
  div(v-if='movie')
    h1.h3= '{{ movie.title }}'
    h2.h5= '{{ movie.tagline }}'
    .mb-3= '{{ movie.overview }}'
    ul.list-unstyled.text-right
      li.mb-3
        a.btn.btn-danger.btn-sm(:href='movie.tmdbUrl')= 'TMDb page'
      li.mb-3(v-if='movie.imdbUrl')
        a.btn.btn-danger.btn-sm(:href='movie.imdbUrl')= 'IMDb page'
      li.mb-3(v-if='movie.homepage')
        a.btn.btn-danger.btn-sm(:href='movie.homepage')= 'Homepage'
</template>

<script>
import store from '@/store';

export default {
  name: 'PageMovie',
  computed: {
    movie() {
      const movie = store.getters['movieDetails/movie'](this.$route.params.id);
      if (movie) {
        movie.imdbUrl = (movie.imdb_id ? `https://www.imdb.com/title/${movie.imdb_id}/` : null);
        movie.tmdbUrl = `https://www.themoviedb.org/movie/${movie.id}`;
      }
      return movie;
    },
  },
  mounted: function mountedPageMovie() {
    store.dispatch('movieDetails/getMovie', this.$route.params.id);
  },
};
</script>
