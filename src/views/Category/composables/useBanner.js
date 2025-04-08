// 封装轮播图数据业务相关代码
import { getBannerAPI } from '@/apis/home'
import { ref, onMounted } from 'vue'


export const useBanner = () => {
  const bannerList = ref([])
  const getBannerList = async () => {
    const res = await getBannerAPI('2')
    bannerList.value = res.result
    console.log(res);
  }
  onMounted(() => {
    getBannerList()
  })
  return {
    bannerList
  }
}
