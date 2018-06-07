<template lang="pug">
  a.btn.btn-secondary.btn-block(:href='item.url', target='_blank')
    .no-gutters.row
      .col-4.pr-3
        responsive-image(:alt='item.name', :path='item.image_path', :type='item.item_type')
      .col-8.text-left.text-truncate= '{{ item.name }}'
</template>

<script>
import ResponsiveImage from '@/components/ResponsiveImage';

export default {
  name: 'ButtonResult',
  props: ['item'],
  components: {
    'responsive-image': ResponsiveImage,
  },
};
</script>
