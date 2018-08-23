<template lang="pug">
  ul.list-unstyled
    li(v-for="item in result", :key="item.id", :value="item.id")
      button-result.mb-3(:item="item")
</template>

<script>
import ButtonResult from "@/components/ButtonResult";
import store from "@/store";

export default {
  name: "SearchResult",
  components: {
    "button-result": ButtonResult
  },
  computed: {
    result() {
      return store.getters["searchResult/resultBySearchString"](
        this.$route.query.q
      );
    }
  },
  mounted: function mountedSearchResult() {
    store.dispatch("searchResult/getResult", this.$route.query.q);
  }
};
</script>
