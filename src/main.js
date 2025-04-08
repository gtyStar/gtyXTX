// 引入初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 引入自定义的插件-图片懒加载，并注册------------------------------------------------------------
import { lazy } from '@/directives'
app.use(lazy)
// 引入全局组件插件-----------------------------------------------------------------------------
import { componentPlugin } from '@/components'
app.use(componentPlugin)

app.mount('#app')

// 图片懒加载-------------单独封装成一个插件，在dirctives/index.js里--------------------
// // 定义懒加载插件
// import { useIntersectionObserver } from '@vueuse/core'
// // 定义全局指令
// app.directive('img-lazy', {
//   mounted(el, binding) {
//     // el: 指令绑定的元素-img
//     // binding: 指令的参数-img的地址
//     console.log(el, binding.value);
//     // 使用懒加载插件
//     useIntersectionObserver(
//       el,
//       ([{ isIntersecting }]) => {
//         // 进入视口区域为true，不在视口区域为false
//         if (isIntersecting) {
//           el.src = binding.value
//         }
//       },
//     )
//   }
// })



