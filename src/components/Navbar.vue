<template>
  <div class="container-top">
        <div class="row">
                <div class="col-md-5 d-flex">
                <img src="./../assets/Logo_MK.png" style="height:64px;width:85px" />
                <h1 class="text-white mx-5 pt-2" style="font-size:26px">Sổ Thu Chi MISA</h1>
                <i class="far fa-credit-card pl-2 icon-style"></i>
                <p style="font-size:18px" class="text-white ml-1 pt-3">Tài chính hiện tại:</p>
                </div>
                <div class="col-md-3"></div>
                <div class="col-md-4 d-flex">
                        <i class="fas fa-bell fa-2x mr-3"></i>
                        <button type="button" id="add-note" class="btn btn-succeess mr-3" data-toggle="modal" data-target="#exampleModal">
                                <i class="fas fa-plus"></i> Thêm chi tiêu
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="">
                                <ExpenseNote/>
                        </div>   
                        <div class="user-account">
                                <button type="button" @click="opening" class="btn btn-secondary " id="dropdownMenu" >Xin chaof Duc</button>

                                <div class="dropdown-content" v-if="open">
                                        <li><a href="#"><div><span><i class="fas fa-home"></i></span><span>Nâng cấp lên phiên bản Premium</span></div></a></li>
                                        <li><a href="#"><div><span><i class="fas fa-home"></i></span><span>Thay đổi thông tin cá nhân</span></div></a></li>
                                        <li><a href="#"><div><span><i class="fas fa-home"></i></span><span>Liên kết tài khoản</span></div></a></li>
                                        <li><a href="#"><div><span><i class="fas fa-home"></i></span><span>Đặt mật khẩu</span></div></a></li>
                                        <li><a href="#"><div><span><i class="fas fa-home"></i></span><span>Đăng xuất</span></div></a></li>
                                </div>


                        </div>     
                </div>  
        </div>
    
  </div>
</template>
<script>
import ExpenseNote from '../components/ExpenseNote.vue'
export default {
        components:{
                ExpenseNote
        },

        data:() => {
                return{
                        test: '',
                        open: false
                }
        },
        methods: {
                opening(){
                        this.open =  !this.open     
                },
        },
};
</script>
<style scoped>
#dropdownMenu{
        margin-top: 12px;
}

.dropdown-content{
            position: absolute;
    right: 1.5%;
    background-color: #f1f1f1;
    top:55px;
    border: 1px solid lightgray;
    border-radius: 5px;

}

.dropdown-content li{
        height: 50px;
        border-bottom: 1px solid lightgray;
        list-style: none;
        padding: 10px 5px 4px 5px;

}

.dropdown-content li a{
        text-decoration: none;
}

.dropdown-content div{
        padding-top: 3px;
}

.dropdown-content span{
        padding: 0 5px;
}

.container-top {
  height: 64px;
}
.icon-style {
  color: white;
}
p {
  font-size: 18px;
  color: white;
}

button:hover{
        color: rgb(8, 72, 102);
        border-style: none;
}
.active{
        background-color: white;
}
</style>