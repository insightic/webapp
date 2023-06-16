import { createRouter, createWebHistory } from 'vue-router'
import OrganizationView from '@/views/OrganizationView.vue'
import ProjectView from '@/views/ProjectView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import CreateTeamView from '@/views/CreateTeamView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/',
      name: 'organizationView',
      component: OrganizationView,
    },
    {
      path: '/projects/:projectID',
      name: 'projectView',
      component: ProjectView,
    },
  ]
})

// router.beforeEach((to, from, next) => {
//   const userStore = useAuthStore();
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (localStorage.getItem('user') != null) {
//       next();
//       return;
//     }
//     next("/login");
//   } else {
//     next();
//   }
// });

// router.beforeEach((to, from, next) => {
//   const userStore = useAuthStore();
//   if (to.matched.some((record) => record.meta.guest)) {
//     if (localStorage.getItem('user') != null) {
//       next("/");
//       return;
//     }
//     next();
//   } else {
//     next();
//   }
// });

export default router
