import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import FavList from '@/views/FavList.vue'

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView
  },
  {
    path: '/readlist',
    name: 'ReadList',
    component: FavList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router