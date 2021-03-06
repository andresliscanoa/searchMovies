import Vue       from 'vue'
import VueRouter from 'vue-router'
import Home      from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path     : '/',
    name     : 'Home',
    component: Home
  },
  {
    path     : '/movie/:id',
    name     : 'Movie',
    component: () => import(/* webpackChunkName: "about" */ '../views/Movie.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
