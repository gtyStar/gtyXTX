<script setup>
// 新鲜好物
import HomePanel from './HomePanel.vue'
import { ref, onMounted } from 'vue'
import { getNewAPI } from '@/apis/home.js'
const newList = ref([])
const getNewList = async () => {
  const res = await getNewAPI()
  newList.value = res.result
}

onMounted(() => {
  getNewList()
})
</script>

<template>
  <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <ul class="goods-list">
        <li v-for="item in newList" :key="item.id">
          <RouterLink :to="`/detail/${item.id}`">
            <img v-img-lazy="item.picture" alt="" />
            <p class="name">{{ item.name }}</p>
            <p class="price">&yen;{{ item.price }}</p>
          </RouterLink>
        </li>
      </ul>
  </HomePanel>
</template>

<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
