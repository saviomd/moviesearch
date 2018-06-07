<template lang="pug">
  ul.list-unstyled
    li(v-for='item in result', :key="item.id", :value="item.id")
      a.text-white(:href='item.url', target='_blank')
        = '{{ item.name }}'
</template>

<script>
import store from '@/store';

export default {
  name: 'SearchResult',
  computed: {
    result() {
      return store.getters['searchResult/resultBySearchString'](this.$route.query.q);
    },
  },
  mounted: function mountedSearchResult() {
    store.dispatch('searchResult/getResult', this.$route.query.q);
  },
};
</script>
