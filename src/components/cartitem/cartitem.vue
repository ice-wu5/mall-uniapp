<template>
  <view class="cart-item">
    <view
      class="cart flex align-items-center height-170rpx padding-top-bottom-10"
    >
      <view class="checkbox">
        <checkbox-group
          @change="checkboxChange($event, cartObject.goodsId)"
          :data-id="cartObject.goodsId"
        >
          <checkbox
            :value="cartObject.isChecked"
            :checked="cartObject.isChecked === 1 ? true : false"
          />
        </checkbox-group>
      </view>
      <view class="image border-1-eee w150-h150 margin-right-20rpx">
        <image
          class="width-height-1"
          mode="aspectFill"
          :src="cartObject.imageUrl"
        ></image>
      </view>
      <view
        class="info flex-one flex-c height-100precent justify-content-space-between"
      >
        <view class="name">{{ cartObject.name }}</view>
        <view class="operation flex justify-content-space-between padding-10">
          <view class="price color-orange">￥{{ cartObject.price }}</view>
          <view class="del">
            <uni-icons type="trash" size="14"></uni-icons>
          </view>
          <view class="count">
            <uni-number-box
              @change="
                changeNumber($event, cartObject.goodsId, cartObject.count)
              "
              :value="cartObject.count"
              :min="1"
              :max="99"
            ></uni-number-box>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    cartObject: Object,
  },
  data() {
    return {
      isChecked: "",
      hobby: [{ value: 1, text: "" }],
      vModelValue: "",
    };
  },
  computed: {},
  methods: {
    checkboxChange(e, goodsId) {
      // console.log('60行',e);
      // console.log('61行',id);
      this.isChecked = e.detail.value.length;
      // console.log('63行',this.isChecked);
      this.$emit("singleCheck", goodsId, this.isChecked);
    },
    changeNumber(e, goodsId, count) {
      // console.log("68行", e, goodsId, count);
      let diffCount = e*1 - count*1;
      this.$emit("changeNumber", goodsId, diffCount);
    },
  },
};
</script>

<style lang="less" scoped>
</style>