import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import OneMovie from '../views/OneMovie.vue';
import OneTvShow from '../views/OneTvShow.vue';
import TvShows from '../views/TvShow.vue';
import MyFavorites from '../views/MyFavorites.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/OneMovie/:id',
    name: 'OneMovie',
    component: OneMovie,
  },
  {
    path: '/TvShows',
    name: 'TvShows',
    component: TvShows,
  },
  {
    path: '/OneTvShow/:id',
    name: 'OneTvShow',
    component: OneTvShow,
  },
  {
    path: '/MyFavorites',
    name: 'MyFavorites',
    component: MyFavorites,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
