import http from '@/utils/http'

// 获取一级导航数据
export function getCategoryAPI() {
  return http({
    url: 'home/category/head'
  })
}
