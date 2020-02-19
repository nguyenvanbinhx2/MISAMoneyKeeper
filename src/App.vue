<template>
  <div id="app">
    

    <div class="d-flex " style="height:100vh;width:100%">
      <SideBar />
      <div class="right-main" >
          <NavBar />
        <div class="main"> 
          <transition name="view">
        <router-view />
        </transition>
        </div>
        
      </div>

    </div>
  </div>
</template>

<script>
import NavBar from "../src/components/layouts/Navbar.vue";
import SideBar from "../src/components/layouts/Sidebar.vue";
export default {  
  components: {
    NavBar,
    SideBar
  },
  name: "app",
  data() {
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
.right-main{
  margin-left: 90px;
  width: 100%;
  z-index: 1;
}
.main{
  width: 100%;
  height: 100%;
  margin-top: 66px !important;
  overflow: hidden;

  
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
  transition: opacity 0 ease-in-out,transform 0 ease;

}
.view-enter-active{
  transition-delay: 0.2s
}
.view-enter{
  opacity: 0;
  transform: translateX(-20px);
}
.view-enter-to,.view-leave{
  opacity: 0.5;
  transform: translateX(0px);
  z-index: -1;


}
.view-leave-to{
  opacity: 0;
  transform: translateX(100px);
  z-index: -1;

  
}
</style>
