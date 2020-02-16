<template>
<<<<<<< HEAD
  <div class="container-top d-flex align-item-center">
    <img src="./../assets/Logo_MK.png" style="height:64px;width:90px" />
    <h1 class="text-white mx-5 pt-2" style="font-size:26px">Sổ Thu Chi MISA</h1>
    <i class="far fa-credit-card pl-2 icon-style"></i>
    <p style="font-size:18px" class="text-white ml-1 pt-3">Tài chính hiện tại:</p>
    <!-- <button type="button" class="ml-auto bg-success border-0 mr-3"> -->
        <i class="ml-auto fas fa-bell fa-2x icon-style"></i>
    <!-- </button> -->
    <button type="button" id="add-note" @click.prevent="addNoteClick" class="btn btn-success btn-sm mr-3" >
        <i class="fas fa-plus"></i> Thêm chi tiêu
    </button>

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
<!-- Button trigger modal -->
        <ExpenseNote/>
=======
  <div class="container-top">
        <div class="row">
                <div class="col-md-5 d-flex">
                <img src="./../assets/Logo_MK.png" style="height:64px;width:85px" />
                <div class="align-items-center d-flex">
                        <h1 class="text-white mx-5 pt-2 align-items-center" style="font-size:24px">Sổ Thu Chi MISA</h1>
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
                        
                        <button type="button" class="btn btn-success btn-style shadow border-0 mr-3 ml-3 " data-toggle="modal" data-target="#exampleModal" >
                                <i class="fas fa-plus"></i> Thêm chi tiêu
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="">
                                <ExpenseNote/>
                        </div>   
                        <div class="user-account ">
                                <button type="button"  @click="open" class="btn btn-secondary shadow border-0 btn-style "  id="dropdownMenu" >Xin chào Đức</button>

                                <div class="dropdown-content" v-if="open" >
                                        <li><a href="#"><div><span><i class="fas fa-home"></i></span><span>Nâng cấp lên phiên bản Premium</span></div></a></li>
                                        <li><a href="#"><div><span><i class="fas fa-home"></i></span><span>Thay đổi thông tin cá nhân</span></div></a></li>
                                        <li><a href="#"><div><span><i class="fas fa-home"></i></span><span>Liên kết tài khoản</span></div></a></li>
                                        <li><a href="#"><div><span><i class="fas fa-home"></i></span><span>Đặt mật khẩu</span></div></a></li>
                                        <li><a href="#"><div><span><i class="fas fa-home"></i></span><span>Đăng xuất</span></div></a></li>
                                </div>


                        </div>     
                </div>  
        </div>
    
>>>>>>> 2d89b6ce6abd78c918475e31aaaf29094c6ffc7e
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
  height: 64px;
}
.icon-style {
  color: white;
<<<<<<< HEAD
  margin-top:15px;
  font-size: 32px;
  margin-right: 10px;
=======
  font-size: 28px;
>>>>>>> 2d89b6ce6abd78c918475e31aaaf29094c6ffc7e
}
p {
  font-size: 18px;
  color: white;
}
<<<<<<< HEAD
/* .button-style {
  border: 1px solid #000;
  margin-right: 50px;
  width: 200px;
  padding-top: 10px;
  border-radius: 15px;
  border-color: rgb(8, 72, 102);
} */
=======
>>>>>>> 2d89b6ce6abd78c918475e31aaaf29094c6ffc7e


.active{
        background-color: white;
}

    .active{
        background: green;
    }
.menu-left span
    {
        width: 100%;
        height: 100%;
    }
    .menu-on-left:hover{
        background-color:#319e4e;
        color:rgb(8, 72, 102);
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
            width:150px;height:40px;

    }
    .btn-style:hover{
            color: rgb(8, 72, 102);
    }
    .btn-style:active{
            color: rgb(8, 72, 102);

    }
    .user-account{
            height: 100%;
    }

</style>