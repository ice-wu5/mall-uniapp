<template>
  <view>
    <button @click="login" size="default" type="default">登录</button>
  </view>
</template>

<script>
import { wxLogin, wxGetUserInfo } from "@/api/wxlogin.js";
import { setToken, getToken, setUserInfo } from "@/utils/user.js";
export default {
  name: "LoginIndex",
  onLoad() {
    const res = getToken();
    console.log("onLoad获取token", res);
  },

  methods: {
    login() {
      uni.login({
        provider: "weixin",
        success: async (res) => {
          const code = res.code;
          try {
            const res = await wxLogin({ code });
            //  console.log(res);
            if (res.token) {
              setToken(res.token);
            }
            this.getWXUserInfo();
            //  console.log(token);
          } catch (error) {
            console.log("向后台登录获取token失败");
          }
        },
      });
    },
    async getWXUserInfo() {
      try {
        const res = await wxGetUserInfo();
        setUserInfo(res);
        uni.showToast({
          title: "登录成功",
          duration: 2000,
          success: () => {
            uni.redirectTo({
              url: "../edit/edit",
            });
          },
        });
        // console.log("用户信息", res);
      } catch (error) {
        console.log("获取用户信息失败");
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>