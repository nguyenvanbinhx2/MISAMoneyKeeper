<template>
    <div class="col col-md-4 login-sec">
            <h2 class="text-center">Welcome To MoneyKeeper</h2>
            <p class="text-center">Power by MISA</p> 
            <button type="button" class="btn btn-success btn-block btn-lg">
            Đăng kí bằng tài khoản mới</button>
            <button v-on:click="updateBlock" type="button" class="btn btn-outline-success btn-block btn-lg">Đăng nhập</button>
    </div>
</template>


<script>
export default {
    name:'welcome',
    props: ['currentBlock'],
    methods:{
        updateBlock(){
            this.$emit('updateBlock',2);
        
        }
    }

}
</script>

<style scoped>
.login-block{
    background: #DE6262;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #FFB88C, #DE6262);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #FFB88C, #DE6262); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
float:left;
width:100%;
padding : 50px 0;
}
button.btn.btn-success.btn-block.btn-lg {
    margin-bottom: 25px;
    margin-top:100px;
    border-radius: 20px
}
button.btn.btn-outline-success.btn-block.btn-lg{
  border-radius: 20px;
}
.col.col-md-4.login-sec {
    background-color: #f3fff0;
}
.banner-sec{background:url(https://static.pexels.com/photos/33972/pexels-photo.jpg)  no-repeat left bottom; background-size:cover; min-height:500px; border-radius: 0 10px 10px 0; padding:0;}
.carousel-inner{border-radius:0 10px 10px 0;}
.carousel-caption{text-align:left; left:5%;}
.login-sec{padding: 50px 30px; position:relative;}
.login-sec .copy-text{position:absolute; width:80%; bottom:20px; font-size:13px; text-align:center;}
.login-sec .copy-text i{color:#FEB58A;}
.login-sec .copy-text a{color:#E36262;}
.login-sec h2{margin-bottom:30px; font-weight:800; font-size:30px; color: #DE6262;}
.login-sec h2:after{content:" "; width:100px; height:5px; background:#FEB58A; display:block; margin-top:20px; border-radius:3px; margin-left:auto;margin-right:auto}
.btn-login{background: #DE6262; color:#fff; font-weight:600;}
.banner-text{width:70%; position:absolute; bottom:40px; padding-left:20px;}
.banner-text h2{color:#fff; font-weight:600;}
.banner-text h2:after{content:" "; width:100px; height:5px; background:#FFF; display:block; margin-top:20px; border-radius:3px;}
.banner-text p{color:#fff;}
</style>