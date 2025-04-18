// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
export const lazy = {
  install(app) {
    // 定义全局指令-图片懒加载
    app.directive('img-lazy', {
      mounted(el, binding) {
        // el: 指令绑定的元素-img
        // binding: 指令的参数-img的地址
        // 使用懒加载插件
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            // 进入视口区域为true，不在视口区域为false
            if (isIntersecting) {
              el.src = binding.value
              stop()  // 停止监听，防止内存浪费
            }
          },
        )
      }
    })
  }
}
