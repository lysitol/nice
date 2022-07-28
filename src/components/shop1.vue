<template>
    <div>
        <div class="shop" v-for="v in newGoodList" :key="v.id" @click="fun(v.id)">
            <img :src="v.list_pic_url" alt="" width="100%">
            <p>{{v.name}}</p>
            <p class="p">¥ {{v.retail_price.toFixed(2)}} 元</p>
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
            newGoodList:[]
        };
    },
    computed: {

    },
    created() {
        GetHomeList()
        .then(res=>{
            this.newGoodList=res.data.data.newGoodsList
            
        })
    },
    mounted() {

    },
    watch: {

    },
    methods: {
        fun(v){
            this.$router.push({
                path:'/xinpin',
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
    padding-bottom: .1rem;
    background-color: white;
    display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

}
    .shop{
        width: 49%;
        // height: 2.6rem; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        p{
            text-align: center;
            font-size: .14rem;
        }
        .p{
            color: #8B0000;
            font-size: .14rem;
        }
    }
   
</style>
