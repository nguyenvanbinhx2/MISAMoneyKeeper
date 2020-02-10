<template>
  <div class="menu-on-left border shadow-sm">
    <ul class="ml-0">
      <li
        v-for="item in items"
        v-bind:key="item.id"
        @mouseover="item.isHover = true"
        @mouseleave="item.isHover = false"
        class="d-flex justify-content-center align-items-center" v-bind:class="{active:checkActiveHome(item.id)}"
      >
        <a v-bind:href=[item.activeComponent] >
          <span
            class="glyphicon"
            v-bind:class="[
              { homeicon: !item.isHover, homeiconhover: item.isHover, activeicon:checkActiveHome(item.id) },
              item.iconClass
            ]"
          >
          </span>
          <p>{{ item.navName }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      isActiveHome: false,
      items: [
        {
          id: 1,
          iconClass: "glyphicon-home",
          isHover: false,
          navName: "Tổng quan",
          activeComponent: '/'
        },
        {
          id: 2,
          iconClass: "glyphicon-book",
          isHover: false,
          navName: "Sổ Ghi Chép",
          activeComponent:'/notebook'
        },

        {
          id: 4,
          iconClass: "glyphicon-folder-close",
          isHover: false,
          navName: "Tài Khoản",
          activeComponent: '/account'
        },
        {
          id: 5,
          iconClass: "glyphicon-align-justify",
          isHover: false,
          navName: "Khác",
          activeComponent: "/more"
          
        }
      ]
    };
  },
  methods:{
    checkActiveHome(number){
      if (number==1)
      return true;
      return false;
    }
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
  padding: 10px;
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
}
.active {
  background-color: #319e4e;
  font-size: 32px;
  color: rgb(8, 72, 102);
}
.homeicon {
  font-size: 32px;
  color: white;
}
.homeiconhover,.activeicon {
  font-size: 32px;
  color: rgb(8, 72, 102);
}
</style>
