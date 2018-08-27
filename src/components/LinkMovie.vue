<template lang="pug">
  router-link.text-white(:to="targetRoute")
    responsive-image(:alt="movie.title", :path="movie.poster_path", type="movie")
    .row
      .col= "{{ releaseDate }}"
      .col-auto
        = "{{ movie.vote_average }}"
        font-awesome-icon.ml-1.text-warning(:icon="['fas', 'star']")
</template>

<script>
import dateFns from "date-fns";
import dateFormats from "@/utils/dateFormats";
import ResponsiveImage from "@/components/ResponsiveImage";
import store from "@/store";

export default {
  name: "LinkMovie",
  props: {
    movie: { type: Object, required: true }
  },
  components: {
    "responsive-image": ResponsiveImage
  },
  computed: {
    releaseDate() {
      return dateFns.format(
        this.movie.release_date,
        dateFormats(store.state.regions.current)
      );
    },
    targetRoute() {
      return {
        name: "Movie",
        params: {
          id: this.movie.id
        }
      };
    }
  }
};
</script>
