import {baseUrl} from '../utils/env';
console.log('当前平台：', process.env.VUE_APP_PLATFORM);

console.log('baseURL:', baseUrl);

function service(options = {}) {

	options.url = `${baseUrl}${options.url}`;
  // console.log(options.url);
	// 判断本地是否存在token，如果存在则带上请求头
	// if (getToken()) {
	// 	options.header = {
	// 		'content-type': 'application/json',
	// 		'Authorization': `${getToken()}`	// 这里是token(可自行修改)
	// 	};
	// }
	uni.showLoading({
		title: '加载中'
	});
	return new Promise((resolved, rejected) => {
		options.success = (res) => {
			// 如果请求回来的状态码不是200则执行以下操作
			if (res.data.code !== 200) {
				// 非成功状态码弹窗
				uni.showToast({
					icon: 'none',
					duration: 3000,
					title: `${res.data.msg}`
				});
				// 登陆失效
				// if (res.data.code === 403) {
				// 	// 清除本地token
				// 	removeToken()
				// 	// 关闭所有页面返回到登录页
				// 	uni.reLaunch({
				// 		url: '/pages/login/login'
				// 	})
				// }
				// 返回错误信息
				rejected(res)
			} else {
				// 请求回来的状态码为200则返回内容
				resolved(res.data.data)
			}
		};
		options.fail = (err) => {
			// 请求失败弹窗
			uni.showToast({
				icon: 'none',
				duration: 3000,
				title: '服务器错误,请稍后再试'
			});
			rejected(err);
		};
		options.complete=()=>{
			
			
						//  关闭正在等待的图标
		uni.hideLoading();
			
		}
		uni.request(options);
	});
}

export default service;
