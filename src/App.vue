<template>
  <div id="app">
    <div class="d-flex " style="height:100vh">
      <SideBar />
      <div class="" style="width:100%;height:100%">
        <NavBar />
        <transition name="view">
        <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../src/components/Navbar.vue";
import SideBar from "../src/components/Sidebar.vue";
export default {
  components: {
    NavBar,
    SideBar
  },
  name: "app",
  data() {
    return {
      authenciate: false,
      mockAccount: {
        username: "admin",
        password: "1"
      }
    };
  },
};
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
.view-enter-to,.view-leave{
  opacity: 0;
  transition: 
}
.view-enter,.view-leave-to{
  opacity: 1;
}
</style>
