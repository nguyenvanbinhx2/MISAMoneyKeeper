<template>
  <div class="col-md-2 border-right">
    <div class="row">
      <div class="col-md-12 border-bottom">
        <div style="text-align: center; padding-top: 15px;">
          <h3 style="color:rgb(8, 72, 102)"><slot></slot><slot  name="header"></slot></h3>
        </div>
      </div>
      <ul class="col-md-12 p-0">
        <li
          :activeComponent="subSidebars.activeComponent"
          v-bind:key="subSidebar"
          v-for="subSidebar in subSidebars"
          class="d-flex row border-bottom menu-on-left m-0"
          style="cursor:pointer; padding-top: 10px;"
        >
          <span class="col-md-2">
            <i :class="subSidebar.iconSub"></i>
          </span>
          <span class="col-md-8" style="text-align:left">
            <p>{{subSidebar.nameSub}}</p>
          </span>
          <span class="col-md-2" style="text-align:right"></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
    };
  },
  props: ['subSidebars']
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