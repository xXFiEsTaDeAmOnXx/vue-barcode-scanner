import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../pages/homePage.vue'
import listPage from '../pages/listPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/listPage',
      name: 'listPage',
      component: listPage
    }
  ]
})

export default router
