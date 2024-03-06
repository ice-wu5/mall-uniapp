<template>
  <view class="container"> 
    
      <loading v-if="isLoading" :text="'加载中...'"></loading>
      <view v-if="!isLoading">
        <!-- 页面内容 -->
        <view class="hasData" v-if="goodsList.length">
          <view class="goods-list width-100precent flex wrap bgc-eee padding-top-bottom-10" >
            <view class="goods-item width-50precent flex-c align-items-center" v-for="item in goodsList" :key="item.id">
              <GoodsCard :goodsitem="item" ></GoodsCard>
            </view>
          </view>
          <view class="tips" v-if="status==='loading'">
            <uni-load-more status="more"></uni-load-more>
            <!-- <van-loading size="24px" vertical>加载中...</van-loading> -->
          </view>
          <view class="nomore" v-if="status==='nomore'">
            <uni-load-more status="nomore"></uni-load-more>
         
            <!-- <van-divider>没有更多啦</van-divider> -->
          </view>
        </view>
       <view class="noData" v-if="showEmpty===true">
        <view class="empty" >
          <uni-card :is-shadow="true" is-full class="text-align-center">
            <text class="uni-h6 ">没有数据哟</text>
          </uni-card>
          <!-- <van-empty description="没有啦" /> -->
        </view>
       </view>
      </view>

    
  </view>
</template>

<script>

import GoodsCard from'@/components/goodscard/goodscard.vue'
import {getPageGoodsList} from '@/api/category.js'

export default {
name:'GoodsList',
components:{
  GoodsCard
},
//打印参数category2Id
onLoad(options){
  options.category2Id && (this.category2Id=options.category2Id)
  this.getGoodsList()
},
data(){
  return{
    isLoading:false,
    goodsList:[],
    showEmpty:false,
    page:1,
    limit:10,
    category2Id:'',
    status:'more'
  }
},
//页面触底，上拉加载事件回调
onReachBottom(){
  this.status==='more' && this.getGoodsList()
  
},
methods:{
  //发请求拿数据渲染页面
  async getGoodsList(){
    

    this.status='loading'
    try {
      const res= await getPageGoodsList({
        page:this.page,
        limit:this.limit,
        category2Id:this.category2Id
      })

      if(res.records.length>0){//数组有值

        if(res.records.length===10){
          //还需要继续发请求，可能还有数据
          this.status='more'
        }else{
          
          //后面没有值了，不需要再发请求
          this.status='nomore'
        }
        //只要数组有值，就要push更新页面，并且page+1
        // console.log(res);
        this.goodsList.push(...res.records)
        this.page= ++this.page

      }else{
        //数组为空
      this.status='nomore'
      this.showEmpty=true
      }
    } catch (error) {
      this.status='error'
      console.log('获取分页数据失败',this.status);
    }finally{
    }
  }
}
}
</script>

<style lang="less" scoped>

</style>