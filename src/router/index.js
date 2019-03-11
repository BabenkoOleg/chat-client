import Vue from 'vue';
import Router from 'vue-router';

import authRoutes from './modules/auth';
import profileRoutes from './modules/profile';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    ...authRoutes,
    ...profileRoutes,
  ],
});
