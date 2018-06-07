<template lang="pug">
  footer.border-secondary.border-top.mb-3.pt-3.small.text-center
    != '&copy; 2018-{{ year }}'
    a.ml-1.text-danger(href='http://saviomd.com/', rel='noopener noreferrer', target='_blank')
      img.mr-1(alt='saviomd.com', src='https://saviomd.com/img/favicon.png', height='15', width='15')
      = 'Sávio Mendes'
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      year: (new Date()).getFullYear(),
    };
  },
};
</script>
