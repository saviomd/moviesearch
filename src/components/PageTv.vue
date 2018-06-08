<template lang="pug">
  div(v-if='show')
    h1.h3= '{{ show.name }}'
    .mb-3= '{{ show.overview }}'
    ul.list-unstyled.text-right
      li.mb-3
        a.btn.btn-danger.btn-sm(:href='show.tmdbUrl')= 'TMDb page'
      li.mb-3(v-if='show.homepage')
        a.btn.btn-danger.btn-sm(:href='show.homepage')= 'Homepage'
</template>

<script>
import store from '@/store';

export default {
  name: 'PageTv',
  computed: {
    show() {
      const show = store.getters['tvDetails/show'](this.$route.params.id);
      if (show) {
        show.tmdbUrl = `https://www.themoviedb.org/show/${show.id}`;
      }
      return show;
    },
  },
  mounted: function mountedPageTv() {
    store.dispatch('tvDetails/getShow', this.$route.params.id);
  },
};
</script>
