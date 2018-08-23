<template lang="pug">
  ul.flex-nowrap.list-unstyled.mb-0.overflow-x-scroll.row
    li.col-7.col-sm-5.col-md-4.col-lg-3(v-for="movie in movies",
      :key="movie.id", :value="movie.id")
      link-movie(:movie="movie")
</template>

<script>
import LinkMovie from "@/components/LinkMovie";

export default {
  name: "ListMovies",
  props: {
    movies: { type: Array, required: true }
  },
  components: {
    "link-movie": LinkMovie
  }
};
</script>
