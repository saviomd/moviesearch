<template lang="pug">
  img.bg-secondary.w-100(
    :alt='this.alt',
    :src='this.src',
    :srcset='this.srcset',
  )
</template>

<script>
import store from '@/store';

export default {
  name: 'ResponsiveImage',
  props: {
    alt: { type: String, required: true },
    path: { type: String },
    type: { type: String, required: true },
  },
  computed: {
    src() {
      const images = store.state.configuration.images;
      if (this.path && images.profile_sizes && images.poster_sizes) {
        const size = (this.type === 'person' ? images.profile_sizes[0] : images.poster_sizes[0]);
        return `${images.secure_base_url}${size}${this.path}`;
      }
      return null;
    },
    srcset() {
      const images = store.state.configuration.images;
      const sizes = (this.type === 'person' ? images.profile_sizes : images.poster_sizes);
      if (this.path && sizes) {
        const srcset = [];
        sizes.forEach((size) => {
          if (size !== 'original') {
            const srcsetUrl = `${images.secure_base_url}${size}${this.path}`;
            const srcsetSize = `${size.split('w')[1]}w`;
            srcset.push(`${srcsetUrl} ${srcsetSize}`);
          }
        });
        return srcset.toString();
      }
      return null;
    },
  },
};
</script>
