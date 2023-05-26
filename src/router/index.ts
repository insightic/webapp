import { createRouter, createWebHistory } from 'vue-router'
import OrgsView from '../views/OrgsView.vue'
import OrgView from '../views/OrgView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'organizations',
      component: OrgsView
    },
    {
      path: '/organizations/:organizationGuid',
      name: 'organization',
      component: OrgView
    }
  ]
})

export default router
