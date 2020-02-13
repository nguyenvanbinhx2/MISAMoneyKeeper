import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase'

import 'bootstrap'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVueTreeView from 'bootstrap-vue-treeview'

export const EventBus = new Vue();
Vue.use(BootstrapVueTreeView)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDggpXXST2ipJnCUrthOWPaqZnVlxoTEuI",
  authDomain: "vuejstesting-40460.firebaseapp.com",
  databaseURL: "https://vuejstesting-40460.firebaseio.com",
  projectId: "vuejstesting-40460",
  storageBucket: "vuejstesting-40460.appspot.com",
  messagingSenderId: "1054171225500",
  appId: "1:1054171225500:web:f1527ddaad4cc0ffcdfc59",
  measurementId: "G-EWG873PM8V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = app.database();


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
