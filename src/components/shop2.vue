<template>
    <div >
        <div id="white">
            <div class="shop" v-for="v in hotGoodList" :key="v.id">
                    <img :src="v.list_pic_url" alt="" >
                    <p>{{v.name}}</p>
                    <p class="p">{{v.goods_brief}}</p>
                    <span >¥ {{v.retail_price.toFixed(2)}} 元</span>
                </div>
        </div>
        
    </div>
</template>

<script>
import { GetHomeList } from '@/require/api';
export default {
    props: {

    },
    data() {
        return {
            hotGoodList:''
        };
    },
    computed: {

    },
    created() {
        GetHomeList()
        .then(res=>{
            this.hotGoodList=res.data.data.hotGoodsList
            // console.log(this.hotGoodList);
        })
    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="less">
#white{
         background-color: white;

}
    .shop{
        background-color: #FAFAFA;
        width: 100%;
        // height: .9rem;
        position: relative;
        margin-bottom: .1rem;
        img{
            height: 0.5rem;
        }
        p{
            font-size: .16rem;
            position: absolute;
            top: .1rem;
            left: 1.5rem;
        }
        .p{
            font-size: .08rem;
            position: absolute;
            top: .4rem;
            left: 1.5rem;
        }
        span{
            font-size: .12rem;
            position: absolute;
            bottom:0.1rem;
            left: 1.5rem;
            color: #8B0000;
        }
    }
</style>
