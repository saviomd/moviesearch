<template lang="pug">
  router-link.btn.btn-secondary.btn-block(:to="targetRoute")
    .no-gutters.row
      .col-4.pr-3
        responsive-image(:alt="item.name", :path="item.image_path", :type="item.media_type")
      .col-8
        .text-right
          font-awesome-icon(:icon="['fas', icon]")
        .text-left.text-truncate= "{{ item.name }}"
</template>

<script>
import icons from "@/utils/icons";
import ResponsiveImage from "@/components/ResponsiveImage";

export default {
  name: "ButtonResult",
  props: {
    item: { type: Object, required: true }
  },
  components: {
    "responsive-image": ResponsiveImage
  },
  computed: {
    icon() {
      return icons(this.item.media_type);
    },
    targetRoute() {
      const pageNames = {
        movie: "Movie",
        person: "Person",
        tv: "Tv"
      };
      return {
        name: pageNames[this.item.media_type],
        params: {
          id: this.item.id
        }
      };
    }
  }
};
</script>
