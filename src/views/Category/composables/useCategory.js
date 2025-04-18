// 封装分类数据业务相关代码
import { ref, onMounted, watch } from 'vue'
import { getTopCategoryAPI } from '@/apis/category'
// 为获取当前路由参数做准备
import { useRoute } from 'vue-router'

import { ElLoading } from 'element-plus'


export const useCategory = () => {
  const route = useRoute()
  const categoryData = ref({})
  const getCategoryData = async (id) => {
    const loading = ElLoading.service({
      lock: true,
      text: '正在加载中😍😍😍',
      background: 'rgba(0, 0, 0, 0.1)',
    })
    const res = await getTopCategoryAPI(id)
    categoryData.value = res?.result
    loading.close()
  }
  // 有个问题，因为路由缓存，所以，当路由参数变化时，不会重新获取数据，两个办法：
  // 1. 给 routerv-view 添加key属性，破坏缓存
  //    缺点：每次切换路由都会重新请求所有数据，造成性能浪费
  // 2. 监听路由参数变化，重新获取数据
  //    ①使用 watch 监听
  //    ②使用 onBeforeRouteUpdate((to) => {}) 路由更新守卫， to 是新路由参数
  // 监听路由参数变化，重新获取数据
  watch(() => route.params.id,  (newValue) => {
    getCategoryData(newValue)
  })

  onMounted(() => {
    getCategoryData(route.params.id)
  })

  return {
    categoryData
  }
}
