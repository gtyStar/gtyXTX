// 获取支付相关的API
import http from '@/utils/http'

// 获取-订单详情(以及支付结果)
export const getOrderDetailAPI = (id) => {
  return http({
    url: `/member/order/${id}`
  })
}
