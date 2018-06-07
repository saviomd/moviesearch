<template lang="pug">
  #app.container-fluid
    .justify-content-center.row
      .col-12.col-md-10
        app-header
        router-view
        app-disclaimer
        app-footer
</template>

<script>
import AppDisclaimer from '@/components/AppDisclaimer';
import AppFooter from '@/components/AppFooter';
import AppHeader from '@/components/AppHeader';

export default {
  name: 'App',
  components: {
    'app-disclaimer': AppDisclaimer,
    'app-footer': AppFooter,
    'app-header': AppHeader,
  },
};
</script>
