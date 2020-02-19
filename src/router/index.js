import Vue from 'vue'
import VueRouter from 'vue-router'
import DayHistory from '../components/DayHistory.vue'
import ViewDay from '../components/ViewDay.vue'
import Account from '../views/Account.vue'
import Home from '../views/Home.vue'

import Report from '../views/Report.vue'

import ReportAnalysis from '../views/report/ReportAnalysis.vue'
import ReportEvents from '../views/report/ReportEvents.vue'
// import ReportCharbar from '../views/report/ReportCharbar.vue'
import ReportPayee from '../views/report/ReportPayee.vue'
import ReportFinancial from '../views/report/ReportFinancial.vue'
import ReportLentBorrowed from '../views/report/ReportLentBorrowed.vue'

import Other from '../views/Other.vue'
import OtherCategories from '../views/other/OtherCategories.vue'
import OtherConnectFriends from '../views/other/OtherConnectFriends.vue'
import OtherHelp from '../views/other/OtherHelp.vue'
import OtherRecurring from '../views/other/OtherRecurring.vue'
import OtherSettings from '../views/other/OtherSettings.vue'

import AccountDeposit from '../views/account/AccountDeposit.vue'
import AccountMainAccount from '../views/account/AccountMainAccount.vue'
import AccountSaveMoney from '../views/account/AccountSaveMoney.vue'

 
Vue.use(VueRouter)

const routes = [
  {
    path:"/home",
    name:'home',
    component :Home,
    meta: { transition: 'fade-in-right' },
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
    component: Report,
    children: [
      {
        path: 'events',
        name: 'ReportEvents',
        component: ReportEvents

      },
      {
        path: 'financial',
        name: 'ReportFinancial',
        component: ReportFinancial

      },
      {
        path: 'analysis',
        name: 'ReportFinancial',
        component: ReportAnalysis

      },
      // {
      //   path: 'charbar',
      //   name: 'ReportCharbar',
      //   component: ReportCharbar

      // },
      {
        path: 'lentborrowed',
        name: 'ReportLentBorrowed',
        component: ReportLentBorrowed

      },
      {
        path: 'payee',
        name: 'ReportPayee',
        component: ReportPayee

      },
      
    ]
  },

  {
    path: '/account',
    name: 'Account',
    component: Account,
    children:[
      {
        path: 'deposit',
        name: 'AccountDeposit',
        component: AccountDeposit

      },
      {
        path: 'mainAccount',
        name: 'AccountMainAccount',
        component: AccountMainAccount

      },
      {
        path: 'saveMoney',
        name: ' AccountSaveMoney',
        component: AccountSaveMoney

      },

    ]
  },
  {
    path:'/other',
    name:'other',
    component :Other,
    children:[
      {
        path: 'categories',
        name: 'OtherCategories',
        component: OtherCategories

      },
      {
        path: 'connectFriends',
        name: 'OtherConnectFriends',
        component: OtherConnectFriends

      },
      {
        path: 'help',
        name: 'OtherHelp',
        component: OtherHelp

      },
      {
        path: 'recurring',
        name: 'OtherRecurring',
        component: OtherRecurring

      },
      {
        path: 'settings',
        name: 'OtherSettings',
        component: OtherSettings

      },
  ]

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
