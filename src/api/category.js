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

