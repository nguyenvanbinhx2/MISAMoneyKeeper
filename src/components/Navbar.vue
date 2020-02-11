<template>
  <div class="container-top d-flex align-items-center" >
      <img src="./../assets/Logo_MK.png" style="height:80px;width:99px" />
      <h1 class="text-white mx-5 pt-2" style="font-size:26px">Sổ Thu Chi MISA</h1>
      <i class="far fa-credit-card pl-2 icon-style" ></i>
      <p style="font-size:18px" class="text-white ml-1 pt-3">Tài chính hiện tại:</p>
      <i class="ml-auto far fa-bell icon-style "></i>
      <div  class="bg-success d-flex align-items-center rounded-pill p-2">
              <i class="fas fa-plus icon-style" style="font-size:64px"></i>
              <p style="font-size:18px">Thêm Chi Tiêu</p>            
      </div>
      <div class="d-flex align-items-center p-2 border bg-dark">
              <p>Xin chào</p>
              <div></div>
              <i class="fas fa-sort-down icon-style"></i>
      </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container-top {
  height: 80px;
}
.icon-style{
        color:white;font-size:48px
}
p{
        font-size: 18px;
        color: white;
}
</style>