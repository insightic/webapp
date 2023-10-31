import { createRouter, createWebHistory } from 'vue-router'
import AccountView from '@/views/AccountView.vue'
import ApplicationSubmissionView from '@/views/ApplicationSubmissionView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import CreateApplication from '@/views/CreateApplication.vue'
import SubmissionView from '@/views/SubmissionView.vue'

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
      component: RegisterView
    },
    {
      path: '/',
      name: 'AccountView',
      component: AccountView
    },
    {
      path: '/create-application',
      name: 'CreateApplicationView',
      component: CreateApplication
    },
    {
      path: '/applications/:applicationID',
      name: 'ApplicationView',
      component: ApplicationSubmissionView
    },
    {
      path: '/applications/:applicationID/:submissionID',
      name: 'SubmissionView',
      component: SubmissionView
    }
  ]
})

export default router
