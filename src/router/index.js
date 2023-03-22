import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../pages/homePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
       name: 'homePage',
      component: homePage
    }
  ]
})

export default router
