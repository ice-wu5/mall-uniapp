<template>
  <view class="category flex">
    <view class="category-container flex">
      <!-- 左侧导航 -->
      <scroll-view class="left" scroll-y show-scrollbar="true">
        <view class="list-item">
          <view
            @click="getSubCategory(index, c.id)"
            class="nav-item"
            :class="{ active: active === index }"
            v-for="(c, index) in categoryTreeList"
            :key="c.id"
            >{{ c.name }}</view
          >
        </view>
      </scroll-view>
        <!-- 右侧列表 -->
      <view class="right">
          <view class="title margin-50rpx">{{goodsDetail.name}}</view>
          <view class="goods-list flex wrap">
            <navigator :url="`/pages/goods/goodslist/goodslist?category2Id=${i.id}`"  class="goods-item flex-c align-items-center padding-top-bottom-10" v-for="i in goodsDetail.children" :key="i.id">
              <image :src="i.imageUrl" class="image"></image>
              <text class="font-size-12px">{{i.name}}</text>
            </navigator>
          </view>
      </view>
    </view>
    
  </view>
  
</template>

<script>
import { findCategoryTree } from "@/api/category.js";
export default {
  name: "CategoryIndex",
  data() {
    return {
      active: 0,
      categoryTreeList: [],
      goodsDetail:{}
    };
  },
  mounted() {
    this.getCategoryTreeList();
  },

  methods: {
    getSubCategory(index, id) {
      this.active = index;
      this.goodsDetail=this.categoryTreeList[index]
    },
    async getCategoryTreeList() {
      try {
        const res = await findCategoryTree();
        this.categoryTreeList = res;
        this.goodsDetail=res[this.active]
        console.log(res);
      } catch (error) {
        console.log("getCategoryTreeList error");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.category {
  height: 100%;
  width: 100%;
}
.category-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .right{
    width: 100%;
    padding-left: 160rpx;
  }
}
.left {
  position: fixed;
  left: 0;
  top: var(--window-top);

  left:0;
  padding-bottom: 100rpx;
  
  width: 160rpx;
  height: 100%;
  overflow: auto;
  background-color: aliceblue;
  & ::-webkit-scrollbar {
    display: none;
  }
  .list-item{
   overflow: auto;
   height: 100%;
   padding-bottom: 100px;
  }
  .nav-item {
    position: relative;
    width: 100%;
    height: 72rpx;
    line-height: 72rpx;
    text-align: center;
    font-size: 26rpx;
    &.active {
      color: rgb(238, 138, 16);
      background-color: #fff;
      &::before {
        position: absolute;
        left: 8rpx;
        top: 20%;
        content: "";
        width: 8rpx;
        height: 60%;
        background-color: rgb(238, 138, 16);
      }
    }
  }
}

.goods-item{
  width: 33.333%;
  .image{
    width: 60rpx;
    height: 60rpx;
  }
}
</style>