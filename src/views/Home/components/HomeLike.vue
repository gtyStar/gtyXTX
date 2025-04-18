<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import { useSearchStore } from '@/store/search'
import HomePanel from './HomePanel.vue'
const { searchGoods, searchHistory } = useSearchStore()
const likeList = ref([])
// const likeListfilter=ref([])
//随机获取数组中的元素
const randomGoods = (arr) => {
  let result = [];
  // 如果商品库里的元素数量小于4个，则直接返回商品库整体
  if(arr.length<4) {  // 商品列表左对齐
    document.querySelector('.goods-list').style.justifyContent = 'flex-start'
    return arr
  } else {  // 商品列表均匀分布
    document.querySelector('.goods-list').style.justifyContent = 'space-between'
    // 抽取4个不重复的商品
    while (result.length < 4) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      if (!result.includes(arr[randomIndex])) {
        result.push(arr[randomIndex]);
      }
    }
    return [...result];
  }
}
const getLikeList = () => {
  const locallike = searchHistory[0]
  if(locallike) {
    switch (locallike) {
      case '酒':
        console.log('case');
        likeList.value = [...searchGoods.wine.red, ...searchGoods.wine.white, ...searchGoods.wine.other]
        break;
      case '红酒':
      likeList.value = [...searchGoods.wine.red]
        break;
      case '白酒':
      likeList.value =[...searchGoods.wine.white]
        break;
      case '数码':
      likeList.value = [...searchGoods.digital.line, ...searchGoods.digital.ear, ...searchGoods.digital.other]
        break;
      case  '数据线':
      likeList.value = [...searchGoods.digital.line]
        break;
        case '耳机' :
        likeList.value = [...searchGoods.digital.ear]
        break;
        case '乐器':
        likeList.value =  [...searchGoods.music.guitar]
        break;
        case '吉他':
        likeList.value =  [...searchGoods.music.guitar]
        break;
        case '头盔':
        likeList.value = [...searchGoods.helmet.helmets]
        break;
    }
  }
  likeList.value = randomGoods(likeList.value)
  console.log(likeList.value);
}

onMounted(() => {
  getLikeList()
})
</script>
<template>
  <HomePanel title="猜你喜欢" sub-title="根据您最近一次搜索生成">
      <ul class="goods-list">
        <li v-for="item in likeList" :key="item.id">
          <RouterLink :to="`/detail/${item.id}`">
            <img v-img-lazy="item.picture" alt="">
            <p class="name">{{ item.name }}</p>
            <!-- <p class="desc">{{ item.desc }}</p> -->
          </RouterLink>
        </li>
      </ul>
  </HomePanel>


</template>

<style scoped lang='scss'>
.goods-list {
  display: flex;
  // justify-content:space-between;
  // justify-content:flex-start;
  height: 426px;

  li {
    margin-right: 5px;
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
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
