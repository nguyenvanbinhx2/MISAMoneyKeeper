<template>
    <div class="container-fluid">
        <div class="row content">
            <div id="content-on-left" class="col-md-2"> 
                <div class="row">
                    <div class="menu-left col-md-12"><div style="text-align: center; padding-top: 15px;"><h3>Tài khoản</h3></div></div>
                    <div class="menu-left col-md-12">
                        <div id="first-menu" class="menu d-flex">
                            <span><i class="fas fa-user fa-2x"></i></span>
                            <span><p>Tài khoản</p></span>
                            <span><i class="fas fa-caret-right fa-2x"></i></span>
                        </div>
                    </div>
                    <div class="menu-left col-md-12">
                        <div id="second-menu" class="menu d-flex">
                            <span><i class="fas fa-user fa-2x"></i></span>
                            <span><p>Sổ tiết kiệm</p></span>
                            <span><i class="fas fa-caret-right fa-2x"></i></span>
                        </div>
                    </div>
                    <div class="menu-left aligns-item-center col-md-12">
                        <div id="third-menu" class="menu d-flex">
                            <span><i class="fas fa-user fa-2x"></i></span>
                            <span><p>Tích lũy</p></span>
                            <span><i class="fas fa-caret-right fa-2x"></i></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md">
                <div class="container shadow">
                    <div class="total-money">
                        <div class="content-display">
                            <h3>Tổng tiền: </h3>
                            <h3>{{totalMoney}}</h3>
                        </div>
                    </div>
                    <div class="list-of-accounts">
                        <ul style="padding: 0">
                            <li v-bind:key="index" v-for="(item, index) in items">
                                <div class="row item-in-list">
                                    <div class="col-md-4"><div class="d-inline-flex"><i :class="item.icon"></i><h5>{{item.nameAccount}}</h5></div></div>
                                    <div class="col-md-6"><div class="d-inline-flex"><p>Còn: </p><h4>{{item.moneyAmount}}</h4></div></div>
                                    <div class="col-md-2"><div><i class="fas fa-pen"></i><h5>Sửa</h5></div></div>
                                </div>
                            </li>

                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return{
            items: [
                {
                    id: 1,
                    
                    nameAccount: 'Ví tiền mặt',
                    moneyAmount: '500000vnd',
                    icon: 'fas fa-pen'
                },

                {
                    id: 2,
                    
                    nameAccount: 'Ví tiền mặt',
                    moneyAmount: '500000vnd',
                    icon: 'fas fa-pen'
                },

                {
                    id: 3,
                    
                    nameAccount: 'Ví tiền mặt',
                    moneyAmount: '500000vnd',
                    icon: 'fas fa-pen'
                },

                {
                    id: 4,
                    
                    nameAccount: 'Ví tiền mặt',
                    moneyAmount: '500000vnd',
                    icon: 'fas fa-pen'
                },

                {
                    id: 5,
                    
                    nameAccount: 'Ví tiền mặt',
                    moneyAmount: '500000vnd',
                    icon: 'fas fa-pen'
                },

                {
                    id: 6,
                    
                    nameAccount: 'Ví tiền mặt',
                    moneyAmount: '500000vnd',
                    icon: 'fas fa-pen'
                }
            ]
                }
    }
}
</script>

<style scoped>
    .container{
        border: 1px solid lightgray;
        border-radius: 5px;
        
        margin-top: 20px;
        width: 60%;
    }

    .list-of-accounts li{
        margin: 0;
        border: 1px solid #80d4ff;
        border-radius: 5px;
        margin-top: 5px;
    }

    .item-in-list{
        border: 1px solid lightgray;
        margin: 0px;
        background-color: #9fc5f8;
        height: 50px;
    }

    .item-in-list div:nth-child(2) p{
        /* padding: 5px; */
        padding-right: 15px;
    }

    .item-in-list div:nth-child(2){
        text-align: center;
        padding-top: 10px;
    }

    .item-in-list div:nth-child(3){
        text-align: right;
    }

    .item-in-list div:nth-child(1) h5{
        margin-left: 30px;
    }

     .item-in-list div:nth-child(1) div{
        padding-top: 10px;
    }

    .content-display{
        display: inline-flex;
        border: 1px solid gray;
        border-radius: 8px;
        background-color: #93c47d;
    }

    .content-display h3{
        padding: 8px;
    }

    .total-money{
        text-align: center;
        padding: 20px 0;
    }

    .row.content{
        height: 100%;
    }

    #content-on-left{
        border: 1px solid #007bff;
    }

    .menu-left{
        height: 70px;
    }

    .menu span{
        padding: 20px 20px;
    }

    .menu span:nth-child(2){
        width: 150px;
    }

    .menu span:nth-child(2) p{
        font-size: 20px;
        font-weight: 300
    }

    .menu-left{
        border-bottom: 1px solid #007bff;
    }
</style>