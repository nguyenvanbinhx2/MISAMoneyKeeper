<template>
  <div id="app">
    <NavBar/>
    <div class="d-flex">
      <SideBar/>
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import NavBar from '../src/components/Navbar.vue'
import SideBar from '../src/components/Sidebar.vue'
export default {
  components:{
    NavBar,
    SideBar
  },
  name:'app',
  data(){
    return {
      authenciate:false,
      mockAccount:{
        username:"admin",
        password:"1"
      }
    }

  },
  mounted(){
    if(!this.authenciate){
      // this.$router.replace({name:'Login'});
      // this.$router.push('login')

    }
  },
  methods:{
    setAuthenciate(status){
      this.authenciate =status;

    },
    logout(){
      this.authenciate =false;
    }
  }
}
</script>


<style>
/* #app, .d-flex{
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
  
} */

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
