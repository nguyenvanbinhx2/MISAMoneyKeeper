<template>
    <div class="col col-md-4 login-sec">
        <h2>Login</h2>
        <div class="container">
        <div class="row">
            <div class="col">
                <button type="button" class="btn-body-style btn btn-sm 
                btn-primary">
                     Đăng nhập bằng Facebook
                </button>
            </div>
            <div class="col">
                <button type="button" class="btn-body-style btn btn-sm btn-danger">
                    Đăng nhập bằng Google</button>
            </div>
            </div>
        </div>
        
        <form>
            <div class="form-group text-left">
                <label for="InputEmail" >Email Address</label>
                <input type="text" name="Email" class="form-control" v-model="input.email" placeholder="Enter Email">
            </div>
            <div class="form-group text-left">
                <label for="InputPassword">Password</label>
                <input type="password" name="Password" class="form-control" v-model="input.password" placeholder="Password">
            </div>
            <div class="form-check text-left">
                <input type="checkbox" class="form-check-input">
                <label class="form-check-label" for="checkLogin">Remember Me</label>
            </div>
        <button v:on="updateBlock" type="button" class="btn-body-style btn btn-success btn-block btn-md" v-on:click="login()">Login</button>
    </form>
    <button type="button" v-on:click="updateBlock()"  class="btn btn-outline-success icon-back-next"><img src="../assets/back.png"></button>
    </div>
</template>
<script>
export default {
    name:'login',
    props:['currentBlock'],
    data(){
       
        return{
            input: {
                email: "",
                password: ""
            }
        }
    },
    methods:{
        updateBlock(){
            this.$emit('updateBlock',1);
        },
        login(){
            if(this.input.email!=="" && this.input.password !==""){
                if(this.input.email == this.$parent.mockAccount.email && this.input.password== this.$parent.mockAccount.password){
                    this.$emit("authenciate", true);
                    this.$router.replace({name: "Lobby"});
                }
                else{
                    console.log("The username or password is incorrect");
                    }
                }
            else{
                console.log("A username or passsword must be present");
            }
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
.btn-body-style{
    border-radius: 20px;
}
button.btn.btn-outline-success.btn-block.btn-lg{
  border-radius: 20px;
}
.col.col-md-4.login-sec {
    background-color: #f3fff0;
}
.icon-back-next{
    margin-top:25px;
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