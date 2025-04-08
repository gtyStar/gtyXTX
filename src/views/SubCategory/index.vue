<script setup>
defineOptions({
  name: 'SubCategory'  // 改为多单词名称
})
import { ref } from 'vue'
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
// 获取二级分类列表数据-------------------------------------------------------------
import { useSubFilter } from './composables/useSubFilter'
const { subCategoryFilterData } = useSubFilter()
// 获取基础列表数据渲染--------------------------------------------------------------------
import { useSubCategory } from './composables/useSubCategory'
const { goodList, changeReqData, load, disabled, loading } = useSubCategory()
// 列表筛选实现
const sortField = ref('')
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${subCategoryFilterData.parentId}` }">居家
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ subCategoryFilterData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="sortField" @tab-change="changeReqData(sortField)">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <GoodsItem v-for="goods in goodList" :key="goods.id" :goods="goods" />
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
