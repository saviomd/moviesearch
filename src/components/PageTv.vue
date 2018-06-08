<template lang="pug">
  div(v-if='show')
    .row.mb-3
      .col-6.col-md-4
        responsive-image(:alt='show.title', :path='show.poster_path', type='show')
    h1.h3= '{{ show.name }}'
    .mb-3= '{{ show.overview }}'
    ul.list-unstyled.text-right
      li.mb-3
        a.btn.btn-danger.btn-sm(:href='show.tmdbUrl')= 'TMDb page'
      li.mb-3(v-if='show.homepage')
        a.btn.btn-danger.btn-sm(:href='show.homepage')= 'Homepage'
</template>

<script>
import ResponsiveImage from '@/components/ResponsiveImage';
import store from '@/store';

export default {
  name: 'PageTv',
  components: {
    'responsive-image': ResponsiveImage,
  },
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
