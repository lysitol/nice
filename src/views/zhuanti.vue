<template>
    <div class="big">
        <div class="box" v-for="v in shuju.data">
            <img :src="v.scene_pic_url" alt="" width="100%">
            <h3>{{v.title}}</h3>
            <p>{{v.subtitle}}</p>
            <p>¥{{v.price_info}}元起</p>
        </div>

        <span :class="{shang:true,touming:shuju.currentPage==1}" @click="shang">上一页</span>
        <span :class="{xia:true,touming:shuju.currentPage==shuju.totalPages}" @click="xia">下一页</span>
        <br><br><br><br><br><br>



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
import {zhuanti} from '@/require/api.js'
export default {
    data() {
        return {
            active:0,
            shuju:''
        };
    },

    mounted() {
        
    },

    methods: {
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
      xia(){
        if (this.shuju.currentPage< this.shuju.totalPages) {
            this.shuju.currentPage++
            zhuanti({page:this.shuju.currentPage})
            .then(res=>{
            this.shuju=res.data.data
            })
        }else{
            alert('已到最后一页')
        }
      },
      shang(){
        if (this.shuju.currentPage>1) {
            this.shuju.currentPage--
            zhuanti({page:this.shuju.currentPage})
            .then(res=>{
            this.shuju=res.data.data
            })
        }else{
            alert('已到第一页')
        }
      }
    },
    created(){
        zhuanti({page:1})
        .then(res=>{
            this.shuju=res.data.data
            console.log(this.shuju);
        })
    }
};
</script>

<style lang="less" scoped>
    .big{
        background-color: #efefef;
        .box{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #fff;
            margin-top: 0.2rem;
           
        }

        
        .shang{
            display: inline-block;
            text-align: center;
            background-color: #fff;
            width: 50%;
            height: 0.5rem;
            margin-top: 0.2rem;
            line-height: 0.5rem;

        }
        .xia{
            display: inline-block;
            text-align: center;
            background-color: #fff;
            width: 50%;
            height: 0.5rem;
            margin-top: 0.2rem;
            line-height: 0.5rem;
        }

        .touming{
            opacity: 0.4;
        }
    }
</style>