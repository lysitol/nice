<template>
    <div>
        <img :src="goodslist.app_list_pic_url" width="100%">
        <p>{{goodslist.name}}</p>
        <div class="xia">
            {{goodslist.simple_desc}}
        </div>
    </div>
</template>

<script>
import { pinpai } from '@/require/api'
export default {
    data() {
        return {
            goodslist:''
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    created(){
        console.log(this.$route.query);
        this.id=this.$route.query.id
        pinpai({id:this.id})
        .then(res=>{            
            console.log(res.data.data.brand);
            this.goodslist=res.data.data.brand
        })
        }
};
</script>

<style lang="less" scoped>
    p{
        font-size: 0.20rem;
        color: #fff;
        position: absolute;
        top: 1rem;
        left: 35%;
    }
    .xia{
        width: 100%;
        background-color: #fff;
        font-size: 0.18rem;
        text-align: center;
        padding: 0.08rem 0;
    }
</style>