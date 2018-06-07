<template lang="pug">
  div
    form-search
    search-result
</template>

<script>
import FormSearch from '@/components/FormSearch';
import SearchResult from '@/components/SearchResult';

export default {
  name: 'PageSearchResult',
  components: {
    'form-search': FormSearch,
    'search-result': SearchResult,
  },
};
</script>
