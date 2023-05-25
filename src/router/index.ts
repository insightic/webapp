import { createRouter, createWebHistory } from 'vue-router'
import OrgView from '../views/OrgView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'organization',
      component: OrgView
    }
  ]
})

export default router
