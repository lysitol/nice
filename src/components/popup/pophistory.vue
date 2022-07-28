<template>
    <div>
        <div class="lishi">
            <h3>历史记录</h3>
            <van-tag @click="fun(v)" plain type="primary" class="tag" v-for="v in historyKeywordList">{{v}}</van-tag>
        </div>
        <div class="remen">
            <h3>热门搜索</h3>
            <van-tag @click="fun(v.keyword)" plain type="danger" class="tag" v-for="v in hotKeywordList">{{v.keyword}}</van-tag>

        </div>


    </div>
</template>

<script>
import { getserchhishot } from '@/require/api.js'
import { shangpin } from '@/require/api';
export default {

    data() {
        return {
            historyKeywordList:'',
            hotKeywordList:'',
        };
    },
    methods:{
        fun(v){
            this.$store.state.popupbool=2
            shangpin({keyword:v})
            .then(res=>{
            this.$store.state.goodsList=res.data.data.goodsList
            this.$store.state.sousuoci=v
            })
        }
    },
    created(){
        getserchhishot()
        .then(res=>{
            console.log(res.data.data);
            this.historyKeywordList=res.data.data.historyKeywordList
            this.hotKeywordList=res.data.data.hotKeywordList
        })
    }
};
</script>

<style lang="less" scoped>
    .lishi{
        width: 100%;
        background-color: #fff;
        overflow: hidden;
        padding-left: 0.1rem;
        h3{
            margin-top: 0.2rem;
        }
        .tag{
            margin-top: 0.2rem;
            margin-right: 0.2rem;
        }
    }
    .remen{
        margin-top: 0.2rem;
        width: 100%;
        background-color: #fff;
        overflow: hidden;
        padding-left: 0.1rem;
        h3{
            margin-top: 0.2rem;
        }
        .tag{
            margin-top: 0.2rem;
            margin-right: 0.2rem;
        }
    }
</style>