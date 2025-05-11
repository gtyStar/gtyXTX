<script setup>
import { ref, onMounted } from 'vue'
import { getUserOrderAPI } from '@/apis/user'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// tab列表
const tabTypes = [
  { name: "all", label: "全部订单" },
  { name: "unpay", label: "待付款" },
  { name: "deliver", label: "待发货" },
  { name: "receive", label: "待收货" },
  { name: "comment", label: "待评价" },
  { name: "complete", label: "已完成" },
  { name: "cancel", label: "已取消" }
]
// 获取订单列表-----------------------------------------------------------------------------------------
const orderList = ref([])
const params = ref({
  orderState: 0,
  page: 1,
  pageSize: 3
})
const loading = ref(true)
const getOrderList = async () => {
  loading.value = true
  const res = await getUserOrderAPI(params.value)
  orderList.value = res.result.items
  total.value = res.result.counts
  // 遍历订单列表，给每个订单添加一个倒计时时间
  orderList.value.forEach(item => {
    if (item.countdown === -1) {
      item.countdown = '已超时'
    } else {
      const { formatTime, start } = useCountDown()
      start(item.countdown)
      item.countdown = formatTime
    }
  })
  loading.value = false
}
onMounted(async () => {
  await getOrderList()
  console.log(orderList.value);
})
// tab切换----------------------------------------------------------------------------------------------
const tabChange = (type) => {
  params.value.orderState = type
  getOrderList()
}
// 分页-----------------------------------------------------------------------------------------------
const total = ref(0) // 总条数
const pageChange = (page) => {
  params.value.page = page
  getOrderList()
}
// 创建格式化函数
const fomartPayState = (payState) => {
  const stateMap = {
    1: '待付款',
    2: '待发货',
    3: '待收货',
    4: '待评价',
    5: '已完成',
    6: '已取消'
  }
  return stateMap[payState]
}
// 立即付款-----------------------------------------------------------------------------------------------------
import { useRouter } from 'vue-router'
const router = useRouter()
const creatOrder = (id) => {
  console.log(id)
  router.push({
    path: '/pay',
    query: {
      id
    }
  })
}
// 未付款的倒计时效果----------------------------------------------------------------------------------------------------
import { useCountDown } from '@/composables/useCountDown'


</script>

<template>
  <div class="order-container">
    <el-tabs @tab-change="tabChange">
      <!-- tab切换 -->
      <el-tab-pane v-for="item in tabTypes" :key="item.name" :label="item.label" />

      <div class="main-container" v-loading="loading">
        <div class="holder-container" v-if="orderList.length === 0">
          <el-empty description="暂无订单数据" />
        </div>
        <div v-else>
          <!-- 订单列表 -->
          <div class="order-item" v-for="order in orderList" :key="order.id">
            <div class="head">
              <span>下单时间：{{ order.createTime }}</span>
              <span>订单编号：{{ order.id }}</span>
              <!-- 未付款，倒计时时间还有 -->
              <span class="down-time" v-if="order.orderState === 1">
                <i class="iconfont icon-down-time"></i>
                <b>付款截止: {{ order.countdown }}</b>
              </span>
            </div>
            <div class="body">
              <div class="column goods">
                <ul>
                  <li v-for="item in order.skus" :key="item.id">
                    <a class="image" href="javascript:;">
                      <img :src="item.image" alt="" />
                    </a>
                    <div class="info">
                      <p class="name ellipsis-2">
                        {{ item.name }}
                      </p>
                      <p class="attr ellipsis">
                        <span>{{ item.attrsText }}</span>
                      </p>
                    </div>
                    <div class="price">¥{{ item.realPay?.toFixed(2) }}</div>
                    <div class="count">x{{ item.quantity }}</div>
                  </li>
                </ul>
              </div>
              <div class="column state">
                <p>{{ order.countdown === '已超时' && order.orderState === 1 ? '订单已超时，但由于接口原因不能取消订单' : fomartPayState(order.orderState) }}</p>
                <p v-if="order.orderState === 3">
                  <a href="javascript:;" class="green">查看物流</a>
                </p>
                <p v-if="order.orderState === 4">
                  <a href="javascript:;" class="green">评价商品</a>
                </p>
                <p v-if="order.orderState === 5">
                  <a href="javascript:;" class="green">查看评价</a>
                </p>
              </div>
              <div class="column amount">
                <p class="red">¥{{ order.payMoney?.toFixed(2) }}</p>
                <p>（含运费：¥{{ order.postFee?.toFixed(2) }}）</p>
                <p>在线支付</p>
              </div>
              <div class="column action">
                <el-button  v-if="order.orderState === 1 && order.countdown !== '已超时'" type="primary" size="small" @click="creatOrder(order.id)">
                  立即付款
                </el-button>
                <el-button v-if="order.orderState === 3" type="primary" size="small">
                  确认收货
                </el-button>
                <!-- <p><a href="javascript:;">查看详情</a></p> -->
                <p v-if="order.countdown === '已超时'">
                  <a href="javascript:;" @click="$router.push(`/detail/${order.skus[0].spuId}`)">再次购买</a>
                </p>
                <p v-if="[4, 5].includes(order.orderState)">
                  <a href="javascript:;">申请售后</a>
                </p>
                <p v-if="order.countdown !== '已超时'"><a href="javascript:;">取消订单</a></p>
              </div>
            </div>
          </div>
          <!-- 分页 -->
          <div class="pagination-container">
            <el-config-provider :locale="zhCn" >
              <el-pagination
                :total="total"
                @current-change="pageChange"
                :page-size="params.pageSize"
                background
                jumper-text="..."
                layout="prev, pager, next, jumper"
              />
            </el-config-provider>
          </div>
        </div>
      </div>
    </el-tabs>
  </div>

</template>

<style scoped lang="scss">
.order-container {
  padding: 10px 20px;

  .pagination-container {
    display: flex;
    justify-content: center;
  }

  .main-container {
    min-height: 500px;

    .holder-container {
      min-height: 500px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.order-item {
  margin-bottom: 20px;
  border: 1px solid #f5f5f5;

  .head {
    height: 40px;
    line-height: 40px;
    background: #f5f5f5;
    padding: 0 20px;
    overflow: hidden;

    span {
      margin-right: 20px;

      &.down-time {
        margin-right: 0;
        float: right;

        i {
          vertical-align: middle;
          margin-right: 3px;
        }

        b {
          vertical-align: middle;
          font-weight: normal;
        }
      }
    }

    .del {
      margin-right: 0;
      float: right;
      color: #999;
    }
  }

  .body {
    display: flex;
    align-items: stretch;

    .column {
      border-left: 1px solid #f5f5f5;
      text-align: center;
      padding: 10px;

      >p {
        padding-top: 10px;
      }

      &:first-child {
        border-left: none;
      }

      &.goods {
        flex: 1;
        padding: 0;
        align-self: center;

        ul {
          li {
            border-bottom: 1px solid #f5f5f5;
            padding: 10px;
            display: flex;

            &:last-child {
              border-bottom: none;
            }

            .image {
              width: 70px;
              height: 70px;
              border: 1px solid #f5f5f5;
            }

            .info {
              width: 220px;
              text-align: left;
              padding: 0 10px;

              p {
                margin-bottom: 5px;

                &.name {
                  height: 38px;
                }

                &.attr {
                  color: #999;
                  font-size: 12px;

                  span {
                    margin-right: 5px;
                  }
                }
              }
            }

            .price {
              width: 100px;
            }

            .count {
              width: 80px;
            }
          }
        }
      }

      &.state {
        width: 120px;

        .green {
          color: $xtxColor;
        }
      }

      &.amount {
        width: 200px;

        .red {
          color: $priceColor;
        }
      }

      &.action {
        width: 140px;

        a {
          display: block;

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }
}
</style>
