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
import { ElLoading } from 'element-plus'
const categoryStore = useCategoryStore()
// 在组件挂载到DOM后立即执行内部的回调函数
onMounted(async ()=>{
  const loading = ElLoading.service({
    lock: true,
    text: '正在加载中😍😍😍',
    background: 'rgba(0, 0, 0, 0.1)',
  })
  await categoryStore.getCategory()
  loading.close()
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
