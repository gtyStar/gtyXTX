// 获取二级分类列表数据
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getSubCategoryFilterAPI } from '@/apis/subCategory'

export const useSubFilter = () => {
  const route = useRoute()
  const subCategoryFilterData = ref([])
  const getSubCategoryFilter = async (id) => {
    const res = await getSubCategoryFilterAPI(id)
    subCategoryFilterData.value = res.result
  }
  // 使用watch监听，当路由参数变化时，重新获取数据
  watch(() => route.params.id, (newValue) => {
    getSubCategoryFilter(newValue)
  })
  onMounted(() => {
    getSubCategoryFilter(route.params.id)
  })
  return {
    subCategoryFilterData
  }
}
