import Vue from 'vue';
import VueRouter from 'vue-router';
import Catalog from './views/Catalog.vue';
import Card from './views/Card.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/giftcards/:id',
      name: 'giftcards',
      component: Catalog,
    },
    {
      path: '/card',
      name: 'card',
      component: Card,
    },
    { path: '/', redirect: '/giftcards/1' },
    { path: '/giftcards', redirect: '/giftcards/1' },
  ],
});

export default router
