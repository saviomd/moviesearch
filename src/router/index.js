import Vue from 'vue';
import Router from 'vue-router';
import PageHome from '@/components/PageHome';
import PageNotFound from '@/components/PageNotFound';
import PageSearchResult from '@/components/PageSearchResult';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: PageHome,
    },
    {
      path: '/search',
      name: 'PageSearchResult',
      component: PageSearchResult,
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound,
    },
  ],
});
