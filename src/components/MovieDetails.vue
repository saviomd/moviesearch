<template lang="pug">
  div(v-if='movie')
    .row.mb-3
      .col-6.col-md-4
        responsive-image(:alt='movie.title', :path='movie.poster_path', type='movie')
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
import ResponsiveImage from '@/components/ResponsiveImage';
import store from '@/store';

export default {
  name: 'MovieDetails',
  props: ['id'],
  components: {
    'responsive-image': ResponsiveImage,
  },
  computed: {
    movie() {
      const movie = store.getters['movieDetails/movie'](this.id);
      if (movie) {
        movie.imdbUrl = (movie.imdb_id ? `https://www.imdb.com/title/${movie.imdb_id}/` : null);
        movie.tmdbUrl = `https://www.themoviedb.org/movie/${movie.id}`;
      }
      return movie;
    },
  },
  mounted: function mountedMovieDetails() {
    store.dispatch('movieDetails/getMovie', this.$route.params.id);
  },
};
</script>
