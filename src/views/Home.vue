<template>
  <div class="home">
  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  
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