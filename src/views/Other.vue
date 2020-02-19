<template>
<div class="d-flex">  
    <SubSidebar v-bind:subSidebars="subSidebars">Khác</SubSidebar>
    <router-link></router-link>
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
          nameSub: "Thu chi định kì",
          iconSub: "far fa-clock fa-1x",
          activeComponent: "/other/recurring"
        },
        {
          id: 2,
          nameSub: "Hạng mục thu chi",
          iconSub: "fas fa-server fa-1x",
          activeComponent: "/other/categories"
        },
        {
          id: 3,
          nameSub: "Trợ giúp/Phản hồi",
          iconSub: "far fa-question-circle",
          activeComponent: "/other/help"
        },
        
        {
          id: 4,
          nameSub: "Giới thiệu bạn bè",
          iconSub: "fab fa-usb",
          activeComponent: "/other/connectFriends"
        },
        {
          id: 5,
          nameSub: "Thiết lập",
          iconSub: "fas fa-ellipsis-h",
          activeComponent: "/other/settings"
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