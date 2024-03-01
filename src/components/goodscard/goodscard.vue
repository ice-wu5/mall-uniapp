<template>
    <view class="goodscard">
      <view>
        <image src="http://39.98.123.211:8300/images/banner-1.png" class="image" mode="widthFix"></image>
      </view>
      <view class="desc">
        <view class="title">冰淇冰淇淋冰淇冰淇冰淇淋冰淇淋冰淇淋冰淇淋冰淇淋冰淇1淋淋冰淇淋冰淇淋冰淇淋冰淇1淋</view>
        <view class="subtitle">花花花花花花冰淇冰淇淋冰淇淋冰淇淋冰淇淋冰淇淋冰淇1淋花花花花花花花花</view>
        <view class=" operation flex">
          <view  class="final-price">￥5088</view>
          <view class="price">￥5088</view>
          <view class="icon">
            <uni-icons type="cart" size="20" color="#e9e"></uni-icons>
          </view>
        </view>
      </view>
    </view>
</template>

<script>
import {uniIcons} from '@dcloudio/uni-ui'
export default {
name:'GoodsCard',
components: {uniIcons}
}
</script>

<style lang="less" scoped>

  .goodscard{
    width: 350rpx;
    margin-bottom: 25rpx;

    .desc{
      width: 100%;
      padding: 0 10rpx;
      background-color: #fff;
      .title{
        overflow: hidden; /* 超出部分隐藏 */
        text-overflow: ellipsis; /* 超出部分显示省略号 */
        display: -webkit-box; /* 将元素作为弹性伸缩盒子 */
        -webkit-box-orient: vertical; /* 设置弹性伸缩盒子的子元素垂直排列 */
        -webkit-line-clamp: 2; /* 显示的最大行数 */
        font-size: 26rpx; /* 文字大小 */
        line-height: 26rpx; /* 行高 */
        font-weight: 700;
        margin-bottom: 10rpx;
      }
      .subtitle{
        overflow: hidden; /* 超出部分隐藏 */
        text-overflow: ellipsis; /* 超出部分显示省略号 */
        display: -webkit-box; /* 将元素作为弹性伸缩盒子 */
        -webkit-box-orient: vertical; /* 设置弹性伸缩盒子的子元素垂直排列 */
        -webkit-line-clamp: 2; /* 显示的最大行数 */
        font-size: 22rpx; /* 文字大小 */
        line-height: 22rpx; /* 行高 */
        margin-bottom: 10rpx;
  
      }
    }
    .operation{
      justify-content: space-between;
      font-size: 26rpx;
    }
    .image{
      width: 100%;
    }
  
  }


</style>  