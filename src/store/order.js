// 地址仓库
import { defineStore } from 'pinia'
import { getCheckoutAPI, getAddressAPI } from '@/apis/checkout'
import { ref } from 'vue'
import { ElLoading } from 'element-plus'

export const useCheckoutStore = defineStore('checkout', () => {
  // 用户订单信息
  const checkInfo = ref({})
  // 获取用户订单信息
  const getCheckout = async () => {
    const loading = ElLoading.service({
      lock: true,
      text: '正在加载中😍😍😍',
      background: 'rgba(0, 0, 0, 0.1)',
    })
    const res = await getCheckoutAPI()
    loading.close()
    // 给 res.ressult.userAddresses倒过来
    const reverseUserAddresses = []
    for (let i = res.result.userAddresses.length - 1; i >= 0; i--) {
      reverseUserAddresses.push(res.result.userAddresses[i])
    }
    checkInfo.value = res.result
    checkInfo.value.userAddresses = reverseUserAddresses
    // 遍历地址列表，给默认的地址添加 isShow 属性
    checkInfo.value.userAddresses.forEach(item => {
      if (item.isDefault === 0) {
        item.isShow = true
      } else {
        item.isShow = false
      }
    })
  }
  // 用户地址信息
  const userAddresses = ref([])
  // 获取用户地址信息
  const getAddress = async () => {
    const loading = ElLoading.service({
      lock: true,
      text: '正在加载中😍😍😍',
      background: 'rgba(0, 0, 0, 0.1)',
    })
    const res = await getAddressAPI()
    // 给 res.ressult 倒过来
    const reverseUserAddresses = []
    for (let i = res.result.length - 1; i >= 0; i--) {
      reverseUserAddresses.push(res.result[i])
    }
    userAddresses.value = reverseUserAddresses
    // 遍历地址列表，给默认的地址添加 isShow 属性
    userAddresses.value.forEach(item => {
      if (item.isDefault === 0) {
        item.isShow = true
      } else {
        item.isShow = false
      }
    })
    loading.close()
  }

  return {
    checkInfo,
    getCheckout,
    userAddresses,
    getAddress
  }
})
