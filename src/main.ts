import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { Button, Card, Input, Message, Table, Breadcrumb, BreadcrumbItem } from 'element-ui';

Vue.config.productionTip = true;

import { setupAxiosAuth } from '@/helper/axios';

Vue.use(Button);
Vue.use(Card);
Vue.use(Input);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);

setupAxiosAuth();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
