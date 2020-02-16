<template>
<div class="border">  
    <SubSidebar v-bind:subSidebars="subSidebars">Báo cáo</SubSidebar>
</div>
</template>
<script>
import SubSidebar from '../components/SubSidebar.vue'
export default {
  data() {
    return {
      subSidebars: [
        {
          id: 1,
          nameSub: "Tài chính hiện tại",
          iconSub: "fas fa-chart-pie",
          activeComponent: "account"
        },
        {
          id: 2,
          nameSub: "Theo dõi vay nợ",
          iconSub: "fas fa-list-ul",
          activeComponent: "login"
        },
        {
          id: 3,
          nameSub: "Phân tích chi tiêu",
          iconSub: "far fa-money-bill-alt",
          activeComponent: "expenseNote"
        },
        
        {
          id: 4,
          nameSub: "Đối tượng thu/chi",
          iconSub: "fas fa-users",
          activeComponent: "expenseNote"
        },
        {
          id: 5,
          nameSub: "Chuyến đi, sự kiện",
          iconSub: "far fa-calendar-alt",
          activeComponent: "expenseNote"
        },
        {
          id: 6,
          nameSub: "Phân tích tài chính",
          iconSub: "fas fa-chart-bar",
          activeComponent: "expenseNote"
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