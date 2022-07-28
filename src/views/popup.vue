<template>
    <div class="popup">
        <van-search v-model="value" placeholder="520大礼包抢先领"     show-action @search="onSearch"
        @cancel="onCancel" @input="list(value)"/>
        <pophistory v-show="bool==1" ></pophistory>
        <popgoods v-show="bool==2" ></popgoods>
        <poplist v-show="bool==3"  :shuju="shuju" ></poplist>
    </div>
</template>

<script>
import pophistory from '@/components/popup/pophistory.vue'
import popgoods from '@/components/popup/popgoods.vue'
import poplist from '@/components/popup/poplist.vue'
import { searchlist } from '@/require/api';
import { shangpin } from '@/require/api';
export default {
    data() {
        return {
            value:'',
            
            shuju:[]

        };
    },
    computed:{
        bool(){
            return this.$store.state.popupbool
        }
    },
    components:{
        pophistory,
        popgoods,
        poplist
    },

    methods: {
        onSearch(val) {
            shangpin({keyword:this.value})
            .then(res=>{
                console.log(res);
            this.$store.state.goodsList=res.data.data.goodsList
            })
            this.$store.state.popupbool=2
            this.$store.state.sousuoci=this.value
        },
        onCancel() {
            this.$router.go(-1)
            this.$store.state.popupbool=1
        },
        list(v){
            this.$store.state.popupbool=3
            searchlist({keyword:v})
            .then(res=>{
                this.shuju=res.data.data
            })
        }
    },
};
</script>

<style lang="less" >
    .popup{
        width: 100%;
        height: 100%;
        background-color: rgb(241, 233, 233);
        position: absolute;
        top: 0;
        z-index: 99;
    }
</style>