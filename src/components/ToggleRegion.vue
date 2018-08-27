<template lang="pug">
  .btn-group
    button.btn.btn-secondary.btn-sm(
      v-for="region in regions",
      :class=`(region === currentRegion ? "active" : "")`,
      :key="region",
      @click="updateCurrentRegion(region)",
    )= "{{ emojis(`flag-${region}`) }}"
</template>

<script>
import emojis from "@/utils/emojis";
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
    emojis: emoji => emojis(emoji),
    updateCurrentRegion: region => {
      store.dispatch("regions/setCurrent", region);
    }
  }
};
</script>
