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
  // 统一错误提示
  if (e.response.data.message === "服务器内部错误") return
  ElMessage({
    type: 'error',
    message: e.response.data.message || '请求失败'
  })
  // 无有效商品，跳转到首页
  if (e.response.data.message === "无有效商品") router.push('/')
  // 401 token 失效处理
  if (e.response.status === 401) {
    // 清空用户信息
    const userStore = useUserStore()
    userStore.clearUserInfo()
  }
  // return Promise.reject(e)
})


export default http
