<template>
  <view class="goodslist">
    <view class="like">猜你喜欢</view>
    <view class="goodsitem flex">
      <GoodsCard></GoodsCard>
      <GoodsCard></GoodsCard>
      <GoodsCard></GoodsCard>
      <GoodsCard></GoodsCard>
      <GoodsCard></GoodsCard>
    </view>
    <view class="more">查看更多</view>
  </view>

</template>

<script>
import GoodsCard from '@/components/goodscard/goodscard.vue'
export default {
name:'GoodsList',
components:{
  GoodsCard
}
}
</script>

<style lang="less" scoped>
.goodslist{
  background-color: #eee;
  width: 100%;
  .goodsitem{
    flex-wrap: wrap;
    justify-content: space-around;
    &::after{
      content: '';
      width:350rpx ;
    }
  }
  .like{
    width: 100%;
    height: 120rpx;
    line-height: 120rpx;
    font-size: 32rpx;
    font-weight: 700;
    text-align: center;
  }

  .more{
    width: 100%;
    height: 80rpx;
    line-height: 80rpx;
    font-size: 32rpx;
    text-align: center;
    background-color: #fff;
    border-radius: 40rpx;
  }
}
</style>  