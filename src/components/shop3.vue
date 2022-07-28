<template>
  <div id="aaa">
    <ul>
      <li v-for="(v, k) in listname" :key="k" id="uul">
        <div class="nm">{{ v.name }}</div>
        <ul>
          <li v-for="(v, k) in listname[k].goodsList" :key="k" id="lia">
            <img :src="v.list_pic_url" alt="" width="100%" />
            <div class="na">{{ v.name }}</div>
            <div class="re">
              ¥&nbsp;&nbsp;{{ v.retail_price.toFixed(2) }}&nbsp;&nbsp;元
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { GetHomeList } from "@/require/api";
export default {
  props: {},
  data() {
    return {
      listname: [],
    };
  },
  computed: {},
  created() {
    GetHomeList().then((res) => {
      this.listname = res.data.data.categoryList;
      console.log(this.listname[0]);
    });
  },
  mounted() {},
  watch: {},
  methods: {},
  components: {},
};
</script>

<style scoped lang="less">
#aaa {
    float: left;
  background-color: white ;
  .nm {
    width: 100%;
    margin-top: 0.2rem;
    height: 50px;
    background-color: white;
    font-size: 0.2rem;
    line-height: 50px;
    text-align: center;
    color: black;
    float: left;
  }
  #lia {
    width: 50%;
    float: left;
    height: 3rem;
    .na {
      text-align: center;
      font-size: 0.14rem;
    }
    .re {
      text-align: center;
      font-size: 0.14rem;
      width: 1.84rem;
      height: 0.4rem;
      line-height: 0.4rem;
      color: #8b0000;
    }
    // background-color: pink;
  }
}
  

</style>
