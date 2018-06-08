import Vue from 'vue';
import Router from 'vue-router';
import PageHome from '@/components/PageHome';
import PageMovie from '@/components/PageMovie';
import PageNotFound from '@/components/PageNotFound';
import PagePerson from '@/components/PagePerson';
import PageSearchResult from '@/components/PageSearchResult';
import PageTv from '@/components/PageTv';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: PageHome,
    },
    {
      path: '/movie/:id',
      name: 'PageMovie',
      component: PageMovie,
    },
    {
      path: '/person/:id',
      name: 'PagePerson',
      component: PagePerson,
    },
    {
      path: '/search',
      name: 'PageSearchResult',
      component: PageSearchResult,
    },
    {
      path: '/tv/:id',
      name: 'PageTv',
      component: PageTv,
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound,
    },
  ],
});
