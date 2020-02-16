<template>
        <SubSidebar v-bind:subSidebars="subSidebars">Khác</SubSidebar>
</template>
<script>
export default {
    data(){
        return{
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
          nameSub: "Trợ giúp/Pj",
          iconSub: "fas fa-user fa-1x",
          activeComponent: "expenseNote"
        }
      ],

        }
    }
}
</script>
<style scoped>

</style>