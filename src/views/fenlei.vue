<template>
  <div>
  
    <transition name="pop">
      <router-view></router-view>
    </transition>

    <transition name="Fade" style="width: 100%;">
      <div v-show="$route.meta.bool" class="fade">
        <van-search
          disabled
          class="hide"
          placeholder="请输入搜索关键词"
          shape="round"
          @click="sosuo()"
        />
        <div class="box">

          <van-sidebar v-model="activeKey" class="left" @change="onChange">
            <van-sidebar-item
              :title="v.name"
              v-for="v in categoryList"
              :key="v.id"
            />
          </van-sidebar>

        <div class="right">
        
          <div class="di">
              <img :src="categoryList0.banner_url" alt="">
          </div>
              <p class="p1">{{categoryList0.name}}</p>
          
           <van-grid :border="false" :column-num="3">
            <van-grid-item v-for="v in subCategoryList" :key="v.id">
              <van-image :src="v.wap_banner_url" />
              <p class="p2">{{v.name}}</p>
            </van-grid-item>
          </van-grid>

          </div>
        </div>
      </div>
    </transition>
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
import { GetFenLeiLists ,GetFenLeiZiLei} from "../require/api";
export default {
  props: {},
  data() {
    return {
      active:'',
      activeKey: 0,
      categoryList: [],

      categoryList0: '',
      subCategoryList:[],


      currentCategory:[],
    };
  },
  computed: {
    
  },
  created() {
    GetFenLeiLists().then((res) => {
      this.categoryList = res.data.data.categoryList;
      this.categoryList0=this.categoryList[0]
      this.subCategoryList=this.categoryList[0].subCategoryList
      
    });
    
  },
  methods: {
    sosuo() {
      this.$router.push("/fenlei/sosuo");
    },
    onChange(index) {
      GetFenLeiZiLei({id:this.categoryList[index].id}).then(res=>{
      this.currentCategory=res.data.data.currentCategory

      this.categoryList0=this.currentCategory

      this.subCategoryList=this.currentCategory.subCategoryList
      console.log(this.subCategoryList);
      
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
  components: {},
};
</script>

<style scoped lang="less">
.pop-enter {
  right: -100%;
  top: -100%;
}
.pop-enter-active {
  transition: all 0.4s;
}
.pop-enter-to {
  top: 0%;
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
.Fade-enter,
.Fade-leave-to {
  // position: absolute;
  opacity: 0;
  // background-color: rgba(0, 0, 0,);
  // z-index:6;
}
.Fade-enter-to,
.Fade-leave {
  opacity: 1;
  // background-color: rgb(255, 255, 255);
}

.Fade-enter-active,
.Fade-leave-active {
  transition: all 0.8s;
}







h1{
  height: 0rem;
}
.box {
  width: 100%;
  height: 90vh;
  display: flex;
}
.van-sidebar {
  height: 100%;
  width: 25%;
  background-color: #f7f8fa;
}
.right{
  background-color: #fff;
  width: 100%;
}
.di{
  width: 100%;
  height: 1.4rem;
  img{
    width: 100%;
    height: 100%;
  }
 
}
 .p1{
    width: 100%;
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
    // margin-top: 0.1rem;
  }
.van-image{
  width: 0.28rem;
  height:0.28rem;
}
.p2{
  width: 100%;
  font-size:0.1rem ;
  margin-top: 0.1rem;
  text-align: center;
}
</style>
