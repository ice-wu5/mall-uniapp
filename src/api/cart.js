// 引用网络请求中间件
import request from '@/utils/request.js';
/**
 *    
 */
export const  getCartList=(data)=> {
	return request({
		url: '/mall-api/cart/getCartList',
		method: 'GET',
		data
	})
}
//全部选中与全部取消选中购物车商品
export const  changeAllChecked=(data)=> {
	return request({
		url: `/mall-api/cart/checkAllCart/${data.isChecked}`,
		method: 'GET',
		data
	})
}

///mall-api/cart/checkCart/{goodsId}/{isChecked}
export const  checkCart=(data)=> {
	return request({
		url: `/mall-api/cart/checkCart/${data.goodsId}/${data.isChecked}`,
		method: 'GET',
		data
	})
}

///mall-api/cart/addToCart/{goodsId}/{count}
export const  addToCart=(data)=> {
	return request({
		url: `/mall-api/cart/checkCart/${data.goodsId}/${data.count}`,
		method: 'GET',
	})
}
