//存token
export const setToken = (token) => {
  uni.setStorage({
    key: 'token',
    data: token
  })
}

//取token
export const getToken = () => {
  const token=uni.getStorageSync('token')
  // uni.getStorageSync({
  //   key: 'token',
  //   success: function (res) {
  //     console.log('从本地取的token是:', res.data);
  //     token = res.data
  //   }
  // })
  return token
}
//存用户信息
export const setUserInfo = (userInfo) => {
  uni.setStorage({
    key: 'userInfo',
    data: userInfo
  })
}

//取用户信息
export const getUserInfo = () => {
  const userInfo=uni.getStorageSync('userInfo')
  // uni.getStorageSync({
  //   key: 'token',
  //   success: function (res) {
  //     console.log('从本地取的token是:', res.data);
  //     token = res.data
  //   }
  // })
  return userInfo
}