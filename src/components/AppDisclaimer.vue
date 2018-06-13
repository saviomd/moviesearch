<template lang="pug">
  .border-secondary.border-top.py-3.small.text-center
    img.mr-1(alt='Powered by TMDb', height='32', :src='imageAttribution')
    br
    = 'This product uses the TMDb API but is not endorsed or certified by TMDb.'
</template>

<script>
import tmdbApi from '@/utils/tmdbApi';

export default {
  name: 'AppDisclaimer',
  data() {
    return {
      imageAttribution: tmdbApi.imageAttribution,
    };
  },
};
</script>
