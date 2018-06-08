<template lang="pug">
  div(v-if='person')
    h1.h3= '{{ person.name }}'
    .mb-3= '{{ person.biography }}'
    ul.list-unstyled.text-right
      li.mb-3
        a.btn.btn-danger.btn-sm(:href='person.tmdbUrl')= 'TMDb page'
      li.mb-3(v-if='person.imdbUrl')
        a.btn.btn-danger.btn-sm(:href='person.imdbUrl')= 'IMDb page'
      li.mb-3(v-if='person.homepage')
        a.btn.btn-danger.btn-sm(:href='person.homepage')= 'Homepage'
</template>

<script>
import store from '@/store';

export default {
  name: 'PageMovie',
  computed: {
    person() {
      const person = store.getters['personDetails/person'](this.$route.params.id);
      if (person) {
        person.imdbUrl = (person.imdb_id ? `https://www.imdb.com/name/${person.imdb_id}/` : null);
        person.tmdbUrl = `https://www.themoviedb.org/person/${person.id}`;
      }
      return person;
    },
  },
  mounted: function mountedPageMovie() {
    store.dispatch('personDetails/getPerson', this.$route.params.id);
  },
};
</script>
