import http from '@/utils/http'

// 获取购物车列表
export const getCartAPI = () => {
  return http({
    url: '/member/cart',
  })
}

// 加入购物车
export const addCartAPI = (skuId, count) => {
  return http({
    url: '/member/cart',
    method: 'post',
    data: {
      skuId,
      count
    }
  })
}

// 合并购物车
export const mergeCartAPI = (skuId, selected, count) => {
  return http({
    url: '/member/cart/merge',
    method: 'post',
    data: [
      {
        skuId,
        selected,
        count
      }
    ]
  })
}

// 删除购物车
export const delCartAPI = (array) => {
  return http({
    url: '/member/cart',
    method: 'delete',
    data: {
      "ids": array
    }
  })
}
