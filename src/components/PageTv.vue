<template lang="pug">
  tv-details(:id='$route.params.id')
</template>

<script>
import TvDetails from '@/components/TvDetails';

export default {
  name: 'PageTv',
  components: {
    'tv-details': TvDetails,
  },
};
</script>
