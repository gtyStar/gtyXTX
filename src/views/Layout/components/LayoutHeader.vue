<script setup>
import HeaderCart from './HeaderCart.vue';
// 使用 pinia 的数据渲染头部导航栏
import { useCategoryStore } from '@/store/category'
const categoryStore = useCategoryStore()
import { onMounted } from 'vue'
// 获取购物车数据------------------------------------------------------------------------------------
import { useCartStore } from '@/store/cartStore'
const cartStore = useCartStore()
onMounted(() => {
  cartStore.getCartList()
})
// 搜索功能---------------------------------------------------------------------------------------------
import { ElMessage } from 'element-plus'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useSearchStore } from '@/store/search'
const { searchHistory, addSearchHistory, delSearchHistory } = useSearchStore()
const router = useRouter()
const isShowPlus = ref(false) // 控制搜索框下方的提示框显示与隐藏
const isShow = ref(true)     // 控制搜索框历史或联想的显示与隐藏
const isShowMin1 = ref(false) // 控制搜索框联想提示框空内容的显示与隐藏
const searchModel = ref('') // 搜索框内容
// const searchHistory = ref([]) // 搜索历史
const searchThink = ref([]) // 搜索联想
const loadng = ref(false)   // 联想提示框模拟loading
// 联想算法
watch(() => searchModel.value, (newVal) => {
  isShowPlus.value = true
  loadng.value = true
  setTimeout(() => {
    loadng.value = false
  }, 500)
  if (newVal === '') {
    isShow.value = true
  } else {
    isShow.value = false
  }
  isShowMin1.value = false
  if(newVal === '酒') {
    searchThink.value = ['酒','红酒', '白酒']
  } else if(newVal === '数') {
    searchThink.value = ['数码', '数据线']
  } else if(newVal === '数码') {
    searchThink.value = ['数码','数据线', '耳机']
  } else if(newVal === '乐') {
    searchThink.value = ['乐器']
  } else if(newVal === '乐器') {
    searchThink.value = ['乐器','吉他']
  } else if(newVal === '头' || newVal === '头盔') {
    searchThink.value = ['头盔']
  } else if(newVal === '红' || newVal === '红酒') {
    searchThink.value = ['红酒']
  } else if(newVal === '白' || newVal === '白酒') {
    searchThink.value = ['白酒']
  } else if(newVal === '数据' || newVal === '数据线') {
    searchThink.value = ['数据线']
  } else if(newVal === '耳' || newVal === '耳机') {
    searchThink.value = ['耳机']
  } else if(newVal === '吉' || newVal === '吉他') {
    searchThink.value = ['吉他']
  } else {
    searchThink.value = []
    isShowMin1.value = true
  }
})
// 搜索范围
const searchRule = ['酒', '红酒', '白酒', '数码', '数据线', '耳机', '乐器', '吉他', '头盔']
// 搜索
const search = (item) => {
  if (searchRule.includes(item)) {
    addSearchHistory(item)  // 添加搜索历史
    searchModel.value = item
    isShowPlus.value = false  // 隐藏搜索框下方的提示框
    // 跳转到 subCategoryt 页面，并携带路由参数
    router.push(`/category/sub/${item}`)
  } else {
    ElMessage.warning('未搜索到内容，换一个吧')
  }
  searchModel.value = ''  // 清空搜索框内容
}
const scroll = () => {
  isShowPlus.value = false
}
</script>

<template>
  <header class='app-header' @wheel="isShowPlus = false" v-infinite-scroll="scroll">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>
      <ul class="app-header-nav">
        <!-- 渲染头部导航栏 -->
        <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
          <RouterLink active-class="active" :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
        </li>
      </ul>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜" @focus="isShowPlus = true" @keyup.enter="search(searchModel)" v-model="searchModel">
        <div class="show" v-if="isShowPlus" @mouseleave="isShowPlus = false">
          <div class="history" v-if="isShow">
            <div style="height: 16px; line-height: 16px;">搜索历史</div>
            <div class="historyItem" v-for="(item, index) in searchHistory" :key="item">
              <span @click="search(item)" class="itemName">{{ item }}</span>
              <i class="iconfont icon-close-new del" @click="delSearchHistory(index)"></i>
            </div>
            <div v-if="searchHistory.length === 0" style="text-align: center;">还没有搜索记录哦😘😘~<br>去搜索吧！😁</div>
          </div>
          <div class="think" v-else v-loading="loadng">
            <ul>
              <li v-for="item in searchThink" :key="item" @click="search(item)">{{ item }}</li>
            </ul>
            <el-empty v-if="isShowMin1" description="暂无搜索内容" style="height: 180px;"></el-empty>
          </div>
        </div>
      </div>
      <!-- 头部购物车 -->
      <HeaderCart @mouseenter="isShowPlus = false" />
    </div>
  </header>
</template>


<style scoped lang='scss'>
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }

  .app-header-nav {
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;

    li {
      margin-right: 40px;
      width: 38px;
      text-align: center;

      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;

        &:hover {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }

      .active {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }
  }

  .search {
    width: 170px;
    // height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }

    .show {
      position: fixed;
      width: 230px;
      z-index: 999;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      margin-top: 10px;
      padding: 10px;
      font-size: 12px;
      color: #666;

      .history {
        height: 100px;

        .historyItem {
          float: left;
          font-size: 15px;
          margin-top: 5px;
          margin-right: 10px;
          padding: 0 5px;

          &:hover {
            cursor: pointer;
            color: $xtxColor;
            background-color: #f5f5f5;
            border-radius: 5px;
          }

          .del:hover {
            color: red;
          }
        }
      }

      .think {
        height: 200px;
        font-size: 15px;

        li {
          height: 30px;

          &:hover {
            color: $xtxColor;
            cursor: pointer;
            background-color: #f5f5f5;
            border-radius: 5px;
            padding-left: 10px;
          }
        }
      }
    }
  }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>
