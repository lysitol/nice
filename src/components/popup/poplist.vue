<template>
    <div>
        
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >
            <van-cell v-for="item in shuju" :key="item" :title="item" @click="fun(item)" />
        </van-list>
    </div>
</template>

<script>
import { searchlist } from '@/require/api';
import { shangpin } from '@/require/api';
export default {
    props:{
        'shuju':{
            type:Array
        }
    },
    data() {
        return {
            list: [1,2,3],
            loading: false,
            finished: false,            
        };
    },
    created(){
        searchlist()
        .then(res=>{
            
        })
    },
    methods:{
        onLoad() {
            fetchSomeThing().catch(() => {
                this.error = true;
            });
        },
        fun(v){
            this.$store.state.popupbool=2
            shangpin({keyword:v})
            .then(res=>{
            this.$store.state.goodsList=res.data.data.goodsList
            })
            this.$store.state.sousuoci=v
         },
    }
};
</script>

<style lang="less" scoped>

</style>