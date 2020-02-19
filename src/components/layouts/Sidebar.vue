<template>
  <div class="menu-on-left shadow-sm " style="height:100%">
  <div class="d-flex m-auto" style="height:66px;width:50px"><img src="../../assets/Logo_STC.png"  style="height:45px;curser:pointer;" class="m-auto" /></div>
    <ul class="ml-0  p-0 list-menu hidden-xs-down" style="height:100%">

      <!-- <router-link to="/" class="text-decoration-none"> -->
      <li
        v-for="item in items"
        :key="item.id"
        class=""
      >
        <router-link :to="item.activeComponent" class="router-link d-flex flex-column justify-content-center align-items-center">
          <i :class="item.iconClass" style="font-size:32px"></i>
          <div>{{item.navName}}</div> 
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      bind:true,
      bindSize:'S',
      items: [
        {
          id: 1,
          iconClass: "fas fa-home",
          isHover: false,
          navName: "Tổng quan",
          activeComponent: "/home",
          
        },
        {
          id: 2,
          iconClass: "fas fa-book",
          isHover: false,
          navName: "Sổ Ghi Chép",
          activeComponent: "/notebook"
        },

        {
          id: 3,
          iconClass:"far fa-building",
          isHover: false,
          navName: "Hạn Mức Chi",
          activeComponent: "/moneykeeper"
        },
        {
          id: 4,
          iconClass: "far fa-list-alt",
          isHover: false,
          navName: "Tài Khoản",
          activeComponent: "/account"
        },
        
        {
          id: 5,
          iconClass: "fab fa-wpforms",
          isHover: false,
          navName: "Báo Cáo",
          activeComponent: "/report"
        },
        {
          id: 6,
          iconClass: "fas fa-bars",
          isHover: false,
          navName: "Khác",
          activeComponent: "/other"
        }
      ]
    };
  },

  // methods(){
  //   checkEqual(a, b){
      
  //   }
  // },
  
  
};
</script>
<style scoped>
.active{
  display: none;
}
.home {
  width: 100%;
  align-items: stretch;
}
.menu-on-left {
  width: 90px;
  height: 100%;
  border: 1px solid #000;
  background-color: rgb(8, 72, 102);
  z-index: 1;
  position: fixed

}
.menu-on-left ul li {
  text-align: center;
  border-bottom: 1px solid rgb(8, 72, 102);
  margin: 0;
  height: 90px;
}
.menu-on-left ul li a {
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 10px;
  display: content;
  text-decoration: none;
}
.menu-on-left ul li:hover {
  background-color: #319e4e;
  color: rgb(8, 72, 102);
}
.menu-on-left ul li {
  color: white;
}

.router-link {
  height: 100%;
  width: 100%;
  display: block;
  padding: 10px;
}
.router-link:hover {
  color: rgb(8, 72, 102);
}
.router-link-active {
  background-color: #319e4e;
  color: rgb(8, 72, 102) !important;
}
</style>
