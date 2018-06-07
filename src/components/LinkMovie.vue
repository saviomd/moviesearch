<template lang="pug">
  a.text-white(:href='movie.url', target='_blank')
    responsive-image(:alt='movie.title', :path='movie.poster_path', type='movie')
    .row
      .col= '{{ movie.release_date }}'
      .col-auto= '{{ movie.vote_average }}'
</template>

<script>
import ResponsiveImage from '@/components/ResponsiveImage';

export default {
  name: 'ListMovies',
  props: ['movie'],
  components: {
    'responsive-image': ResponsiveImage,
  },
};
</script>
