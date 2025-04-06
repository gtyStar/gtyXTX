<script setup>
defineOptions({
  name: 'LayoutPage'  // 改为多单词名称
})

import layoutNav from './components/LayoutNav.vue'
import layoutHeader from './components/LayoutHeader.vue'
import layoutFooter from './components/LayoutFooter.vue'
import layoutFixed from './components/LayoutFixed.vue'


</script>

<template>
  <layoutFixed />
  <layoutNav />
  <layoutHeader />
  <RouterView/>
  <layoutFooter />
</template>
