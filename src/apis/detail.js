import http from "@/utils/http"

// 获取详情页
export const getDetailAPI = (id) => {
  return http({
    url:'/goods',
    params:{
      id
    }
  })
}

// 获取热榜商品
export const getHotGoodsAPI = (id, type) => {
  return http({
    url:'/goods/hot',
    params:{
      id,
      type,
      limit: 3
    }
  })
}
