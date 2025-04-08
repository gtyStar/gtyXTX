<script setup>
import { ref, onMounted, computed} from "vue"
// 定义props
const props = defineProps({
  // type适配不同类型热榜数据
  type: {
    type: Number,
    default: 1  // 1代表24小时热销榜 2代表周热销榜 3代表总热销榜 可以使用type去适配title和数据列表
  }
})

const TITLEMAP = {
  1: '24小时热榜',
  2: '周热榜',
}
const title = computed(() => TITLEMAP[props.type])

import { getHotGoodsAPI } from "@/apis/detail"

import { useRoute } from "vue-router"

const route = useRoute()
const hotGoods = ref([])
const getHotGoods = async () => {
  const res = await getHotGoodsAPI(route.params.id, props.type)
  hotGoods.value = res.result
  console.log(res);

}
onMounted(() => {
  getHotGoods()
})

</script>


<template>
  <div class="goods-hot">
    <h3> {{ title }} </h3>
    <!-- 商品区块 -->
    <RouterLink v-for="item in hotGoods" :key="item.id" :to="`/detail/${item.id}`" class="goods-item" >
      <img v-img-lazy="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
}
</style>
