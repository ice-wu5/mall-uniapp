"use strict";

// 变量可自行添加修改
export const appid='wxba087a403d9d46a9' 


/**
 * 	appid : 		小程序appid
 *  baseUrl : 		服务端域名
 */
export const baseUrl=process.env.VUE_APP_PLATFORM === 'h5'?'/api':'https://gmall-prod.atguigu.cn'