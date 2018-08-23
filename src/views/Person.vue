<template lang="pug">
  person-details(:id='$route.params.id')
</template>

<script>
import PersonDetails from "@/components/PersonDetails";

export default {
  name: "Person",
  components: {
    "person-details": PersonDetails
  }
};
</script>
