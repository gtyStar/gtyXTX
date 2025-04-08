import http from "@/utils/http";

// 获取二级分类页导航数据
export const getSubCategoryFilterAPI = (id) => {
  return http({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}
// 获取基础列表数据渲染
export const getSubCategoryAPI = (data) => {
  return http({
    url: '/category/goods/temporary',
    method: 'post',
    data
  })
}
