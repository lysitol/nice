<template>
 <div class="pinpai">
        <div class="biaozhu">
          <span><van-icon name="passed" />30天无忧退货</span>
          <span><van-icon name="passed" />48小时快速退款</span>
          <span><van-icon name="passed" />满88元免邮费</span>
        </div>

        <div class="shangpin">
            <h2>{{goodsdata.info.name}}</h2>
            <p>{{goodsdata.info.goods_brief}}</p>
            <p>¥{{goodsdata.info.retail_price}}元</p>
        </div>

        <van-cell is-link @click="showPopup">展示弹出层</van-cell>
        <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
            <div class="shang">
                <img :src="goodsdata.info.list_pic_url" width="1.5rem">
                <div>
                    <p>价格:¥{{goodsdata.info.retail_price}}元</p>
                    <p>库存:{{goodsdata.info.goods_number}}</p>
                </div>
            </div>
            <p>数量:</p>
            <van-stepper v-model="value" />
            <van-goods-action>
            <van-goods-action-icon icon="star-o" text="收藏"  />
            <van-goods-action-icon icon="cart-o" @click="che" text="购物车" badge="5" />       
            <van-goods-action-button type="danger" text="立即购买" />
            <van-goods-action-button type="warning" text="加入购物车" @click="jiagou" />
            </van-goods-action>
        </van-popup>
        



        <van-goods-action>
        <van-goods-action-icon icon="star-o" text="收藏"  />
        <van-goods-action-icon icon="cart-o"  @click="che" text="购物车" badge="5" />       
        <van-goods-action-button type="danger" text="立即购买" />
        <van-goods-action-button type="warning" text="加入购物车" @click="showPopup" />
        </van-goods-action>
    </div>
</template>

<script>
import { xiangqing } from '@/require/api'
import { jiagou } from '@/require/api';
export default {
    name: 'YanxuanXinpin',

    data() {
        return {
            id:'',
            goodsdata:[],
            show: false,
            value: 1,
        };
    },

    mounted() {
        
    },

    methods: {
                che(){
            this.$router.push('/gouwuche')
        },
                showPopup() {
        this.show = true;
        },
    },
    created(){
        console.log(this.$route.query);
        this.id=this.$route.query.id
        xiangqing({id:this.id})
        .then(res=>{            
            console.log(res.data.data);
            this.goodsdata=res.data.data
            
        })
        }
};
</script>

<style lang="less" scoped>
    .biaozhu{
        display: flex;
        justify-content: space-around;
    }
            .shangpin{
            width: 100%;
            background-color: #fff;
            height: 1.6rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h2{
                font-weight: 500;
                font-size: 0.2rem;
            }
            P:nth-of-type(1){
                margin: 0.2rem 0;
            }
        }
</style>