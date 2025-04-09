// 封装购物车模块
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getCartAPI, addCartAPI, mergeCartAPI, delCartAPI } from '@/apis/cart'
import { ElMessage } from 'element-plus'

export const useCartStore = defineStore('cart', () => {
  // 购物车列表数据
  const cartList = ref([])
  // 获取购物车列表
  const getCartList = async () => {
    const res = await getCartAPI()
    cartList.value = res.result
  }
  // 购物车数量
  const allCount = computed(() =>
    cartList.value.reduce((sum, item) => sum + item.count, 0)
  )
  // 购物车总价
  const allPrice = computed(() =>
    cartList.value.reduce((sum, item) => sum + item.count * item.nowPrice, 0)
  )

  // 添加商品到购物车
  const addCart = async (goods) => {
    // 通过匹配传递过来的商品对象中的skuId能不能在购物车列表中找到，来判断是否已经添加过
    const item = cartList.value.find(item => goods.skuId === item.skuId)
    // 已经添加过 - 调用合并购物车API
    if (item) {
      const res = await mergeCartAPI(goods.skuId, goods.selected, goods.count)
      console.log(res);
      getCartList()

    } else { // 没有添加过 - 调用加入购物车API
      const res = await addCartAPI(goods.skuId, goods.count)
      console.log(res);
      getCartList()
    }
  }
  // 删除购物车
  const loading = ref(false)
  const delCart = async (array) => {
    loading.value = true
    const res = await delCartAPI(array)
    console.log(res);
    getCartList()
    loading.value = false
    ElMessage.success('删除成功')
  }
  return {
    cartList,
    getCartList,
    allCount,
    allPrice,
    addCart,
    delCart,
    loading
  }
})
