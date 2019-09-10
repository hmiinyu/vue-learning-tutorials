import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', name: '主页', component: Home },
    { path: '/1.1', name: 'Vue三大核心概念(属性、事件、插槽)', component: () => import('@/views/1.1') }
  ]
})
