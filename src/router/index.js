import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Movie from '@/pages/Movie';
import NotFound from '@/pages/NotFound';
import Person from '@/pages/Person';
import SearchResult from '@/pages/SearchResult';
import Tv from '@/pages/Tv';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      component: Movie,
    },
    {
      path: '/person/:id',
      name: 'Person',
      component: Person,
    },
    {
      path: '/search',
      name: 'SearchResult',
      component: SearchResult,
    },
    {
      path: '/tv/:id',
      name: 'Tv',
      component: Tv,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
