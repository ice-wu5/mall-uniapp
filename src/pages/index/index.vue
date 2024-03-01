<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
import {getBanner}from '@/api/category.js'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
this.getBannerList()
		},
		methods: {
			async getBannerList() {
				try {
					const res = await getBanner()
					console.log(res);
					// const [err,res] = await uni.request({
					// 	url:`/api/mall-api/index/findBanner`
					// })()
					// // const res2 = await findCategory1()
					// console.log(err);
					// console.log(res.data);
				} catch (e) {
					//TODO handle the exception
					console.log('未获取到banner数据');
				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
