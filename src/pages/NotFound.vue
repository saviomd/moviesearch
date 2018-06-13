<template lang="pug">
  .mb-3.text-center
    h1.h3= 'Page not found'
    p= `This page doesn't exist!`
    router-link.btn.btn-danger(to='/')= 'Go to homepage'
</template>

<script>

export default {
  name: 'NotFound',
};
</script>
