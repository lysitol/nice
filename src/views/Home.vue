<template>
    <div>

      <transition name="van-slide-right">
          <router-view v-if="!$route.meta.data"></router-view>
      </transition>
        <!-- 1111111111111111111111111111111111111111111111111 -->
      <div class="big" v-if="$route.meta.data">
        <van-search  @click="sousuo" disabled v-model="value" shape="round" background="FFFFFF"
              placeholder="请输入搜索关键词"  />

              <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1989FA">
                <van-swipe-item v-for="v in banner" :key="v.id">
                  <img :src="v.image_url" alt="" width="100%">
                </van-swipe-item>
              </van-swipe>
              
      <van-grid column-num="5" >
        <van-grid-item  :icon="v.icon_url" :text="v.name" v-for="v in channel" :key="v.id"/>
      </van-grid>
          <type>
              品牌制造商直供
          </type>
          <shop></shop>
          <type>
              周一周四·新品首发
          </type>
          <shop1></shop1>
          <type>
              人气推荐
          </type>
          <shop2></shop2>
          <type>
              专题精选
          </type>
      <van-swipe :loop="false" width="315" height="266" class="van" :show-indicators="false">
            <van-swipe-item  v-for="v in topicList" :key="v.id" >
                  <img :src="v.scene_pic_url" alt="" id="img" width="300" height="200">
                  <h2>{{v.title}}<span>¥ &nbsp;{{v.price_info.toFixed(2)}}&nbsp; 元</span></h2>
                  <p class="p">{{v.subtitle}}</p>
                  
        </van-swipe-item>
      </van-swipe>




      <!-- 333333 -->
      <shop3></shop3>
          <van-tabbar  v-model="active" active-color="#000" inactive-color="#000">
            <van-tabbar-item icon="home-o" @click="shouye">首页</van-tabbar-item>
            <van-tabbar-item icon="label-o"  @click="zhuanti">专题</van-tabbar-item>
            <van-tabbar-item icon="apps-o" @click="fenlei">分类</van-tabbar-item>
            <van-tabbar-item icon="cart-o" @click="gouwuche">购物车</van-tabbar-item>
            <van-tabbar-item icon="manager-o" @click="wode">我的</van-tabbar-item>
          </van-tabbar>
      </div>
            



    </div>

</template>
<script>
import type from '@/components/type.vue';
import shop from '@/components/shop.vue'
import shop1 from '@/components/shop1.vue'
import shop2 from '@/components/shop2.vue'
import shop3 from '@/components/shop3.vue'
import { GetHomeList } from '@/require/api';
export default {
    data() {
        return {
           active:0,
            value:'',
            banner:[],
            channel:'',
            topicList:''
        };

    },
    methods:{

      sousuo(){
        this.$router.push({
          path:'/home/popup'
        })
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
    created() {
        GetHomeList()
        .then(res=>{
            this.banner = res.data.data.banner          
           this.channel = res.data.data.channel
            this.topicList = res.data.data.topicList
        })
    },
    components: {
        type,
        shop,
        shop1,
        shop2,
        shop3
    },
};
</script>

<style  lang="less">

 .my-swipe .van-swipe-item {
    font-size: 20px;
  }
  #img{
    display: block;
    
  }
  .van{
    background-color: white;
    // height: 2rem;
    padding-left: .08rem;
    position: relative;
    .van-swipe__indicator{
      display: none;
    }
    h2{
      width: 2.7rem;
      height: .25rem;
      display: block;
     
    // position: absolute;
    margin-top: .1rem;
    // bottom: 2em;
    // left: 0.1rem;
    font-size: .16rem;
    font-weight: 400;
    white-space: nowrap;        
    overflow: hidden;           
    text-overflow: ellipsis;
     span{
    margin-left:.1rem;
    
    font-size: .16rem;
    color: #8B0000;
  }       
  }
  .p{
    // margin-top: .1rem;
    
    font-size: .14rem;
     white-space: nowrap; 
   
  /*2. 超出的部分隐藏*/
   overflow: hidden;
   
  /*3. 文字用省略号替代超出的部分*/
   text-overflow: ellipsis
  }
  
  }
  


.pop-enter {
  right: -100%;
}
.pop-enter-active {
  transition: all 0.8s;
}
.pop-enter-to {
  right: 0%;
  // opacity: 0.5;
}
.pop-leave {
  right: 0%;
}
.pop-leave-active {
  transition: all 0.8s;
}
.pop-leave-to {
  right: -100%;
}

</style>
