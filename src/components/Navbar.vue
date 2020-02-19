<template>
  <div class="container-top shadow-lg border-lg">
        <div class="row for-desktop-using">
                <div class="col-md-5 d-flex col-sx-12">
                <div class="align-items-center d-flex border-right">
                        <h1 class="text-white mx-5 pt-2 align-items-center " style="font-size:24px">Sổ Thu Chi MISA</h1>

                <i class="far fa-credit-card pl-2 icon-style"></i>
                <p style="font-size:18px" class="text-white pl-2 m-auto ">Tài chính hiện tại:</p>
                </div>
                
                </div>
                <div class="col-md-4"></div>
                <div class="col-md-3 ml-auto d-flex align-items-center" >
                        <div class="notification ">
                                <i class="fas fa-bell icon-style m-auto" style="cursor:pointer;color:white;"></i>
                                <div class="noti_Counter rounded-circle"><p style="font-size:11px;text-align:center">7</p></div>
                        </div>
                        
                        <button type="button" class="btn btn-success btn-style shadow border-0 mr-3 ml-3 border-right" data-toggle="modal" data-target="#exampleModal" >
                                <i class="fas fa-plus"></i> Thêm chi tiêu
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="">
                                <ExpenseNote/>
                        </div>   
                        <div class="user-account ">
                                <div class="" @click="open=!open" ><i class="fas fa-user btn-style" style="cursor:pointer;font-size:32px"></i></div>
                                <transition name="fade">
                                <div class="dropdown-content" v-if="open" >
                                        <div class=""> Xin chao Ban</div>

                                        <li><a href="#"><div><span><i class="fas fa-home"></i></span><span>Nâng cấp lên phiên bản Premium</span></div></a></li>
                                        <li><a href="#"><div><span><i class="fas fa-home"></i></span><span>Thay đổi thông tin cá nhân</span></div></a></li>
                                        <li><a href="#"><div><span><i class="fas fa-home"></i></span><span>Liên kết tài khoản</span></div></a></li>
                                        <li><a href="#"><div><span><i class="fas fa-home"></i></span><span>Đặt mật khẩu</span></div></a></li>
                                        <li><a href="#"><div><span><i class="fas fa-home"></i></span><span>Đăng xuất</span></div></a></li>
                                        </div>
                                </transition>


                        </div>     
                </div>  
        </div>

        
    
  </div>
</template>
<script>
import ExpenseNote from '../components/ExpenseNote.vue'
export default {
        components:{
                ExpenseNote,
        },

        data:() => {
                return{
                        test: '',
                        open: false,
                      
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
/* @media only screen and(max-width: 576px){
        div.for-desktop-using{
                display: none;
        }

        div.for-mobile-using{
                display: block;
        }
} */

#dropdownMenu{
        position: relative;
}

.dropdown-content{
        position: absolute;
        margin-top:0px;
    right: 1.5%;
    background-color: #f1f1f1;
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

  height: 50px;
  background-color: rgb(8, 72, 102)
}
.icon-style {
  color: white;
  font-size: 28px;
}
p {
  font-size: 18px;
  color: white;
}


.active{
        background-color: white;
}

    .list-finance{
        display: none;
    }
    .item-in-list:hover>.list-finance{
        display: block
    }
    .noti_Counter{
            position: absolute;
            background-color: #E1141E;
            color:white;
            font-size:20px;
            font-weight: normal;
                margin-top: -35px;
                margin-left: 13px;
                width: 20px;
                height: 20px;

            
    }
    .notification{
            position: relative;
    }
    .btn-style{
            width:150px;height:30px;

    }
    .user-account{
            height: 100%;
            text-align: center
    }
    .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>