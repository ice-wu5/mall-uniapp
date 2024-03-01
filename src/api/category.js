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