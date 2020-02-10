import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import DayHistory from '../components/DayHistory.vue'
// import Welcome from '../views/Welcome.vue' 
import ViewDay from '../components/ViewDay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/viewday',
    name:'viewday',
    component:ViewDay
  },
  {
    path:'/dayhistory',
    name:'dayhistory',
    component: DayHistory
  },
  {
    path:'/login',
    name:'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/welcome',
    name:'welcome',
    component: () => import('../views/Welcome.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router