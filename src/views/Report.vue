<template>

<div class="container-report d-flex">  
    <SubSidebar v-bind:subSidebars="subSidebars">Báo cáo</SubSidebar>
  <router-view></router-view>
</div>

</template>
<script>
import SubSidebar from '../components/layouts/SubSidebar.vue'
export default {
  data() {
    return {
      subSidebars: [
        {
          id: 1,
          nameSub: "Tài chính hiện tại",
          iconSub: "fas fa-chart-pie",
          activeComponent: "/report/financial"
        },
        {
          id: 2,
          nameSub: "Theo dõi vay nợ",
          iconSub: "fas fa-list-ul",
          activeComponent: "/report/lentborrowed"
        },
        {
          id: 3,
          nameSub: "Phân tích chi tiêu",
          iconSub: "far fa-money-bill-alt",
          activeComponent: "/report/analysis"
        },
        
        {
          id: 4,
          nameSub: "Đối tượng thu/chi",
          iconSub: "fas fa-users",
          activeComponent: "/report/payee"
        },
        {
          id: 5,
          nameSub: "Chuyến đi, sự kiện",
          iconSub: "far fa-calendar-alt",
          activeComponent: "/report/events"
        },
        {
          id: 6,
          nameSub: "Phân tích tài chính",
          iconSub: "fas fa-chart-bar",
          activeComponent: "/report/charbar"
        },
       
      ]
    };
  },
  components:{
      SubSidebar
  }
};
</script>
<style scoped>
</style>