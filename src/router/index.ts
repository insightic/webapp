import { createRouter, createWebHistory } from 'vue-router'
import AccountView from '@/views/AccountView.vue'
import ApplicationSubmissionView from '@/views/applicationSubViews/ApplicationSubmissionView.vue'
import ApplicationDetailsView from '@/views/applicationSubViews/ApplicationDetailsView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import CreateApplicationView from '@/views/CreateApplication.vue'
import CreateNewApplicationView from '@/views/CreateNewApplication.vue'
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
      component: CreateApplicationView
    },
    {
      path: '/create-new-application',
      name: 'CreateNewApplicationView',
      component: CreateNewApplicationView
    },
    {
      path: '/projects/:projectID',
      name: 'projectView',
      component: ApplicationSubmissionView
    },
    {
      path: '/projects/:projectID/create-submission',
      name: 'CreateSubmissionView',
      component: ApplicationDetailsView
    },
    {
      path: '/projects/:projectID/:submissionID/draft',
      name: 'ContinueSubmissionView',
      component: ApplicationDetailsView
    },
    {
      path: '/projects/:projectID/:submissionID',
      name: 'SubmissionView',
      component: SubmissionView
    }
  ]
})

export default router
