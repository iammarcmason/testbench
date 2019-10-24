import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { transitionName: 'slide' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: { transitionName: 'slide' },
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('./views/Blog.vue'),
      meta: { transitionName: 'slide' },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./views/Projects.vue'),
      meta: { transitionName: 'slide' },
    },
    {
      path: '/post/:postID',
      name: 'post',
      component: () => import('./views/Post.vue'),
      meta: { transitionName: 'slide' },
    },
    {
      path: '/project/:projectID',
      name: 'project',
      component: () => import('./views/Project.vue'),
      meta: { transitionName: 'slide' },
    },
  ],
});
