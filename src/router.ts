import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

const Dash = async () => await require('./views/Dash.vue');
const Create = async () => await require('./views/Create.vue');
const Learn = async () => await require('./views/Learn.vue');
const SignIn = async () => await require('./views/SignIn.vue');
const SignUp = async () => await require('./views/SignUp.vue');
const LearnComplete = async () => await require('./views/LearnComplete')

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/learn',
      name: 'learn',
      component: Learn
    },
    {
      path: '/learn-complete',
      name: 'learn-complete',
      component: LearnComplete
    },
    {
      path: '/dash',
      name: 'dash',
      component: Dash
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '*',
      redirect: { name: 'dash' }
    }
  ]
});
