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

// 删除地址
export const delAddressAPI = (id) => {
  return http({
    url: `/member/address/${id}`,
    method: 'DELETE'
  })
}

// 根据地区获取邮编
// import axios from 'axios'
// export const getCodeAPI = (area) => {
//   return axios.get('https://sapi.k780.com', {
//     params: area
//   },{
//       header: {
//         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//       }
//     }
//   )
// }

// 添加地址
export const addAddressAPI = (data) => {
  return http({
    url: '/member/address',
    method: 'POST',
    data
  })
}

// 修改地址
export const editAddressAPI = (id, data) => {
  return http({
    url: `/member/address/${id}`,
    method: 'PUT',
    data
  })
}

// 获取地址
export const getAddressAPI = () => {
  return http({
    url: '/member/address'
  })
}
