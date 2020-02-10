<template>
    <div class="menu-on-left">
      <ul class="list-unstyled components" style="margin-left: 0 ">
        <li class="d-flex justify-content-center align-items-center">
          <div>
            <a href="#" data-toggle="collaspe">
          <img src="../assets\icons8_home_48px_1.png">
          <p>
            Tổng Quan
            </p>
          </a>
          </div>
        </li>
        <li>
          <a href="#">
           <img src="..\assets\icons8_spiral_bound_booklet_48px_1.png"><p>Sổ Ghi Chép</p></a>
        </li>
        <li><a href="#"><p>Hạn Mức Chi</p></a></li>
        <li><a href="#"><p>Tài Khoản</p></a></li>
        <li><a href="#"><p>Báo Cáo</p></a></li>
        <li><a href="#" src=""><p>Khác</p></a>
        </li>
        <li><a href="#">Khác</a></li>
      </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.home{
  width: 100%;
  align-items:  stretch;
}
.menu-on-left{
  width: 100px;
  height: 100%;
  margin-left: 0px;
  border:1px solid #000;
  background-color:#017de3;


}
.menu-on-left ul li {
  padding:10px;
  text-align: center;
  border-bottom: 1px solid black;
  margin: 0;
  height: 100px;

  
}
.menu-on-left ul li a{
  text-align: center;
  color:white;
  font-weight: bold; 
  font-size: 12px;
  display: content;
  /* justify-content: middle; */
}

.menu-on-left ul li:hover{
  background-color:#0264B6;
}
.container-top{
  width: 100%;
  height: 60px;
  background-color: #135995;
}
</style>