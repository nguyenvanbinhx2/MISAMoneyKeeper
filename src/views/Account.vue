<template>
    <div class="d-flex">
    <SubSidebar v-bind:subSidebars="subSidebars">Tài Khoản</SubSidebar>
    <router-link></router-link>
          </div>
</template>

<script>
import SubSidebar from '../components/layouts/SubSidebar.vue'
export default {
  data: () => {
    return {
      subSidebars: [
        {
          id: 1,
          nameSub: "Tài khoản",
          iconSub: "fas fa-user fa-1x",
          activeComponent: "account/mainAccount"
        },
        {
          id: 2,
          nameSub: "Sổ tiết kiệm",
          iconSub: "fas fa-book",
          activeComponent: "/account/deposit"
        },
        {
          id: 3,
          nameSub: "Tích lũy",
          iconSub: "fab fa-twitter",
          activeComponent: "/account/saveMoney"
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