import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

const Dash = async () => await require('./views/Dash.vue');
const SignIn = async () => await require('./views/SignIn.vue');
const SignUp = async () => await require('./views/SignUp.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'Dash',
      component: Dash
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
});
