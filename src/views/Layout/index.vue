<script setup>
defineOptions({
  name: 'LayoutPage'  // 改为多单词名称
})

import layoutNav from './components/LayoutNav.vue'
import layoutHeader from './components/LayoutHeader.vue'
import layoutfooter from './components/LayoutFooter.vue'


</script>

<template>
  <layoutNav />
  <layoutHeader />
  <RouterView/>
  <layoutfooter />
</template>
