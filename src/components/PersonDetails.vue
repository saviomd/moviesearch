<template lang="pug">
  div(v-if='person')
    .row.mb-3
      .col-6.col-md-4
        responsive-image(:alt='person.name', :path='person.profile_path', type='person')
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
import ResponsiveImage from '@/components/ResponsiveImage';
import store from '@/store';

export default {
  name: 'PersonDetails',
  props: {
    id: { type: [Number, String], required: true },
  },
  components: {
    'responsive-image': ResponsiveImage,
  },
  computed: {
    person() {
      const person = store.getters['personDetails/person'](this.id);
      if (person) {
        person.imdbUrl = (person.imdb_id ? `https://www.imdb.com/name/${person.imdb_id}/` : null);
        person.tmdbUrl = `https://www.themoviedb.org/person/${person.id}`;
      }
      return person;
    },
  },
  mounted: function mountedPersonDetails() {
    store.dispatch('personDetails/getPerson', this.$route.params.id);
  },
};
</script>
