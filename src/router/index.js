import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '@/views/Home/index.vue'
// import Login from '@/views/Login/index.vue'
// import Layout from '@/views/Layout/index.vue'
// import Category from '@/views/Category/index.vue'
// import SubCategory from '@/views/SubCategory/index.vue'
// import Detail from '@/views/Detail/index.vue'
// import CartList from '@/views/CartList/index.vue'
// import Checkout from '@/views/Checkout/index.vue'
// import Pay from '@/views/Pay/index.vue'
// import PayBack from '@/views/Pay/PayBack.vue'
// import Member from '@/views/Member/index.vue'
// import MemberInfo from '@/views/Member/components/UserInfo.vue'
// import MemberOrder from '@/views/Member/components/UserOrder.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // path和 component对应关系的位置
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/Home/index.vue'),
        },
        {
          path: 'category/:id',
          component: () => import('@/views/Category/index.vue'),
        },
        {
          path: 'category/sub/:id',
          component: () => import('@/views/SubCategory/index.vue'),
        },
        {
          path: 'detail/:id',
          component: () => import('@/views/Detail/index.vue'),
        },
        {
          path: 'cartlist',
          component: () => import('@/views/CartList/index.vue'),
          meta: { tip: true },
        },
        {
          path: 'checkout',
          component: () => import('@/views/Checkout/index.vue'),
          meta: { login: true },
        },
        {
          path: 'pay',
          component: () => import('@/views/Pay/index.vue'),
          meta: { login: true },
        },
        {
          path: 'paycallback',
          component: () => import('@/views/Pay/PayBack.vue'),
          meta: { login: true },
        },
        {
          path: 'member',
          component: () => import('@/views/Member/index.vue'),
          meta: { tip: true },
          children: [
            {
              path: '',
              component: () => import('@/views/Member/components/UserInfo.vue'),
            },
            {
              path: 'order',
              component: () => import('@/views/Member/components/UserOrder.vue'),
            }
          ]
        }
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/index.vue'),
    },
    // 如果是不存在的路径，重定向到首页
    {
      path: '/:pathMatch(.*)*',
      redirect: '/?statu=404',
      meta: { is404: true },
    }
  ],
  // 路由跳转的时候，滚动条会自动回到顶部
  scrollBehavior() {
    return {
      top: 0,
    }
  }
})
// 路由前置守卫
// to：到哪去的完整路由信息对象（路径，参数）
// from：从哪来的完整路由信息对象
// return true  放行
import { useUserStore } from '@/store/user'
import { ElMessage } from 'element-plus'
router.beforeEach((to) => {
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if (to.meta.login && !token) {
    return {
      name: 'login',
    }
  }
  // if (to.meta.is404) {
  //   // 跳转到首页
  //   ElMessage.warning({
  //     message: '页面不存在，已自动返回至首页',
  //   })
  //   window.location.href = `https://gtystar.github.io/gtyXTX/?statu=${encodeURIComponent(404)}`
  //   // https://gtystar.github.io/gtyXTX/
  //   // http://localhost:5173/
  // }
  if (to.meta.tip && !token) {
    ElMessage.warning({
      message: '您还未登录',
    })
  }
  return true
})
export default router
