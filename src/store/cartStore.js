// 封装购物车模块
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getCartAPI, addCartAPI, mergeCartAPI, delCartAPI, updateCartAPI } from '@/apis/cart'
import { ElMessage, ElMessageBox } from 'element-plus'

export const useCartStore = defineStore('cart', () => {
  // 购物车列表数据---------------------------------------------------------------------------------------
  const cartList = ref([])
  // 获取购物车列表---------------------------------------------------------------------------------------
  const getCartList = async () => {
    const res = await getCartAPI()
    cartList.value = res.result
    // 给购物车列表中每一项都添加一个loading属性，值为false
    cartList.value.forEach(item => {
      item.loading = false
    })
    // 给购物车列表中每一项的 selected 属性值改为 false
    cartList.value.forEach(item => {
      item.selected = false
    })
  }
  // 购物车数量---------------------------------------------------------------------------------------
  const allCount = computed(() =>
    cartList.value.reduce((sum, item) => sum + item.count, 0)
  )
  // 购物车总价---------------------------------------------------------------------------------------
  const allPrice = computed(() =>
    cartList.value.reduce((sum, item) => sum + item.count * item.nowPrice, 0)
  )

  // 添加商品到购物车---------------------------------------------------------------------------------------
  const addCart = async (goods) => {
    // 通过匹配传递过来的商品对象中的skuId能不能在购物车列表中找到，来判断是否已经添加过
    const item = cartList.value.find(item => goods.skuId === item.skuId)
    // 已经添加过 - 调用合并购物车API
    if (item) {
      await mergeCartAPI(goods.skuId, goods.selected, goods.count)
      getCartList()

    } else { // 没有添加过 - 调用加入购物车API
      await addCartAPI(goods.skuId, goods.count)
      getCartList()
    }
  }
  // 删除购物车---------------------------------------------------------------------------------------
  const loading = ref(false)
  const delCart = async ([skuId]) => {
    loading.value = true
    ElMessageBox.confirm(
      '你确定要删除该商品名？',
      '再删就没有了',
      {
        confirmButtonText: '删除',
        cancelButtonText: '再想想',
        type: 'warning',
      }
    )
    .then(async () => {
      await delCartAPI(skuId)
      getCartList()
      ElMessage.success('删除成功')
    })
    .catch(() => {
      getCartList()
    })
    loading.value = false
  }
  // 修改购物车---------------------------------------------------------------------------------------
  const updateCart = async (skuId, selected, count) => {
    cartList.value.find(item => item.skuId === skuId).loading = true
    if (count === 0) {
      delCart([skuId])
    } else {
      await updateCartAPI(skuId, selected, count)
      await getCartList()
    }
    cartList.value.find(item => item.skuId === skuId).loading = false
  }

  // 全选反选那一块---------------------------------------------------------------------------------------
  // 全选框
  const allCheckSelected = ref(false)
  const allCheck = () => {
    allCheckSelected.value = !allCheckSelected.value
    cartList.value.forEach(item => {
      item.selected = allCheckSelected.value
    })
  }
  // 当购物车列表中所有商品都选中时，全选框也选中(封装成一个方法)
  const isAllSelected = (() => {
    console.log(1);
    if (cartList.value.every(item => item.selected === true)) {
      allCheckSelected.value = true
    }else{
      allCheckSelected.value = false
    }
  })
  // 单选框
  const singleCheck = (index) => {
    cartList.value[index].selected = !cartList.value[index].selected
    // 当购物车列表中所有商品都选中时，全选框也选中
    isAllSelected()
  }
  // 选中的数量---------------------------------------------------------------------------------------
  const selectedCount = computed(() =>
    cartList.value.filter(item => item.selected === true).reduce((sum, item) => sum + item.count, 0)
  )
  // 选中的价格---------------------------------------------------------------------------------------
  const selectedPrice = computed(() =>
    cartList.value.filter(item => item.selected === true).reduce((sum, item) => sum + item.count * item.nowPrice, 0)
  )
  return {
    cartList,
    getCartList,
    allCount,
    allPrice,
    addCart,
    delCart,
    loading,
    updateCart,
    singleCheck,
    allCheckSelected,
    isAllSelected,
    allCheck,
    selectedCount,
    selectedPrice
  }
})
