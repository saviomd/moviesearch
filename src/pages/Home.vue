<template lang="pug">
  div
    form-search
    .mb-3.text-right
      toggle-region
    movies-now-playing
    movies-upcoming
</template>

<script>
import FormSearch from '@/components/FormSearch';
import MoviesNowPlaying from '@/components/MoviesNowPlaying';
import MoviesUpcoming from '@/components/MoviesUpcoming';
import ToggleRegion from '@/components/ToggleRegion';

export default {
  name: 'Home',
  components: {
    'form-search': FormSearch,
    'movies-now-playing': MoviesNowPlaying,
    'movies-upcoming': MoviesUpcoming,
    'toggle-region': ToggleRegion,
  },
};
</script>
