<template>
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
  </div>
</template>
<script>
import ExpenseNote from './ExpenseNote'
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
                addNoteClick(){
                        this.test = document.getElementById('add-note');
                        this.test.className += ' active';
                        console.log(this.test.className);
                        
                },

                opening(){
                        this.open =  !this.open     
                }
        }
};
</script>
<style scoped>
#dropdownMenu{
        margin-top: 12px;
}

.dropdown-content{
            position: absolute;
    right: 11.5%;
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
  margin-top:15px;
  font-size: 32px;
  margin-right: 10px;
}
p {
  font-size: 18px;
  color: white;
}
/* .button-style {
  border: 1px solid #000;
  margin-right: 50px;
  width: 200px;
  padding-top: 10px;
  border-radius: 15px;
  border-color: rgb(8, 72, 102);
} */

button:hover{
        color: rgb(8, 72, 102);
        border-style: none;
}
.active{
        background-color: white;
}

</style>