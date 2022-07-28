<template>
    <div>
        <div class="shop" v-for="v in bandList" :key="v.id" @click="fun(v.id)">
        <p>{{v.name}}</p>
        <span>¥ &nbsp;&nbsp;{{v.floor_price.toFixed(2)}} &nbsp;&nbsp;元</span>
        <span></span>
            <img :src="v.pic_url" alt="" width="100%">
        </div>
        
    </div>
</template>

<script>
import { bandList } from '@/require/api';
import { pinpai } from '@/require/api';

export default {
    props: {

    },
    data() {
        return {
            bandList:[]
        };
    },
    computed: {

    },
    created() {
        bandList()
        .then(res=>{
            this.bandList = res.data.data.brandList
            console.log(this.bandList);

        })
    },
    mounted() {

    },
    watch: {

    },
    methods: {
        fun(v){
            this.$router.push({
                path:'/pinpai',
                query:{
                    id:v
                }
            })
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
    div{
        background-color: white;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  
    }
    .shop{
        position: relative;
         width: 49%;
        // height: 1.2rem;
        // background-color:pink;
        margin-top: .05rem;
          p{
            position: absolute;
    font-size: .16rem;
    top: .1rem;
    left: .1rem;
    font-size: .14rem;
    }
    span{
        position: absolute;
        top: .5rem;
        left: .1rem;
        font-size: .12rem;
        color: #8B0000;
    }
    }
</style>
