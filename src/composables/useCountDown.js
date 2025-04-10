// 封装倒计时逻辑函数
import { ref, computed, onUnmounted } from 'vue'
import dayjs from 'dayjs'
export const useCountDown = () => {
  let timer = null
  // 1. 响应式数据
  const time = ref(0)
  // 将秒数格式化为xx分xx秒
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
  // 2. 开启倒计时的函数
  const start = (currentTime) => {
    time.value = currentTime
    // 2.1. 倒计时逻辑: 每秒减一
    timer = setInterval(() => {
      time.value--
    }, 1000)
  }
  // 组件销毁时清除定时器
  onUnmounted(() => {
    timer && clearInterval(timer)
  })
  return {
    formatTime,
    start
  }
}
