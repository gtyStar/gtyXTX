// 获取基础列表数据渲染
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getSubCategoryAPI } from '@/apis/subCategory'
import { ElLoading } from 'element-plus'


export const useSubCategory = () => {
  const route = useRoute()
  const goodList = ref([])
  const reqData = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
  })
  // 获取商品列表
  const getGoodList = async () => {
    const onLoading = ElLoading.service({
      lock: true,
      text: '正在加载中😍😍😍',
      background: 'rgba(0, 0, 0, 0.1)',
    })
    console.log(reqData.value);
    const res = await getSubCategoryAPI(reqData.value)
    goodList.value = res.result.items
    onLoading.close()
  }

  // 定义修改传入的数据的方法
  const changeReqData = (sortField) => {
    reqData.value.sortField = sortField
    reqData.value.page = 1
    getGoodList()
  }

  // 获取更多数据
  const disabled = ref(false)
  const loading = ref(false)
  const load = async () => {
    loading.value = true
    // 获取下一页的数据
    reqData.value.page++
    const res = await getSubCategoryAPI(reqData.value)
    goodList.value = [...goodList.value, ...res.result.items]
    loading.value = false
    // 加载完毕 停止监听
    if (res.result.items.length === 0) {
      disabled.value = true
    }
  }

  // onMounted(() => getGoodList())

  return {
    goodList,
    reqData,
    changeReqData,
    load,
    disabled,
    loading,
    getGoodList
  }
}

