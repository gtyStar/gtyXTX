<script setup>
defineOptions({
  name: 'LayoutPage'  // 改为多单词名称
})

import layoutNav from './components/LayoutNav.vue'
import layoutHeader from './components/LayoutHeader.vue'
import layoutFooter from './components/LayoutFooter.vue'
import layoutFixed from './components/LayoutFixed.vue'

// 触发仓库里的 获取导航列表事件
import { useCategoryStore } from '@/store/category'
import { onMounted } from 'vue'
const categoryStore = useCategoryStore()
// 在组件挂载到DOM后立即执行内部的回调函数
onMounted(()=>{
  categoryStore.getCategory()
})

</script>

<template>
  <layoutFixed />
  <layoutNav />
  <layoutHeader />
  <!-- 添加 :key="$route.fullPath"，破坏复用机制，每次路由变化都会重新渲染组件 -->
  <RouterView />
  <layoutFooter />
</template>
