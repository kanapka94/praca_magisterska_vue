import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ErrorPage from './views/ErrorPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "search" */ './views/Search.vue')
    },
    { path: '/lists', redirect: '/lists/ingredients' },
    {
      path: '/lists/ingredients',
      name: 'lists-ingredients',
      component: () => import(/* webpackChunkName: "ingredients" */ './views/lists/Ingredients.vue')
    },
    {
      path: '/lists/glasses',
      name: 'lists-glasses',
      component: () => import(/* webpackChunkName: "glasses" */ './views/lists/Glasses.vue')
    },
    {
      path: '/lists/alcohol',
      name: 'lists-alcohol',
      component: () => import(/* webpackChunkName: "alcohol" */ './views/lists/Alcohol.vue')
    },
    {
      path: '/lists/categories',
      name: 'lists-categories',
      component: () => import(/* webpackChunkName: "categories" */ './views/lists/Categories.vue')
    },
    {
      path: '/drink/:id',
      name: 'drink',
      component: () => import(/* webpackChunkName: "drink" */ './views/Drink.vue')
    },
    {
      path: '/ingredient/:id',
      name: 'ingredient',
      component: () => import(/* webpackChunkName: "ingredient" */ './views/Ingredient.vue')
    },
    {
      path: '/error',
      alias: '*',
      name: 'error',
      component: ErrorPage,
      props: true
    }
  ]
})
