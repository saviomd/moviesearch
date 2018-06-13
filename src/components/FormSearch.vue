<template lang="pug">
  form.mb-3(@submit='submitSearch')
    .input-group.input-group-lg
      input.form-control(required,
        placeholder='Movies, people and tv series...',
        type='search', v-model='searchString')
      .input-group-append
        button.btn.btn-danger(type='submit')= 'Search'
</template>

<script>
import router from '@/router';
import store from '@/store';

export default {
  name: 'FormSearch',
  data() {
    return {
      searchString: this.$route.query.q || '',
    };
  },
  methods: {
    submitSearch(event) {
      event.preventDefault();
      const searchString = this.searchString.trim().toLowerCase();
      store.dispatch('searchResult/getResult', searchString).then(() => {
        router.push({ name: 'SearchResult', query: { q: searchString } });
      });
    },
  },
};
</script>
