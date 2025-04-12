import { createRouter, createWebHistory } from 'vue-router'
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
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和 component对应关系的位置
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '',
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
        },
        {
          path: 'checkout',
          component: () => import('@/views/Checkout/index.vue'),
        },
        {
          path: 'pay',
          component: () => import('@/views/Pay/index.vue'),
        },
        {
          path: 'paycallback',
          component: () => import('@/views/Pay/PayBack.vue'),
        },
        {
          path: 'member',
          component: () => import('@/views/Member/index.vue'),
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
      component: () => import('@/views/Login/index.vue'),
    },
    // 如果是不存在的路径，重定向到首页
    // {
    //   path: '/:pathMatch(.*)*',
    //   redirect: '/'
    // }
  ],
  // 路由跳转的时候，滚动条会自动回到顶部
  scrollBehavior() {
    return {
      top: 0,
    }
  }
})
// 路由前置守卫
router.beforeEach((to) => {
  if (to.matched.length === 0) {
    // 跳转到首页
    return {
      path: '/',
      query: {
        page: '无效地址'
      }
    }
    // ElMessage.warning('该页面不存在')
  }
})
export default router
