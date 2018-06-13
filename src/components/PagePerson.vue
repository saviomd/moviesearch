<template lang="pug">
  person-details(:id='$route.params.id')
</template>

<script>
import PersonDetails from '@/components/PersonDetails';

export default {
  name: 'PagePerson',
  components: {
    'person-details': PersonDetails,
  },
};
</script>
