<template lang="pug">
  div(v-if='person')
    h1.h3= '{{ person.name }}'
    .mb-3= '{{ person.biography }}'
</template>

<script>
import store from '@/store';

export default {
  name: 'PageMovie',
  computed: {
    person() {
      return store.getters['personDetails/person'](this.$route.params.id);
    },
  },
  mounted: function mountedPageMovie() {
    store.dispatch('personDetails/getPerson', this.$route.params.id);
  },
};
</script>
