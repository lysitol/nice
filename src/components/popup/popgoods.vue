<template>
    <div>
        <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1"  />
        <van-dropdown-item v-model="value2" :options="option2" @input="jiagems(value2)" />
        <van-dropdown-item v-model="value3" :options="option3" @input="fenlei(value3)"/>
        </van-dropdown-menu>
        <div class="big"  >
            <div class="shangpin" v-for="(v,k) in goodsList" @click="fun(v.id)">
                <img :src="v.list_pic_url" alt="">
                <p>{{v.name}}</p>
                <p>¥{{v.retail_price}}</p>
            </div>
        </div>
        
        
        
    </div>
    

</template>

<script>
import { shangpin } from '@/require/api';


export default {
    data() {
        return {
            // goodsList:'',
            value1: 0,
            value2: 'a',
            value3:'q',
            option1: [
                { text: '综合', value: 0 },
            ],
            option2: [
                { text: '价格', value: 'a' },
                { text: '价格由高到低', value: 'b' },
                { text: '价格由低到高', value: 'c' },
            ],
            option3: [
                { text: '分类', value: 'q' },
                { text: '全部', value: 'w' },
                { text: '居家', value: 'e' },
            ],
            jiage:'desc',
            leibie:'0',
        };
    },
    computed:{
        goodsList(){
            return this.$store.state.goodsList
        }
    },



    methods: {
        fun(v){
            this.$router.push({
                path:'/xiangqing',
                query:{
                    id:v
                }
            })
        },
        jiagems(v){
            console.log(this.$store.state.sousuoci);
            console.log(v);
            if(v=='b'){
                this.jiage='desc'
            }else{
                this.jiage='asc'
            }
            shangpin({keyword:this.$store.state.sousuoci,order:this.jiage,sort:'price'})
            .then(res=>{
                console.log(res);
                this.$store.state.goodsList=res.data.data.data
            })
        },
        fenlei(v){
            console.log(this.$store.state.sousuoci);
            if(v=='q'|| 'w'){
                this.leibie=0
            }else{
                this.leibie=1
            }
            shangpin({keyword:this.$store.state.sousuoci,categoryId:this.leibie,sort:'id'})
            .then(res=>{
                console.log(res);
                this.$store.state.goodsList=res.data.data.data
            })
        },
    },
};
</script>

<style lang="less" scoped>
    .big{
        width: 100%;
        background-color: #fff;
        display: flex;
        flex-wrap:wrap ;
        justify-content: space-around;
        overflow: hidden;
        box-sizing: border-box;
        .shangpin{
            width: 1.9rem;
            height: 2.0rem;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            img{
                width: 80%;
            }
        }
    }
</style>