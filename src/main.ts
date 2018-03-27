import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { Button, Card, Input, Message } from 'element-ui';

Vue.config.productionTip = true;

import { setupAxiosAuth } from '@/helper/axios';

Vue.use(Button);
Vue.use(Card);
Vue.use(Input);

setupAxiosAuth();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
