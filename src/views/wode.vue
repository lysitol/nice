<template>
    <div>
        <div class="top" v-if="!bool">
          
          <div class="denglu" >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+BAMAAAAQDbi7AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURfjz8NTIvOPa0drQxe3l3/Pt6dJ8uJYAAAGKSURBVFjD7ZjNboMwEIT5vccxuZPS3qHJA4SouQPp+z9LkSJVBduw42mEqnrun9de744XoigoKCgoKCjoN5V/VI1Sp5eLH34d4YdePejPb3rUGQ+uJkIXiNVMJcanc35P8uAGEsVtwOQVVAWZyddkfOgAR5NXHZN+7AZs4YEE5DZcHZjsjyq44wMXYOe1f/c9FPg/wqdP4TXjHlD9sjzbfxnZ/3b/2Mn9q+H8y+5/cv8crPyppI4vv8DEwWuu/MV8vHH89En5K6jyBxrAwddU+QIF3Nv5jvMfTfa/3D+ilpx/soac3zJy/oyI7NkdsMD4lhp/LR4AfoQl3PeHkYAa5Xsm+0YNlzAf3ZnTz0poF/j/xl9/NoB+v2H0YPgHskJWWZ/fm8/WJ3uQvEB5pZzSb17WD/yIGdSK9h2FLy8gwJcWEOFuN0qUUGefzK/a6VGMK90t++2qCvHQ59BFNLK4deDCGxnoQX5+BQ3KF9T25y9yDPPTabbF+dKz9qwTSUPyOD59U7bmm634LwhiuCxbAoGfAAAAAElFTkSuQmCC" alt="">
              <p>点击登录</p>
              <p>></p>

          </div>
          


          <!--  -->
          <van-button type="primary" text="" @click="show = true" class="top1" />
          <van-overlay :show="show" @click="show = false">
            <div class="wrapper">
              <div class="block" @click.stop>


                <van-form @submit="onSubmit">
                  <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                  />
                  <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                  />
                  <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">登录/注册</van-button>
                  </div>
                </van-form>



              </div>
            </div>
          </van-overlay>
        </div>
        <!-- 登陆之后 -->
        <div class="top" v-if="bool">
          
          <div class="denglu" >
              <img :src="user.avatar" alt="">
              <p>123</p>
              <p @click="logout">×</p>

          </div>


          <!--  -->
          <van-button type="primary" text="" @click="show = true" class="top1" />

           
          
        </div>

        <!-- 宫格 -->
        <van-grid :column-num="3" square>
          <van-grid-item @click="fun"   icon="label-o" text="订单" />
          <van-grid-item @click="fun"   icon="coupon-o" text="优惠券" />
          <van-grid-item @click="fun"   icon="point-gift-o" text="礼品卡" />
          <van-grid-item @click="fun"   icon="flower-o" text="我的收藏" />
          <van-grid-item @click="fun"   icon="location-o" text="我的足迹" />
          <van-grid-item @click="fun"   icon="friends-o" text="会员福利" />
          <van-grid-item @click="fun"   icon="location-o" text="地址管理" />
          <van-grid-item @click="fun"   icon="manager-o" text="账号安全" />
          <van-grid-item @click="fun"   icon="service-o" text="联系客服" />
          <van-grid-item @click="fun"   icon="comment-o" text="帮助中心" />
          <van-grid-item @click="fun"   icon="more-o" text="意见反馈" />
        </van-grid>



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
import { Toast } from 'vant';
import { denglu } from '@/require/api'

export default {
    name: 'YanxuanWode',

    data() {
        return {
            active:0,
            show: false,
            username: '',
            password: '',
            user:'',
            bool:false
        };
    },

    methods: {
      logout(){
        localStorage.removeItem('token')
        location.href='http://localhost:8080/wode'
      },
      onSubmit() {
        denglu({username:this.username,pwd:this.password})
        .then(res=>{
          console.log(res.data);
          this.user=res.data.data.userInfo
          let token = res.data.data.token
          localStorage.setItem('token',token)
          location.href='http://localhost:8080/wode'
        }).catch(res=>{
          console.log('失败');
        })
      },

      

      fun(){
        Toast('该功能暂未开放')
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
    created(){
        let token=localStorage.getItem('token')
        if(token){
          this.bool=true
        }else{
          this.bool=false
        }
    },
};
</script>

<style lang="less" scoped>
  .top{
    position: relative;
      .denglu{
          position: absolute;
          left: 0.2rem;
          top: 0.2rem;
          z-index: 9;
        img{
          display: block;
          width: 0.7rem;
          height: 0.7rem;
          background-color: #fff;
          border-radius: 50% 50%;
          float: left;
        }
        p:nth-of-type(1){
          float: left;
          color: #fff;
          margin-top: 0.24rem;
          margin-left: 0.1rem;
        }
        p:nth-of-type(2){
          float: right;
          color: #fff;
          margin-top: 0.24rem;
          margin-left: 2.3rem;
        }
      }
      
      .top1{
      width: 100%;
      height: 1.15rem;
      background-color: #333;
    }
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    .block {
      width: 3.4rem;
      height: 2.2rem;
      background-color: #fff;
    }
  }

  .van-grid-item{
    height: 1.3rem;
  }
  
</style>