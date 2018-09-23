/* eslint-disable no-new */
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import goods from '@/components/goods/goods';
import ratings from '@/components/ratings/ratings';
import VueResource from 'vue-resource';

import seller from '@/components/seller/seller';
// import './common/stylus/index';
import 'font-awesome/css/font-awesome.css';

Vue.use(VueRouter);
Vue.use(VueResource);

let router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/seller',
      component: seller
    }
  ]
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
export default router;
