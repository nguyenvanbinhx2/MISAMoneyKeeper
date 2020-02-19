<template>
<div class="">  
    <SubSidebar v-bind:subSidebars="subSidebars">Khác</SubSidebar>
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
          nameSub: "Thu chi định kì",
          iconSub: "far fa-clock fa-1x",
          activeComponent: "account"
        },
        {
          id: 2,
          nameSub: "Hạng mục thu chi",
          iconSub: "fas fa-server fa-1x",
          activeComponent: "login"
        },
        {
          id: 3,
          nameSub: "Trợ giúp/Phản hồi",
          iconSub: "far fa-question-circle",
          activeComponent: "expenseNote"
        },
        
        {
          id: 4,
          nameSub: "Giới thiệu bạn bè",
          iconSub: "fab fa-usb",
          activeComponent: "expenseNote"
        },
        {
          id: 5,
          nameSub: "Thiết lập",
          iconSub: "fas fa-ellipsis-h",
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