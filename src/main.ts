import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { Button, Card, Input, Breadcrumb, BreadcrumbItem } from 'element-ui';

Vue.config.productionTip = true;

import { setupAxiosInterceptor } from '@/helper/http-interceptor';

Vue.use(Button);
Vue.use(Card);
Vue.use(Input);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);

setupAxiosInterceptor();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
