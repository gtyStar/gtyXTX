<script setup>
defineOptions({
  name: 'HomePage'  // 改为多单词名称
})
// 引入组件
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomeLike from './components/HomeLike.vue'


import { useSearchStore } from '@/store/search'
import { ref, onMounted, watch } from 'vue'
const { searchHistory } = useSearchStore()
const showLike = ref(false)
onMounted(() => {
  if (searchHistory.length === 0) {
    showLike.value = false
  } else {
    showLike.value = true
  }
})
watch(searchHistory, () => {
  if (searchHistory.length === 0) {
    showLike.value = false
  } else {
    showLike.value = true
  }
})
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeLike v-if="showLike" />
  <HomeNew />
  <HomeHot />
  <HomeProduct />
</template>

<style lang="less" scoped>
</style>

