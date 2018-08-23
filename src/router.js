import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Movie from "./views/Movie";
import NotFound from "./views/NotFound";
import Person from "./views/Person";
import SearchResult from "./views/SearchResult";
import Tv from "./views/Tv";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/movie/:id",
      name: "Movie",
      component: Movie
    },
    {
      path: "/person/:id",
      name: "Person",
      component: Person
    },
    {
      path: "/search",
      name: "SearchResult",
      component: SearchResult
    },
    {
      path: "/tv/:id",
      name: "Tv",
      component: Tv
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    }
  ]
});
