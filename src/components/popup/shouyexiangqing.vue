<template>
    <div class="xiangqing">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(v,k) in goodsdata.gallery">
                <img :src="v.img_url" width="100%">
                
            </van-swipe-item>
        </van-swipe>
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
import { xiangqing } from '@/require/api';
import { jiagou } from '@/require/api';
export default {
    name: 'YanxuanShouyexiangqing',

    data() {
        return {
            id:'',
            goodsdata:[],
            show: false,
            value: 1,
        };
    },
    created(){
        console.log(this.$route.query);
        this.id=this.$route.query.id
        xiangqing({id:this.id})
        .then(res=>{
            this.goodsdata=res.data.data
            console.log(this.goodsdata);
        })
        },

    methods: {
        che(){
            this.$router.push('/gouwuche')
        },
        jiagou(){
            jiagou({'X-Nideshop-Token':localStorage.getItem('token')},{number:this.value,goodsId:this.id,productId:this.goodsdata.productList[0].goods_id})
            .then(res=>{
                console.log(res);
            }).catch(res=>{
                console.log('失败');
            })
        },
        showPopup() {
        this.show = true;
        },
        onClickIcon() {
        console.log(1);
        },
        onClickButton() {
        console.log(1);
        },
    },
};
</script>

<style lang="less" scoped>
   .xiangqing{
        background-color: #efefef;
        .my-swipe .van-swipe-item {
            color: #fff;
            font-size: 20px;
            text-align: center;
            background-color: #39a9ed;
            box-sizing: border-box;
            img{
                display: block;
            }
        }
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
        .canshu{
            background-color: #fff;
            h2{
                margin-left: 0.1rem;
                font-weight: 500;
            }
            p{
                width: 95%;
                // height: 0.26rem;
                line-height: 0.26rem;
                background-color: #efefef;
                margin: 0.1rem auto;
            }
        }
        /deep/.xia{
           
            img{
                width: 100%;
                display: block;
            }
        }
    }
</style>