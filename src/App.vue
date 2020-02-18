<template>
  <div id="app">
    <NavBar/>
    <div class="d-flex">
      <SideBar/>
        <div class="main">
            <transition  name="view" >
              <router-view style="overflow:hidden"></router-view>
</transition>

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
      prevHeight:0,
      authenciate:false,

    }

  },
  
   }
</script>


<style>
#app {
  height: 100%;
  width: 100%;
  
  
  
} 
.main{
  width: 100%;
  height: 100%;
  
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
.view-enter-active,.view-leave-active{
  transition: opacity 0.3s ease-in-out,transform 0.3s ease;

}
.view-enter-active{
  transition-delay: 0.5s
}
.view-enter{
  opacity: 0;
  transform: translateX(-20px)
}
.view-enter-to,.view-leave{
  opacity: 0.5;
  transform: translateX(0px);
  z-index: -1;
}
.view-leave-to{
  opacity: 0;
  transform: translateX(100px);
  z-index: -1
}
</style>
