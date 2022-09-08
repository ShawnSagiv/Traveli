import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Amsterdam from '../views/Amsterdam.vue'
import Krakow from '../views/Krakow.vue'
import Budapest from '../views/Budapest.vue'
import Dubai from '../views/Dubai.vue'
import Greece from '../views/Greece.vue'
import Istanbul from '../views/Istanbul.vue'
import NewYork from '../views/NewYork.vue'
import Prague from '../views/Prague.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/amsterdam',
    name: 'amsterdam',
    component: Amsterdam
  },
  {
    path: '/krakow',
    name: 'krakow',
    component: Krakow
  },
  {
    path: '/budapest',
    name: 'budapest',
    component: Budapest
  },
  {
    path: '/dubai',
    name: 'dubai',
    component: Dubai
  },
  {
    path: '/istanbul',
    name: 'istanbul',
    component: Istanbul
  },
  {
    path: '/newyork',
    name: 'newyork',
    component: NewYork
  },
  {
    path: '/greece',
    name: 'greece',
    component: Greece
  },
  {
    path: '/prague',
    name: 'prague',
    component: Prague
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0, behavior: 'smooth', };
  },
})



export default router
