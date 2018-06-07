<template lang="pug">
  a.btn.btn-secondary.btn-block(:href='item.url', target='_blank')
    = '{{ item.name }}'
</template>

<script>
export default {
  name: 'ButtonResult',
  props: ['item'],
};
</script>
