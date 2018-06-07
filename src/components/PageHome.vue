<template lang="pug">
  div
    form-search
    movies-now-playing
    movies-upcoming
</template>

<script>
import FormSearch from '@/components/FormSearch';
import MoviesNowPlaying from '@/components/MoviesNowPlaying';
import MoviesUpcoming from '@/components/MoviesUpcoming';

export default {
  name: 'PageHome',
  components: {
    'form-search': FormSearch,
    'movies-now-playing': MoviesNowPlaying,
    'movies-upcoming': MoviesUpcoming,
  },
};
</script>
