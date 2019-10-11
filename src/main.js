import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import ContentfulVue from 'contentful-vue';

Vue.config.productionTip = false;

Vue.use(ContentfulVue, {
  space: 'm9yozmd1oije',
  accessToken: 'hZ3lFFV4YDId6LQXkQM8ZFguCun_wIo3annXnueFvDA',
});

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
