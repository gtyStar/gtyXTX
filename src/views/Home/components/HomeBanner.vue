<script setup>
import { onMounted, ref } from 'vue'
import { ElLoading } from 'element-plus'
// 获取轮播图数据
import { getBannerAPI } from '@/apis/home.js'
const bannerList = ref([])
const getBannerList = async () => {
  const onLoading = ElLoading.service({
    lock: true,
    text: '正在加载中😍😍😍',
    background: 'rgba(0, 0, 0, 0.1)',
  })
  const res = await getBannerAPI('1')
  bannerList.value = res.result
  onLoading.close()
}
onMounted(() => {
  getBannerList()

})
</script>



<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img v-img-lazy="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
