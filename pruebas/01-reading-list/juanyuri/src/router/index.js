import { createRouter, createWebHistory } from 'vue-router'
import BookCatalogue from '@/components/BookCatalogue.vue'

const routes = [
  { path: '/', name: 'home', component: BookCatalogue },
  { path: '/about', name: 'movedex', component: () => import('@/views/MoveDex.vue') }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
