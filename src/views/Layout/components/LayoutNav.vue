<script setup>
// import { ref } from 'vue'
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
import { useSearchStore } from '@/store/search'
const searchStore = useSearchStore()
import { useRouter } from 'vue-router'
const router = useRouter()
// 退出登录点击确认，清除用户信息并跳转到登录页
const confirm = () => {
  userStore.clearUserInfo()
  searchStore.clearSearchHistory()
  router.push('/login')
}
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <!-- 登录时显示第一块，未登录时显示第二块 -->
        <template v-if="userStore.userInfo.token">
          <li><a href="javascript:;" @click="$router.push('/')"><i class="iconfont icon-user"></i>Gty</a></li>
          <li>
            <el-popconfirm @confirm="confirm" title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消">
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;" @click="$router.push('/member/order')">我的订单</a></li>
          <li><a href="javascript:;" @click="$router.push('/member')">会员中心</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;" @click="$router.push('/login')">请先登录</a></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>


<style scoped lang="scss">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
