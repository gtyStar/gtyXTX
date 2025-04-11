// 封装轮播图数据业务相关代码
import { getBannerAPI } from '@/apis/home'
import { ref, onMounted } from 'vue'
import { watch } from 'vue'
import { ElLoading } from 'element-plus'
import { useRoute } from 'vue-router'



export const useBanner = () => {
  const route = useRoute()
  const bannerList = ref([])
  const getBannerList = async () => {
    const res = await getBannerAPI('2')
    bannerList.value = res.result
  }

  // 封装一个loading函数
  const loading = async () => {
    const onLoading = ElLoading.service({
      lock: true,
      text: '正在加载中😍😍😍',
      background: 'rgba(0, 0, 0, 0.1)',
    })
    await getBannerList('2')
    onLoading.close()
  }

  onMounted(() => {
    loading()
  })
  // 监听路由参数变化，重新获取数据， loading效果------------------------------------------------------------------
  watch(() => route.params.id, async () => {
    loading()
  })

  return {
    bannerList
  }
}

// 使用watch监听，当路由参数变化时，重新获取数据
  // watch(() => route.params.id, async (newValue) => {
  //   const loading = ElLoading.service({
  //     lock: true,
  //     text: '正在加载中😍😍😍',
  //     background: 'rgba(0, 0, 0, 0.1)',
  //   })
  //   await getSubCategoryFilter(newValue)
  //   loading.close()
  // })
  // onMounted(() => {
  //   getSubCategoryFilter(route.params.id)
  // })
  // return {
  //   subCategoryFilterData
  // }
