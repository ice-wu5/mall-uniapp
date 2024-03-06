<template>
  <view class="container">
    
    <view class="bgi">
      <image class="height-300rpx width-100precent vertical-align" mode="aspectFill" src="http://39.98.123.211:8300/images/banner-2.png">
      </image>
    </view>
    <view class="userInfo bgc-eee width-height-1">
      <view class="nickname height-150rpx bgc-fff border-radius-20rpx margin-side30rpx-b-20rpx position-relative">
        <image class="w150-h150 border-radius-50 position-absoule left-5 top--20" src="http://39.98.123.211:8300/images/banner-2.png"></image>
        <view class="position-absoule left-30 top-20">用户昵称</view>
      </view>
      <view class="myorder padding-10 height-200rpx bgc-fff border-radius-20rpx margin-side30rpx-b-20rpx">
        <view class="flex align-items-center height-100rpx justify-content-space-between">
          <view class="">我的订单</view>
        <view class="color-eee font-size-12px">查看更多></view>
        </view>
        <view class="flex justify-content-space-between font-size-26rpx">
          <view>商品订单</view>
        <view>礼品卡订单</view>
        <view>退款/售后</view>
        </view>
        
      </view>
      <view class="myorder padding-10 height-200rpx bgc-fff border-radius-20rpx margin-side30rpx-b-20rpx">
        <view class="flex align-items-center height-100rpx justify-content-space-between">
          <view class="">我的功能</view>
        </view>
        <view class="flex font-size-26rpx">
          <view class="margin-right-20rpx">地址管理</view>
        <view>我的客服</view>
        </view>
        
      </view>
      <view class="myorder padding-10 height-400rpx bgc-fff border-radius-20rpx margin-side30rpx-b-20rpx">
        <view class="flex align-items-center height-100rpx justify-content-space-between">
          <view class="">关于售前售后服务</view>
        </view>
        <view class=" font-size-26rpx color-eee">
          <view class="margin-right-20rpx">地址管理</view>
          <view class="margin-right-20rpx">地址管理</view>
          <view class="margin-right-20rpx">地址管理</view>
          <view class="margin-right-20rpx">地址管理</view>
        </view>
        
      </view>
    </view>
  </view>
</template>

<script>
export default {
name:'UserIndex'
}
</script>

<style lang="less" scoped>

</style>