import axios from 'axios'
// 引入 element-plus 的消息提示组件
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/store/user'
import router from '@/router'


// 创建axios实例
const http = axios.create({
  baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 20000
})

// axios请求拦截器
http.interceptors.request.use(config => {
  // 从 pinia中获取 token
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  // 如果有token，就添加到请求头中
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
http.interceptors.response.use(res => res.data, e => {
  const path = ['/pay', '/paycallback', '/checkout']
  // 统一错误提示
  // 如果 path 中包括当前路由，并且错误码是 401，则直接 return
  if (!path.includes(window.location.pathname) && e.response.status === 401) {
    return
  }
  if (e.response.data.message === "服务器内部错误") return
  ElMessage({
    type: 'error',
    message: e.response.data.message || '请求失败'
  })
  console.log(window.location.pathname);

  // 无有效商品，跳转到首页
  if (e.response.data.message === "无有效商品") router.push('/')
  // 401 token 失效处理
  if (e.response.status === 401) {
    // 清空用户信息
    const userStore = useUserStore()
    userStore.clearUserInfo()
    // 跳转到登录页
    if (path.includes(window.location.pathname)) router.push('/login')
  }
  return Promise.reject(e)
})


export default http
