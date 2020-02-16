import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import DayHistory from '../components/DayHistory.vue'
import Welcome from '../views/Welcome.vue' 
import ViewDay from '../components/ViewDay.vue'
import Finance from '../components/Finance'
import Home from '../views/Home.vue'
import Other from '../views/Other.vue'
import Report from '../views/Report.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:"/home",
    name:'home',
    component :Home
  },
  {
    path: '/',
    name: 'welcome',
    component: Welcome
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
    path:'/report',
    name:'report',
    component: Report
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
    path: '/finance',
    name: 'finance',
    component: Finance
  },
  {
    path:'/other',
    name:'other',
    component :Other
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
