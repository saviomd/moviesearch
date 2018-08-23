<template lang="pug">
  .btn-group
    button.btn.btn-secondary.btn-sm(
      v-for="region in regions",
      :class=`(region === currentRegion ? "active" : "")`,
      :key="region",
      @click="updateCurrentRegion(region)",
    )= "{{ region }}"
</template>

<script>
import store from "@/store";

export default {
  name: "ToggleRegion",
  computed: {
    currentRegion() {
      return store.state.regions.current;
    },
    regions() {
      return store.state.regions.list;
    }
  },
  methods: {
    updateCurrentRegion: region => {
      store.dispatch("regions/setCurrent", region);
    }
  }
};
</script>
