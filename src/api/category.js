// 引用网络请求中间件
import request from '@/utils/request.js';
/**
 *    登陆请求
 */
export const  getBanner=(data)=> {
	return request({
		url: '/mall-api/index/findBanner',
		method: 'GET',
		data
	})
}


//获取一级分类
export const findCategory1=(data)=>{
  return request({
		url: '/mall-api/index/findCategory1',
		method: 'GET',
		data
	})
}


//猜你喜欢
export const findListGoods=(data)=>{
  return request({
		url: '/mall-api/index/findListGoods',
		method: 'GET',
		data
	})
}

//人气推荐
export const findRecommendGoods=(data)=>{
  return request({
		url: '/mall-api/index/findRecommendGoods',
		method: 'GET',
		data
	})
}
//获取分类层级数据
export const findCategoryTree=(data)=>{
  return request({
		url: '/mall-api/index/findCategoryTree',
		method: 'GET',
		data
	})
}
//获取商品分页数据
export const getPageGoodsList=(data)=>{
  return request({
		url: `/mall-api/goods/list/${data.page}/${data.limit}`,
		method: 'GET',
		data
	})
}