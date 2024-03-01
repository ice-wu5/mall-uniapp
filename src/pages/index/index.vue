<template>
  <view class="content">
    <view class="uni-margin-wrap">
      <swiper
        class="swiper"
        circular
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
      >
        <swiper-item v-for="b in bannerList" :key="b.id">
          <image class="image" :src="b.imageUrl" mode="aspectFill"></image>
        </swiper-item>
      </swiper>
    </view>
    <view class="nav-list flex">
      <view class="nav-list-item flex-c"  v-for="(c1,index) in category1" :key="c1.id" >
        <image class="nav-item-image" :class="{small:index>4}" :src="c1.imageUrl" mode="aspectFill"></image>
        <text>{{c1.name}}</text>
      </view>
    </view>
		<view class="goodslist">
			<GoodsList></GoodsList>
		</view>
  </view>
</template>

<script>
import { getBanner, findCategory1 } from "@/api/category.js";
import GoodsList from'@/components/goodslist/goodslist.vue'
export default {
  name: "Index",
	components:{
		GoodsList
	},
  data() {
    return {
      bannerList: [],
      category1: [],
      title: "Hello",
      background: ["color1", "color2", "color3"],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
    };
  },
  onLoad() {
    this.getBannerList();
		this.getCategory1()
  },
  methods: {
    changeIndicatorDots(e) {
      this.indicatorDots = !this.indicatorDots;
    },
    changeAutoplay(e) {
      this.autoplay = !this.autoplay;
    },
    intervalChange(e) {
      this.interval = e.target.value;
    },
    durationChange(e) {
      this.duration = e.target.value;
    },

    async getCategory1() {
      try {
        const res =await findCategory1();
console.log(res);
        this.category1 = res;
      } catch (error) {
        console.log("获取一级分类失败");
      }
    },
    async getBannerList() {
      try {
        const res = await getBanner();
        this.bannerList = res;
        // console.log(res);
        // const [err,res] = await uni.request({
        // 	url:`/api/mall-api/index/findBanner`
        // })()
        // // const res2 = await findCategory1()
        // console.log(err);
        // console.log(res.data);
      } catch (e) {
        //TODO handle the exception
        console.log("未获取到banner数据");
      }
    },
  },
};
</script>


<style lang="less">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
.goodslist{
	width: 100%;
}
	.nav-list{
		font-size: 20rpx;
		flex-wrap: wrap;
		width: 100%;
		height: 200rpx;
		margin: 20rpx 0;
		.nav-list-item{
			justify-content: center;
			align-items: center;
			padding: 5rpx 0;

			width: 20%;
			height: 100rpx;
			
			.nav-item-image{
				width: 80rpx;
				height: 80rpx;
				&.small{
					width: 40rpx;
					height: 40rpx;
				}

			}
		}
	}
}
.uni-margin-wrap {
  width: 690rpx;
  width: 100%;
}
.swiper {
  height: 300rpx;
  .image {
    width: 100%;
    height: 100%;
  }
}
.swiper-item {
  display: block;
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
}
.swiper-list {
  margin-top: 40rpx;
  margin-bottom: 0;
}
.uni-common-mt {
  margin-top: 60rpx;
  position: relative;
}
.info {
  position: absolute;
  right: 20rpx;
}
.uni-padding-wrap {
  width: 550rpx;
  padding: 0 100rpx;
}
</style>


