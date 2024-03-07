<template>
  <view class="container">
    <button
      class="avatar-wrapper"
      open-type="chooseAvatar"
      @chooseavatar="onChooseAvatar"
    >
      <image
        mode="aspectFill"
        class="avatar"
        :src="userInfo.headimgurl"
      ></image>
    </button>

    <view class="flex nickname justify-c-center">
      <text>昵称：</text>
      <input
        @blur="setNickname"
        :value="userInfo.nickname"
        @input="getNickname"
        type="nickname"
        class="weui-input"
        placeholder="请输入昵称"
      />
    </view>

    <view class="btn flex">
      <button @click="onCancel" type="">取消</button>
      <button @click="onSubmit" type="primary">保存</button>
    </view>
  </view>
</template>

<script>
import { isShowLoading } from "@/utils/request.js";
import{setUserInfo,getUserInfo}from'@/utils/user.js'
import { editUserInfo,wxGetUserInfo } from "@/api/wxlogin.js";
export default {
  name: "EditIndex",
  onLoad() {
    // console.log("请求的loading");

    console.log("请求的loading", isShowLoading);
  },
  data() {
    return {
      userInfo: {
        headimgurl: "",
        nickname: "",
      },
    };
  },
  onShow(){
    const res=getUserInfo()
    this.userInfo=res
  },
  methods: {
    onChooseAvatar(e) {
      const { avatarUrl } = e.detail;
      this.userInfo.headimgurl = avatarUrl;
    },
    getNickname(e) {
      // console.log('昵称是:',e.detail.value);
      this.userInfo.nickname = e.detail.value;
    },
    setNickname(e) {
      this.userInfo.nickname = e.detail.value;
      // console.log('失去焦点昵称是:',e.detail);
    },
    onSubmit() {
      this.setUserInfo();
    },
    async setUserInfo() {
      try {
        await editUserInfo(this.userInfo);

        uni.showToast({
          title: "修改个人信息成功",
          // duration: 2000,
          success: () => {
            this.saveUserInfo()
            // uni.navigateTo({
            //   url: "../index/index",
            // });
          },
        });
      } catch (error) {
        uni.showToast({
          title: "修改失败！请刷新重试",
        });
      }
    },
    async saveUserInfo(){
      try {
        const res = await wxGetUserInfo()
        console.log(res);
        setUserInfo(res);
        uni.switchTab({
          url:'../user/user'
        })
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style lang="less" scoped>
.avatar-wrapper {
  padding: 0;
  width: 200rpx;
  height: 200rpx;
  margin: 20rpx auto;
  .avatar {
    width: 100%;
    height: 100%;
  }
}
.nickname {
  width: 100%;
}
.btn {
  margin-top: 100rpx;
}
</style>