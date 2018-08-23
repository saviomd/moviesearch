<template lang="pug">
  router-link.text-white(:to="targetRoute")
    responsive-image(:alt="movie.title", :path="movie.poster_path", type="movie")
    .row
      .col= "{{ movie.release_date }}"
      .col-auto= "{{ movie.vote_average }}"
</template>

<script>
import ResponsiveImage from "@/components/ResponsiveImage";

export default {
  name: "LinkMovie",
  props: {
    movie: { type: Object, required: true }
  },
  components: {
    "responsive-image": ResponsiveImage
  },
  computed: {
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
