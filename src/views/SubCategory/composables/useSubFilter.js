// 获取二级分类列表数据
import { ref } from 'vue'
// import { useRoute } from 'vue-router'
import { getSubCategoryFilterAPI } from '@/apis/subCategory'
import { ElLoading } from 'element-plus'


export const useSubFilter = () => {
  // const route = useRoute()
  const subCategoryFilterData = ref([])
  const getSubCategoryFilter = async (id) => {
    const onLoading = ElLoading.service({
      lock: true,
      text: '正在加载中😍😍😍',
      background: 'rgba(0, 0, 0, 0.1)',
    })
    const res = await getSubCategoryFilterAPI(id)
    subCategoryFilterData.value = res.result
    onLoading.close()
  }
  // 使用watch监听，当路由参数变化时，重新获取数据
  // watch(() => route.params.id, async (newValue) => {
  //   await getSubCategoryFilter(newValue)
  // })
  // onMounted(() => {
  //   getSubCategoryFilter(route.params.id)
  // })
  return {
    subCategoryFilterData,
    getSubCategoryFilter
  }
}
