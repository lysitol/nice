<template>
    <div>
        <div class="top">
          <span><van-icon name="passed" />30天无忧退货</span>
          <span><van-icon name="passed" />48小时快速退款</span>
          <span><van-icon name="passed" />满88元免邮费</span>
        </div>

        <div class="box" v-for="(v,k) in goodslist.cartList" :style="{height:bool?'1.14rem':'1.04rem'}">
         <van-checkbox v-model="v.checked" @input="fn(v.product_id,v.checked)" ></van-checkbox>
          <img :src="v.list_pic_url" >

          <div class="you">
            <h3>{{v.goods_name}}</h3>
            <span>¥:{{v.market_price}}.00</span>
            <span>×{{v.number}}</span>
            <span v-if="bool" @click="shanchu(v.product_id)">删除</span>
            <van-stepper v-model="v.number"  v-if="bool"  @input="jiajian(v.goods_id,v.id,v.number,v.product_id)" />
            
          </div>
        </div>



       

        <van-submit-bar :price="zongji" button-text="提交订单" @submit="onSubmit">
          <van-checkbox v-model="quanchecked" @click="quanxuan()">全选</van-checkbox>
          <template #tip>
             累计共{{zongjian}}件商品，可点击<button @click="bianji">编辑</button> 按钮进行商品数量修改 
          </template>
        </van-submit-bar>
   
          <van-tabbar  v-model="active" active-color="#000" inactive-color="#000">
            <van-tabbar-item icon="home-o" @click="shouye">首页</van-tabbar-item>
            <van-tabbar-item icon="label-o"  @click="zhuanti">专题</van-tabbar-item>
            <van-tabbar-item icon="apps-o" @click="fenlei">分类</van-tabbar-item>
            <van-tabbar-item icon="cart-o" @click="gouwuche">购物车</van-tabbar-item>
            <van-tabbar-item icon="manager-o" @click="wode">我的</van-tabbar-item>
          </van-tabbar>
    </div>
</template>

<script>
import { getche } from '@/require/api';
import { goodschecked } from '@/require/api';
import { bujinqi } from '@/require/api';
import { shanchu } from '@/require/api';


export default {
    data() {
        return {
            active:0,
            value:'0',
            quanchecked: true,
            goodslist:'',
            bool:false,
        };
    },
    created(){
      getche({'X-Nideshop-Token':localStorage.getItem('token')})
      .then(res=>{       
        this.goodslist=res.data.data
        console.log(this.goodslist);


        for(let i=0;i<this.goodslist.cartList.length;i++){
        // console.log(999);
        if(this.goodslist.cartList[i].checked==0){
          this.quanchecked=false
          // console.log(999);
        }
      }
      })


    },
    computed:{

      zongji(){
        let total=0
        for(let i=0;i<this.goodslist.cartList.length;i++){
          if(this.goodslist.cartList[i].checked==true){
            total+=this.goodslist.cartList[i].market_price*this.goodslist.cartList[i].number
          }         
        }
        return total*100
      },
      zongjian(){
        let total=0
        for(let i=0;i<this.goodslist.cartList.length;i++){
          if(this.goodslist.cartList[i].checked==true){
            total+=this.goodslist.cartList[i].number
          }
          return total
        }
      }
    },



    methods: {
      shanchu(v){
        v=v+''
        shanchu({productIds:v})
        .then(res=>{
          console.log(res);
          location.reload()
        })
      },
      jiajian(gid,id,num,pid){
        console.log(gid,id,num,pid);
        bujinqi({goodsId:gid,id:id,number:num,productId:pid})
        .then(res=>{
          console.log(res.data);
        })
      },
      bianji(){
        this.bool=!this.bool
      },
      quanxuan(){
            if(this.quanchecked==true){
            let xuanid=[]
            for(let i=0;i<this.goodslist.cartList.length;i++){
              xuanid.push(this.goodslist.cartList[i].product_id)
            } 
            let ids=xuanid.join(',')
            console.log(ids);
            goodschecked({isChecked:1,productIds:ids})
            .then(res=>{
              console.log(res);
              location.reload()
            })
          }
            else{
              let xuanid=[]
              for(let i=0;i<this.goodslist.cartList.length;i++){
                xuanid.push(this.goodslist.cartList[i].product_id)
              } 
              let ids=xuanid.join(',')
              console.log(ids);
              goodschecked({isChecked:0,productIds:ids})
              .then(res=>{
                console.log(res);
                location.reload()
              })

            }
      },

      fn(v,j){
        console.log(v,j);
        if(j){
          j=1
        }else{
          j=0
        }
          goodschecked({isChecked:j,productIds:v})
            .then(res=>{
              console.log(res.data.data);
              location.reload()
            })
      },


      onSubmit(){
        alert(1)
      },
        shouye(){
        this.$router.push({
          path:'/home'
        })
      },
      zhuanti(){
        this.$router.push({
          path:'/zhuanti'
        })
      },
      fenlei(){
        this.$router.push({
            path:'/fenlei'
        })
      },
      gouwuche(){
        this.$router.push({
            path:'/gouwuche'
        })
      },
      wode(){
        this.$router.push({
            path:'/wode'
        })
      },
    },
};
</script>

<style lang="less" scoped>

  .top{
    width: 100%;
    height: 100%;
    background-color: #efefef;
    display: flex;
    justify-content: space-around;
    font-size: 0.14rem;
  }
  .box{
    background-color: #fff;
    overflow: hidden;
    // height: 1.04rem;
    // height: 1.14rem;

    width: 100%;
    
    margin-top: 0.05rem;
    .van-checkbox{
      float: left;
      margin-top: 0.4rem;
      margin-left: 0.15rem;
    }
    img{
      display: block;
      width: 1rem;
      height: 1rem;
      // background-color: aqua;
      float: left;
      margin-left: 0.2rem;
    }
    .you{
      // float: left;
      position: relative;
      // background-color: red;
      h3{
        // margin-top: 0.2rem;
        position: absolute;
        left:1.6rem ;
        top: 0.2rem;
      }
      span{
        display: inline-block;
        position: absolute;
        top: 0.7rem;
      }
      span:nth-of-type(2){
        right: 0.4rem;
      }
      span:nth-of-type(3){
        right: 0.02rem;
        top: 0.9rem;
        border: 1px solid red;
        background-color: red;
        color: #fff;
      }
      .van-stepper{
        position: absolute;
        margin-left: 1.6rem;
        right: 0.4rem;
        top: 0.85rem;
      }
    }

  }
  .van-submit-bar{
    bottom:0.5rem;
  }
</style>