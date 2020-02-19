
<template>
    <div class="row content border m-0">
    <SubSidebar v-bind:subSidebars="subSidebars">Tài Khoản</SubSidebar>
      <div class="col-md">
        <div class="container shadow">
          <div class="total-money">
            <div class="content-display">
              <h3>Tổng tiền:</h3>
              <h3>{{totalMoney}}</h3>
            </div>
          </div>
          <div class="list-of-accounts">
            <ul >
              <li v-bind:key="index" v-for="(item, index) in items">
                <div
                  class="row item-in-list"
                  data-toggle="collapse"
                  :id="item.id"
                  aria-expanded="true"
                  v-bind:aria-control="item.id"
                >
                
                  <div class="col-md-10 row align-items-center" style="cursor:pointer">
                      <div class="col-md-6 "><i :class="item.icon"></i>
                      <span class="ml-3">{{item.nameAccount}}</span></div>
                      <div class="col-md-6 d-flex">
                          <span>Còn:</span>
                        <span class="ml-3">{{item.moneyAmount}}</span>
                      </div>
                      
                  </div>
                  <div class="col-md-2 align-items-center" style="height:100%">
                    <div>
                      <i class="fas fa-pen" ></i>
                      <span>Sửa</span>
                    </div>
                  </div>
                </div>
                <ul
                  :id="item.id + 'ul'"
                  class="collapse show list-finance"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="row border mt-2 mr-0 ml-0" style="weight:70px;">
                    <div class="col-md-4 border"></div>
                    <div class="col-md-4 border">So tien con lai</div>
                    <div class="col-md-4 border">so tien ban dau</div>
                  </div>

                  <li class="row">
                    <div class="col-md-3 border">Khoang trang</div>
                    <div class="col-md-9 border">Noi dung ben trong</div>
                  </li>
                  <li class="row">
                    <div class="col-md-3 border">Khoang trang</div>
                    <div class="col-md-9 border">Noi dung ben trong</div>
                  </li>
                  <li class="row">
                    <div class="col-md-3 border">Khoang trang</div>
                    <div class="col-md-9 border">Noi dung ben trong</div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
// import EventBus from './../EventBus.js'
import SubSidebar from '../components/SubSidebar.vue'
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
      items: [
        {
          id: 1,

          nameAccount: "Ví tiền mặt",
          moneyAmount: "500000vnd",
          icon: "fas fa-pen"
        },

        {
          id: 2,

          nameAccount: "Ví tiền mặt",
          moneyAmount: "500000vnd",
          icon: "fas fa-pen"
        },

        {
          id: 3,

          nameAccount: "Ví tiền mặt",
          moneyAmount: "500000vnd",
          icon: "fas fa-pen"
        },


      ]
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