// 封装结算页的请求API
import http from '@/utils/http'

// 获取生成-订单(结算页)
export const getCheckoutAPI = () => {
  return http({
    url: '/member/order/pre'
  })
}

// 提交-订单
export const creatOrderAPI = (data) => {
  return http({
    url: '/member/order',
    method: 'POST',
    data
  })
}
