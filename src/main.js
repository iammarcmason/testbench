import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import ContentfulVue from 'contentful-vue';
import VueDisqus from 'vue-disqus';
import VueAnalytics from 'vue-analytics';

Vue.use(VueDisqus);
Vue.use(VueAnalytics, {
  id: 'UA-149893925-1',
  router,
});
Vue.config.productionTip = false;

Vue.use(ContentfulVue, {
  space: 'm9yozmd1oije',
  accessToken: 'hZ3lFFV4YDId6LQXkQM8ZFguCun_wIo3annXnueFvDA',
});

new Vue({
  router,
  vuetify,
  VueDisqus,
  render: h => h(App),
}).$mount('#app');
