<template lang="pug">
  div
    form-search
    movies-now-playing
</template>

<script>
import FormSearch from '@/components/FormSearch';
import MoviesNowPlaying from '@/components/MoviesNowPlaying';

export default {
  name: 'PageHome',
  components: {
    'form-search': FormSearch,
    'movies-now-playing': MoviesNowPlaying,
  },
};
</script>
