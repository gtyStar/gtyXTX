// 封装所有和用户相关的请求
import http from "@/utils/http";

// 提交登录信息
export const postLogin = (account, password) => {
  return http({
    url: "/login",
    method: "post",
    data: {
      account,
      password,
    },
  })
}
// 个人中心里获取猜你喜欢
export const getLikeListAPI = ({ limit = 4 }) => {
  return http({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}
