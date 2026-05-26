import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue' //ログイン画面を追加
import TasksView from '../views/TasksView.vue' //マイページ画面を追加
import SettingView from '../views/SettingView.vue' //設定画面を追加
import { useLoginStore } from '@/stores/loginStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
      // name: 'home',
      // component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView, //ログイン画面を追加
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView, //マイページ画面を追加
    },
    {
      path: '/setting',
      name: 'setting',
      component: SettingView, //設定画面を追加
    },
  ],
})

router.beforeEach((to) => {
  const  loginstore = useLoginStore()
  // ログインしてないのにログイン画面以外に飛ぼうとしたら、ログイン画面へ
  if  (!loginstore.isLogin && to.path !== '/login'){
    return '/login'
  }
  // ログインしているのにログイン画面に飛ぼうとしたら、マイページへ
  if  (loginstore.isLogin && to.path === '/login'){
    return '/tasks'
  }
})

export default router
