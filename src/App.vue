<template>
  <div id="app">
    <NavBar/>
    <div class="d-flex">
      <SideBar/>
      <div class="" style="width:100%;height:100%">
      <router-view/>
    </div>
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
#app {
  height: 100%;
  width: 100%;
  
  
} 

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
