import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Main from './views/Main.vue';

const SignIn = async () => await require('./views/SignIn.vue');
const SignUp = async () => await require('./views/SignUp.vue');
const Dash = async () => await require('./views/Dash.vue');
const Create = async () => await require('./views/Create.vue');
const CardList = async () => await require('./views/CardList.vue');
const Learn = async () => await require('./views/Learn.vue');
const LearnComplete = async () => await require('./views/LearnComplete');
const ProfilePage = async () => await require('./views/Profile/ProfilePage');
const LearningItemPage = async () => await require('./views/Profile/LearningItemPage');

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
    {
      path: '',
      component: Main,
      children: [
        {
          path: '/create',
          name: 'create',
          component: Create
        },
        {
          path: '/cards',
          name: 'cards',
          component: CardList
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
          path: '/profile',
          name: 'profile',
          component: ProfilePage,
          children: [
            {
              path: 'learning-item',
              name: 'learning-item',
              component: LearningItemPage
            },
            {
              path: '',
              redirect: { name: 'learning-item' }
            },
           
          ]
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
    }
  ]
});
