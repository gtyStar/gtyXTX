<script setup>
defineOptions({
  name: 'CategoryPage'  // 改为多单词名称
})
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
// 获取分类数据 ----------------------------------------------------------------
import { useCategory } from './composables/useCategory'
const { categoryData } = useCategory()


// import { useBanner } from './composables/useBanner'
// const { bannerList } = useBanner()

import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const imgUrls = ref([])
// 获取轮播图数据(静态) --------------------------------------------------------------
import jja from '@/assets/banner/1005000a.png'
import jjb from '@/assets/banner/1005000b.jpg'
import jjc from '@/assets/banner/1005000c.jpg'
import msa from '@/assets/banner/1005002a.jpg'
import msb from '@/assets/banner/1005002b.png'
import msc from '@/assets/banner/1005002c.jpg'
import fsa from '@/assets/banner/1010000a.png'
import fsb from '@/assets/banner/1010000b.png'
import fsc from '@/assets/banner/1010000c.jpg'
import mya from '@/assets/banner/1011000a.jpg'
import myb from '@/assets/banner/1011000b.jpg'
import myc from '@/assets/banner/1011000c.png'
import gha from '@/assets/banner/1013001a.jpg'
import ghb from '@/assets/banner/1013001b.png'
import ghc from '@/assets/banner/1013001c.jpg'
import yxa from '@/assets/banner/1019000a.jpg'
import yxb from '@/assets/banner/1019000b.png'
import yxc from '@/assets/banner/1019000c.jpg'
import sma from '@/assets/banner/1043000a.png'
import smb from '@/assets/banner/1043000b.jpg'
import smc from '@/assets/banner/1043000c.jpg'
import yda from '@/assets/banner/109243029a.jpg'
import ydb from '@/assets/banner/109243029b.png'
import ydc from '@/assets/banner/109243029c.png'
import zxa from '@/assets/banner/19999999a.jpg'
import zxb from '@/assets/banner/19999999b.jpg'
import zxc from '@/assets/banner/19999999c.jpg'

// 获取图片地址
const getImgUrls = async () => {
  if(route.params.id === '1005000') {
    imgUrls.value = [
      {
        imgUrl: jja,
        id: '1108008'
      }, {
        imgUrl: jjb,
        id: '3995913'
      }, {
        imgUrl: jjc,
        id: '1318002'
      }
    ]
  }else if(route.params.id === '1005002') {
    imgUrls.value = [
      {
        imgUrl: msa,
        id: '3419049'
      }, {
        imgUrl: msb,
        id: '1691024'
      }, {
        imgUrl: msc,
        id: '3995885'
      }
    ]
  } else if(route.params.id === '1010000') {
    imgUrls.value = [
      {
        imgUrl: fsa,
        id: '3827017'
      }, {
        imgUrl: fsb,
        id: '1555000'
      }, {
        imgUrl: fsc,
        id: '4019044'
      }
    ]
  } else if(route.params.id === '1011000') {
    imgUrls.value = [
      {
        imgUrl: mya,
        id: '3992495'
      }, {
        imgUrl: myb,
        id: '4005108'
      }, {
        imgUrl: myc,
        id: '4000277'
      }
    ]
  } else if(route.params.id === '1013001') {
    imgUrls.value = [
      {
        imgUrl: gha,
        id: '1006058'
      }, {
        imgUrl: ghb,
        id: '1487013'
      }, {
        imgUrl: ghc,
        id: '1124015'
      }
    ]
  } else if(route.params.id === '1019000') {
    imgUrls.value = [
      {
        imgUrl: yxa,
        id: '1683030'
      }, {
        imgUrl: yxb,
        id: '3986195'
      }, {
        imgUrl: yxc,
        id: '4017718'
      }
    ]
  } else if(route.params.id === '1043000') {
    imgUrls.value = [
      {
        imgUrl: sma,
        id: '3487028'
      }, {
        imgUrl: smb,
        id: '3806013'
      }, {
        imgUrl: smc,
        id: '3990582'
      }
    ]
  } else if(route.params.id === '109243029') {
    imgUrls.value = [
      {
        imgUrl: yda,
        id: '4023100'
      }, {
        imgUrl: ydb,
        id: '3994144'
      }, {
        imgUrl: ydc,
        id: '4014017'
      }
    ]
  } else if(route.params.id === '19999999') {
    imgUrls.value = [
      {
        imgUrl: zxa,
        id: '1085007'
      }, {
        imgUrl: zxb,
        id: '1525018'
      }, {
        imgUrl: zxc,
        id: '1589017'
      }
    ]
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
          <el-carousel-item v-for="item in imgUrls" :key="item.id">
            <img :src="item.imgUrl" alt="" @click="$router.push(`/detail/${item.id}`)">
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
    border-radius: 20px;
    overflow: hidden;
    img {
      width: 100%;
      height: 500px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}

</style>
