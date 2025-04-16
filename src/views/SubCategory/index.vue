<script setup>
defineOptions({
  name: 'SubCategory'  // 改为多单词名称
})
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
// 导入组件
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
// 获取二级分类列表数据-------------------------------------------------------------
import { useSubFilter } from './composables/useSubFilter'
const { subCategoryFilterData, getSubCategoryFilter } = useSubFilter()
// 获取基础列表数据渲染--------------------------------------------------------------------
import { useSubCategory } from './composables/useSubCategory'
const { goodList, changeReqData, load, disabled, loading, getGoodList } = useSubCategory()
// 列表筛选实现
const sortField = ref('publishTime')

const FilterData = ref({})
const goodsList = ref([])


// 引入搜索条件下的商品仓库
import { useSearchStore } from '@/store/search'
const { searchGoods } = useSearchStore()
const judge = ref(false)
const doraemon = async (id) => {
  judge.value = false
  if(id === '酒') {
    goodsList.value = [...searchGoods.wine.red, ...searchGoods.wine.white, ...searchGoods.wine.other]
  } else if(id === '红酒') {
    goodsList.value = [...searchGoods.wine.red]
  } else if(id === '白酒') {
    goodsList.value = [...searchGoods.wine.white]
  } else if(id === '数码') {
    goodsList.value = [...searchGoods.digital.line, ...searchGoods.digital.ear, ...searchGoods.digital.other]
  } else if(id === '数据线') {
    goodsList.value = [...searchGoods.digital.line]
  } else if(id === '耳机') {
    goodsList.value = [...searchGoods.digital.ear]
  } else if(id === '乐器' || id === '吉他') {
    goodsList.value = [...searchGoods.music.guitar]
  } else if(id === '头盔') {
    goodsList.value = [...searchGoods.helmet.helmets]
  } else {
    judge.value = true
    await getSubCategoryFilter(id)
    await getGoodList()
    FilterData.value = subCategoryFilterData.value
    goodsList.value = goodList.value
  }
}

onMounted(() => {
  doraemon(route.params.id)
})
watch(() => route.params.id, (newVal) => {
  doraemon(newVal)
})
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="judge" :to="{ path: `/category/${FilterData.parentId}` }">{{ FilterData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item v-if="judge">{{ FilterData.name }}</el-breadcrumb-item>
        <el-breadcrumb-item v-else>搜索</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="sortField" @tab-change="changeReqData(sortField)">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="judge ? load : ''" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <GoodsItem v-for="goods in goodsList" :key="goods.id" :goods="goods" />
      </div>
      <div v-if="loading" class="more">加载中。。。😂😂</div>
      <div v-if="disabled" class="more">没有更多了😘😘</div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  .more {
    font-size: 30px;
    text-align: center;
    padding: 20px 0;
    color: #999;
  }
}
</style>
