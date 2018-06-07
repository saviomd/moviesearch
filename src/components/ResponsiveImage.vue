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
  props: ['alt', 'path', 'type'],
  computed: {
    src() {
      const images = store.state.configuration.images;
      const size = (this.type === 'person' ? images.profile_sizes[0] : images.poster_sizes[0]);
      return `${images.secure_base_url}${size}${this.path}`;
    },
    srcset() {
      const images = store.state.configuration.images;
      const sizes = (this.type === 'person' ? images.profile_sizes : images.poster_sizes);
      const srcset = [];
      sizes.forEach((size) => {
        if (size !== 'original') {
          const srcsetUrl = `${images.secure_base_url}${size}${this.path}`;
          const srcsetSize = `${size.split('w')[1]}w`;
          srcset.push(`${srcsetUrl} ${srcsetSize}`);
        }
      });
      return srcset.toString();
    },
  },
};
</script>
