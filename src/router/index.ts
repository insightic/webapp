import { createRouter, createWebHistory } from 'vue-router'
import AccountView from '@/views/AccountView.vue'
import ProjectView from '@/views/ProjectView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import AdminLoginView from '@/views/admin/AdminLoginView.vue'
import AdminAccountView from '@/views/admin/AdminAccountView.vue'
import AdminProjectView from '@/views/admin/AdminProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      props: true
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/',
      name: 'AccountView',
      component: AccountView,
    },
    {
      path: '/projects/:projectID',
      name: 'projectView',
      component: ProjectView,
    },
    {
      path: '/admin/login',
      name: 'adminLogin',
      component: AdminLoginView,
      props: true
    },
    {
      path: '/admin/',
      name: 'AdminAccountView',
      component: AdminAccountView,
    },
    {
      path: '/admin/projects/:projectID',
      name: 'adminProjectView',
      component: AdminProjectView,
    },
  ]
})

export default router
