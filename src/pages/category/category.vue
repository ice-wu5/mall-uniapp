<template>
  <view class="category">
    <view class="category-container flex">
      <!-- 左侧导航 -->
      <scroll-view class="left" scroll-y show-scrollbar=true>
        <view class="list-item">
          <view class="nav-item active">水果第一</view>
        
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果水果</view>
          <view class="nav-item">水果最后</view>
        </view>
      </scroll-view>
      <!-- 右侧列表 -->
      <view class="right">right</view>
      
    </view>
  </view>
</template>

<script>
export default {
name:'CategoryIndex'
}
</script>

<style lang="less" scoped>

.category{
height: 100%;
}
.category-container{
height: 100%;
}
.left{
  
  width: 160rpx;
  height: 100%;
  background-color: aliceblue;
  & ::-webkit-scrollbar {
  display: none;
  }
  .nav-item{
    position: relative;
    width: 100%;
    height: 72rpx;
    line-height: 72rpx;
    text-align: center;
    font-size: 26rpx;
    &.active{
      color: rgb(255, 140, 0);
      background-color: #fff;
      &::before{
        position: absolute;
        left:5rpx;
        top: 15%;
        content: '';
        width: 10rpx;
        height: 70%;
        background-color: aqua;
      }
    }
  }
}
</style>