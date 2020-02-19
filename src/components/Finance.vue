
<template>
    <div class="row content border m-0">
    <SubSidebar v-bind:subSidebars="subSidebars">Tài Khoản</SubSidebar>
          </div>
</template>

<script>
// import EventBus from './../EventBus.js'
import SubSidebar from '../components/layouts/SubSidebar.vue'
export default {
  data: () => {
    return {
      subSidebars: [
        {
          id: 1,
          nameSub: "Tài khoản",
          iconSub: "fas fa-user fa-1x",
          activeComponent: "account"
        },
        {
          id: 2,
          nameSub: "Sổ tiết kiệm",
          iconSub: "fas fa-book",
          activeComponent: "login"
        },
        {
          id: 3,
          nameSub: "Tích lũy",
          iconSub: "fab fa-twitter",
          activeComponent: "expenseNote"
        }
      ],
      
    };
  },
  components:{
      SubSidebar
  },
  methods: {}


};
</script>

<style scoped>
.container {
  border: 1px solid lightgray;
  border-radius: 5px;

  margin-top: 20px;
  width: 60%;
}

.list-of-accounts li {
  margin: 0;
  border: 1px solid white;
  border-radius: 10px;
  margin-top: 5px;
}

.item-in-list {
  margin: 0px;
  background-color: #9fc5f8;
  height: 50px;
}

.item-in-list div:nth-child(2) p {
  /* padding: 5px; */
  padding-right: 15px;
}

.item-in-list div:nth-child(2) {
  text-align: center;
  padding-top: 10px;
}

.item-in-list div:nth-child(3) {
  text-align: right;
}

.item-in-list div:nth-child(1) h5 {
  margin-left: 30px;
}

.item-in-list div:nth-child(1) div {
  padding-top: 10px;
}

.content-display {
  display: inline-flex;
  border: 1px solid gray;
  border-radius: 8px;
  background-color: #93c47d;
}

.content-display h3 {
  padding: 8px;
}

.total-money {
  text-align: center;
  padding: 20px 0;
}

.row.content {
  height: 100%;
}

#content-on-left {
  border: 1px solid #007bff;
}

.menu-left {
  height: 70px;
}

.menu span {
  padding: 20px 20px;
}

.menu span:nth-child(2) {
  width: 150px;
}

.menu span:nth-child(2) p {
  font-size: 20px;
  font-weight: 300;
}
.active {
  background: green;
}
.menu-left span {
  width: 100%;
  height: 100%;
}
.menu-on-left:hover {
  background-color: #319e4e;
  color: rgb(8, 72, 102);
}
.list-finance {
  display: none;
}
.item-in-list:hover > .list-finance {
  display: block;
}
</style>