<template lang="pug">
  movie-details(:id='$route.params.id')
</template>

<script>
import MovieDetails from '@/components/MovieDetails';

export default {
  name: 'PageMovie',
  components: {
    'movie-details': MovieDetails,
  },
};
</script>
