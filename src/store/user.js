// 管理用户数据相关
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { postLogin } from '@/apis/user'

export const useUserStore = defineStore('user', () => {
  // state 用户数据
  const userInfo = ref({})
  // action 获取用户数据的方法
  const getUserInfo = async (account, password) => {
    const res = await postLogin(account, password)
    userInfo.value = res.result
  }

  return {
    userInfo,
    getUserInfo
  }
},
{
  persist: true
})
