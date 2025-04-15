<script setup>
defineOptions({
  name: 'CategoryPage'  // 改为多单词名称
})
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
// 获取分类数据 ----------------------------------------------------------------
import { useCategory } from './composables/useCategory'
const { categoryData } = useCategory()

// 获取轮播图数据(静态) --------------------------------------------------------------
// import { useBanner } from './composables/useBanner'
// const { bannerList } = useBanner()
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const imgUrls = ref([])
import jja from '@/assets/banner/1005000a.png'
import jjb from '@/assets/banner/1005000b.png'
import jjc from '@/assets/banner/1005000c.png'
import msa from '@/assets/banner/1005002a.gif'
import msb from '@/assets/banner/1005002b.jpg'
import msc from '@/assets/banner/1005002c.jpg'
import fsa from '@/assets/banner/1010000a.jpg'
import fsb from '@/assets/banner/1010000b.png'
import fsc from '@/assets/banner/1010000c.jpg'
import mya from '@/assets/banner/1011000a.jpg'
import myb from '@/assets/banner/1011000b.jpg'
import myc from '@/assets/banner/1011000c.jpg'
import gha from '@/assets/banner/1013001a.jpg'
import ghb from '@/assets/banner/1013001b.jpg'
import ghc from '@/assets/banner/1013001c.png'
import yxa from '@/assets/banner/1019000a.jpg'
import yxb from '@/assets/banner/1019000b.png'
import yxc from '@/assets/banner/1019000c.jpg'
import sma from '@/assets/banner/1043000a.jpg'
import smb from '@/assets/banner/1043000b.jpg'
import smc from '@/assets/banner/1043000c.jpg'
import yda from '@/assets/banner/109243029a.jpg'
import ydb from '@/assets/banner/109243029b.jpg'
import ydc from '@/assets/banner/109243029c.jpg'
import zxa from '@/assets/banner/19999999a.jpg'
import zxb from '@/assets/banner/19999999b.jpg'
import zxc from '@/assets/banner/19999999c.jpg'
// 获取图片地址
const getImgUrls = async () => {
  if(route.params.id === '1005000') {
    imgUrls.value = [jja, jjb, jjc]
  } else if(route.params.id === '1005002') {
    imgUrls.value = [msa, msb, msc]
  } else if(route.params.id === '1010000') {
    imgUrls.value = [fsa, fsb, fsc]
  } else if(route.params.id === '1011000') {
    imgUrls.value = [mya, myb, myc]
  } else if(route.params.id === '1013001') {
    imgUrls.value = [gha, ghb, ghc]
  } else if(route.params.id === '1019000') {
    imgUrls.value = [yxa, yxb, yxc]
  } else if(route.params.id === '1043000') {
    imgUrls.value = [sma, smb, smc]
  } else if(route.params.id === '109243029') {
    imgUrls.value = [yda, ydb, ydc]
  } else if(route.params.id === '19999999') {
    imgUrls.value = [zxa, zxb, zxc]
  }
  console.log(imgUrls.value);
}
onMounted(() => {
  getImgUrls()
})
// 监听路由参数变化
watch(() => route.params.id, () => {
  getImgUrls()
})
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 轮播图 -->
      <div class="home-banner">
        <el-carousel height="500px">
          <el-carousel-item v-for="(item, index) in imgUrls" :key="index">
            <img :src="item" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="i in categoryData.children" :key="i.id">
            <RouterLink :to="`/category/sub/${i.id}`">
              <img :src="i.picture" />
              <p>{{ i.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
        <div class="head">
          <h3>- {{ item.name }}-</h3>
        </div>
        <div class="body">
          <GoodsItem v-for="good in item.goods" :goods="good" :key="good.id" />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }

  .home-banner {
  width: 1240px;
  height: 500px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 500px;
  }
}
}

</style>
