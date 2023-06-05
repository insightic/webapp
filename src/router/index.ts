import { createRouter, createWebHistory } from 'vue-router'
import OrgsView from '../views/OrgsView.vue'
import OrgView from '../views/OrgView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
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
