<template>
  <div class="menu-on-left border shadow-sm">
    <ul class="ml-0">
      <!-- <router-link to="/" class="text-decoration-none"> -->
        <li
          v-for="item in items"
          v-bind:key="item.id"
          class="justify-content-center align-items-center d-block" 
        >
        <router-link v-bind:to="item.activeComponent" class="router-link" >
          <i v-bind:class="item.iconClass" style="font-size:32px"></i>
          <p>{{item.navName}}</p>
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
      items: [
        {
          id: 1,
          iconClass: "fas fa-home",
          isHover: false,
          navName: "Tổng quan",
          activeComponent: "/home"
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
          iconClass: "far fa-calculator",
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
          iconClass: "far fa-calculator",
          isHover: false,
          navName: "Tổng quan",
          activeComponent: "/caculator"
        },
        {
          id: 6,
          iconClass: "fab fa-wpforms",
          isHover: false,
          navName: "Báo Cáo",
          activeComponent: "/report"
        },
        {
          id: 7,
          iconClass: "fas fa-bars",
          isHover: false,
          navName: "Khác",
          activeComponent: "/something"
        }
      ]
    };
  },
  methods: {

  }
};
</script>
<style scoped>
.home {
  width: 100%;
  align-items: stretch;
}
.menu-on-left {
  width: 100px;
  height: 100%;
  margin-left: 0px;
  border: 1px solid #000;
  background-color: #017de3;
}
.menu-on-left ul li {
  text-align: center;
  border-bottom: 1px solid #135995;
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
  /* justify-content: middle; */
}
.menu-on-left ul li:hover {
  background-color: #319e4e;
  color: rgb(8, 72, 102);
}
.menu-on-left ul li {
  color: white;
}

.router-link{
  height: 100%;
  width: 100%;
  display: block;
  padding:10px;
  
}
.router-link:hover{
  color:rgb(8, 72, 102);
}
.router-link-active{
  background-color:#319e4e; 
}
</style>
