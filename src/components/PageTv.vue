<template lang="pug">
  div(v-if='show')
    h1.h3= '{{ show.name }}'
    .mb-3= '{{ show.overview }}'
</template>

<script>
import store from '@/store';

export default {
  name: 'PageTv',
  computed: {
    show() {
      return store.getters['tvDetails/show'](this.$route.params.id);
    },
  },
  mounted: function mountedPageTv() {
    store.dispatch('tvDetails/getShow', this.$route.params.id);
  },
};
</script>
