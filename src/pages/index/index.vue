<template>
	<view class="container">
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
						<view class="swiper-item" >
							<image class="image" :src="b.imageUrl" mode="aspectFill"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="nav-list flex">
				<view class="nav-list-item flex-c"  v-for="(c1,index) in category1" :key="c1.id" >
					<image class="nav-item-image" :class="{small:index>4}" :src="c1.imageUrl" mode="aspectFill"></image>
					<text>{{c1.name}}</text>
				</view>
			</view>
			<view class="link">
				<image mode="widthFix"  src="https://img.tukuppt.com/photo-big/17/97/44/886545fa13bb3db455.jpg!/fh/350" class="image"></image>
			</view>
			<view class="goodslist">
				<GoodsList title="猜你喜欢">
					<view  v-for="item in likeListGoods" :key="item.id">
					<GoodsCard :goodsitem="item"></GoodsCard>
					</view>
				</GoodsList>
				<GoodsList title="人气推荐">
					<view  v-for="item in recommondGoods" :key="item.id">
					<GoodsCard :goodsitem="item"></GoodsCard>
					</view>
				</GoodsList>
			</view>
		</view>
	</view>
 
</template>

<script>
import { getBanner, findCategory1,findListGoods,findRecommendGoods } from "@/api/category.js";
import GoodsList from'@/components/goodslist/goodslist.vue'
import GoodsCard from'@/components/goodscard/goodscard.vue'
export default {
  name: "Index",
	components:{
		GoodsList,
		GoodsCard
	},
  data() {
    return {
      bannerList: [],
      category1: [],
			likeListGoods:[],
			recommondGoods:[],
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
		this.getlikeListGoods()
		this.getRecommendGoods()
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
// console.log(res);
        this.category1 = res;
      } catch (error) {
        console.log("获取一级分类失败");
      }
    },
		async getlikeListGoods() {
      try {
        const res =await findListGoods();
// console.log(res);
        this.likeListGoods = res;
      } catch (error) {
        console.log("获取like失败");
      }
    },
		async getRecommendGoods() {
      try {
        const res =await findRecommendGoods();
console.log(res);
        this.recommondGoods = res;
      } catch (error) {
        console.log("获取recomm失败");
      }
    },
    async getBannerList() {
      try {
        const res = await getBanner();
        this.bannerList = res;
				console.log(this.bannerList);
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
	width: 100%;
	height: 100%;

	.link{
		text-align: center;
		padding: 10rpx 0;
		background-color: #eee;
		.image{
			width: 700rpx;

		}
	}
.goodslist{
	width: 100%;
	padding-bottom: 50rpx;
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
	height: 345rpx;
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


