<template>
  <view class="container">
    <!-- 购物车列表 -->
    <view class="cartlist">
      <CartItem
        @changeNumber="changeNumber"
        @singleCheck="singleCheck"
        v-for="i in cartList"
        :key="i.goodsId"
        :cartObject="i"
      ></CartItem>
    </view>
    <!-- 结算 -->
    <view class=" bgc-fff toBuy flex height-100rpx align-items-center width-100precent">
      <view>
        <view class="checkbox">
          <view class="checkbox">
            <checkbox-group @change="changeAllSecect">
              <checkbox :value="1" :checked="isAllChecked" />全选
            </checkbox-group>
          </view>
        </view>
      </view>
      <view class="flex-one flex justify-content-end ">
        <view class="total margin-right-20rpx">合计：￥8888</view>
        <view class="">
          <button class="buy color-fff" :disabled="cartList.length===0">去结算(888)</button></view>
      </view>
    </view>
    <!-- 空列表图片 -->
    <view class="empty">没有数据哟</view>
  </view>
</template>

<script>
import CartItem from "@/components/cartitem/cartitem.vue";
import {
  getCartList,
  changeAllChecked,
  checkCart,
  addToCart,
} from "@/api/cart.js";
export default {
  name: "CartIndex",
  components: {
    CartItem,
  },
  data() {
    return {
      cartList: [],
      checkbox1: 1,
      hobby: [
        {
          text: "全选",
          value: 1,
        },
      ],
      isAllChecked: "",
      totalPrice:'',
      totalCount:''
    };
  },
  onShow() {
    this.getCartListByToken();
  },
  methods: {
    computeIsAllChecked() {
      if (this.cartList.length) {
        this.isAllChecked = this.cartList.every((item) => item.isChecked === 1);
      }
    },
    changeNumber(goodsId, count) {
      this.changeGoodsCount(goodsId, count);
    },
    async changeGoodsCount(goodsId, count) {
      try {
        const res = await addToCart({
          goodsId,
          count,
        });
        console.log(res);
        this.getCartListByToken();
      } catch (error) {
        console.log(error);
      }
    },
    singleCheck(goodsId, isChecked) {
      this.singleCheckChange(goodsId, isChecked);
      //单选点击取消，发请求,
    },
    //单选发请求，功能函数
    async singleCheckChange(goodsId, isChecked) {
      try {
        const res = await checkCart({
          goodsId,
          isChecked,
        });
        console.log("74行", res);
        this.getCartListByToken();
      } catch (error) {
        console.log(error);
      }
    },
    async changeAllSecect(e) {
      // console.log(e,'64行');
      if (e.detail.value.length) {
        this.isAllChecked = true;
      } else {
        this.isAllChecked = false;
      }
      let isChecked = "";
      isChecked = this.isAllChecked === true ? 1 : 0;
      try {
        const res = await changeAllChecked({
          isChecked,
        });
        this.getCartListByToken()
        // console.log('74行',res);
      } catch (error) {
        console.log(error);
      }
    },

    async getCartListByToken() {
      try {
        const res = await getCartList();
        this.cartList = res;
        this.computeIsAllChecked()
        // console.log(res);
      } catch (error) {
        console.log("获取购物车列表失败");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.toBuy {
  position: fixed;
  bottom: var(--window-bottom);
  left: 0;
}
.buy {
  height: 60rpx;
  line-height: 60rpx;
  padding: 0 20rpx;
  background-color: #e9a54d;
  border-radius: 30rpx;
}
.total {
  height: 60rpx;
  line-height: 60rpx;
}
</style>