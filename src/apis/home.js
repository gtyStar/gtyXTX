import http from '@/utils/http'

// 获取轮播图数据
export function getBannerAPI(distributionSite) {
  return http({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

// 获取新鲜好物数据
export function getNewAPI() {
  return http({
    url: '/home/new'
  })
}

// 获取人气推荐数据
export const getHotAPI = () => {
  return http({
    url:'/home/hot'
  })
}

// 获取品牌数据
export const getProductAPI = () => {
  return http({
    url: '/home/goods'
  })
}
