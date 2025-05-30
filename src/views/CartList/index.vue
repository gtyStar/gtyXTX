<script setup>
defineOptions({
  name: 'CartList'  // 改为多单词名称
})
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
import { useCartStore } from '@/store/cartStore'
const cartStore = useCartStore()
// 更新购物车-------------------------------------------------------------------------------
const update = (skuId, selected, count, index) => {
  cartStore.updateCart(skuId, selected, count, index)
}
// 删除购物车-------------------------------------------------------------------------------
const delCart = (item) => {
  cartStore.delCart([item.skuId])
}
// 全选反选那一块-------------------------------------------------------------------------------
// 单选框
const singleCheck = (index, skuId, selected, count) => {
  cartStore.singleCheck(index)
  cartStore.updateCart(skuId, selected, count, index)
}
// 全选框
const allCheck = (selected) => {
  console.log(selected);
  cartStore.allCheck()
}
// 下单结算按钮
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
const $router = useRouter()
const buy = () => {
  if(cartStore.cartList.find((i) => i.selected === true)) {
    $router.push('/checkout')
  } else {
    ElMessage({
      message: '您还未选择选择商品',
      type: 'warning'
    })
  }
}
// 进入页面时，清空勾选框
import { onMounted, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
// 定义一个显示隐藏勾选框的变量
const showCheck = ref(false)
onMounted(async () => {
  showCheck.value = false
  await cartStore.getCartList()
  await cartStore.clearCheck()
  setTimeout(() => {
    showCheck.value = true
  }, 1000);
})
watch(() => route.path, async () => {
  showCheck.value = false
  await cartStore.getCartList()
  await cartStore.clearCheck()
  setTimeout(() => {
    showCheck.value = true
  }, 1000);
})
</script>

<template>
  <div class="xtx-cart-page">
    <div class="container m-top-20">
      <div v-if="cartStore.cartList.length && userStore.userInfo.token" class="cart">
        <table>
          <thead>
            <tr>
              <th width="120">
                <!-- 全选框 -->
                <el-checkbox v-if="showCheck" :model-value="cartStore.allCheckSelected" @change="allCheck" />
              </th>
              <th width="400">商品信息</th>
              <th width="220">单价</th>
              <th width="180">数量</th>
              <th width="180">小计</th>
              <th width="140">操作</th>
            </tr>
          </thead>
          <!-- 商品列表 -->
          <tbody>
            <tr v-for="(i, index) in cartStore.cartList" :key="i.id">
              <td>
                <!-- 单选框 -->
                <el-checkbox v-if="showCheck" :model-value="i.selected" @change="(selected) => singleCheck(index, i.skuId, selected, i.count)" />
              </td>
              <td>
                <div class="goods">
                  <RouterLink to="/"><img :src="i.picture" alt="" /></RouterLink>
                  <div>
                    <p class="name ellipsis">
                      {{ i.name }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="tc">
                <p>&yen;{{ i.price }}</p>
              </td>
              <td class="tc">
                <el-input-number v-loading="i.loading" :min="0" :max="i.stock" v-model="i.count" @change="update(i.skuId, i.selected, i.count, index)" />
              </td>
              <td class="tc">
                <p class="f16 red">&yen;{{ (i.price * i.count).toFixed(2) }}</p>
              </td>
              <td class="tc">
                <p>
                  <el-popconfirm title="确认删除吗?" confirm-button-text="确认" cancel-button-text="取消" @confirm="delCart(i)">
                    <template #reference>
                      <a href="javascript:;">删除</a>
                    </template>
                  </el-popconfirm>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- 操作栏 -->
        <div class="action">
          <div class="batch">
            共 {{ cartStore.allCount }} 件商品，已选择 {{ cartStore.selectedCount }} 件，商品合计：
            <span class="red">¥ {{ cartStore.selectedPrice.toFixed() }} </span>
          </div>
          <div class="total">
            <el-button size="large" type="primary" @click="buy">下单结算</el-button>
          </div>
        </div>
      </div>
      <div class="empty" v-else>
        <table>
          <tbody>
            <tr>
              <td colspan="6">
                <div class="cart-none">
                  <el-empty description="购物车列表为空" style="height: 500px;">
                    <el-button size="large" type="primary" @click="$router.push('/')">随便逛逛</el-button>
                    <el-button size="large" type="primary" v-if="!userStore.userInfo.token" @click="$router.push('/login')">去登陆</el-button>
                  </el-empty>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.xtx-cart-page {
  margin-top: 20px;

  .cart {
    background: #fff;
    color: #666;

    table {
      border-spacing: 0;
      border-collapse: collapse;
      line-height: 24px;

      th,
      td {
        padding: 10px;
        border-bottom: 1px solid #f5f5f5;

        &:first-child {
          text-align: left;
          padding-left: 30px;
          color: #999;
        }
      }

      th {
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
      }
    }

    .action {
      display: flex;
      background: #fff;
      margin-top: 20px;
      height: 80px;
      align-items: center;
      font-size: 16px;
      justify-content: space-between;
      padding: 0 30px;
      .xtx-checkbox {
        color: #999;
      }
      .batch {
        a {
          margin-left: 20px;
        }
      }
      .red {
        font-size: 18px;
        margin-right: 20px;
        font-weight: bold;
      }
    }
  }



  .tc {
    text-align: center;

    a {
      color: $xtxColor;
    }

    .xtx-numbox {
      margin: 0 auto;
      width: 120px;
    }
  }

  .red {
    color: $priceColor;
  }

  .green {
    color: $xtxColor;
  }

  .f16 {
    font-size: 16px;
  }

  .goods {
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
    }

    >div {
      width: 280px;
      font-size: 16px;
      padding-left: 10px;

      .attr {
        font-size: 14px;
        color: #999;
      }
    }
  }


  .empty {
    background: #fff;
    color: #666;

    table {
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
      line-height: 24px;

      .cart-none {
        text-align: center;
        padding: 30px 0;
        background: #fff;
      }
    }
  }
}
</style>
