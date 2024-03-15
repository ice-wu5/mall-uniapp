// 引用网络请求中间件
import request from '@/utils/request.js';
/**
 *    登陆请求
 */
export const  wxLogin=(data)=> {
	return request({
		url: `/mall-api/weixin/wxLogin/${data.code}`,
		method: 'GET',
		data
	})
}

//获取wx用户信息
// /mall-api/weixin/getuserInfo

export const  wxGetUserInfo=(data)=> {
	return request({
		url: `/mall-api/weixin/getuserInfo`,
		method: 'GET',
		data
	})
}

//更新用户信息
// /mall-api/weixin/updateUser

export const  editUserInfo=(data)=> {
	return request({
		url: `/mall-api/weixin/updateUser`,
		method: 'POST',
		data
	})
}
//上传用户头像
export const  avatarUpload=(data)=> {
	return request({
		url: `/mall-api/fileUpload`,
		method: 'POST',
		data
	})
}