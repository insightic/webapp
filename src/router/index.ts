import { createRouter, createWebHistory } from 'vue-router'
import TeamsView from '../views/TeamsView.vue'
import OrgView from '../views/OrgView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { guest: true }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { guest: true }
    },
    {
      path: '/teams',
      name: 'teams',
      component: TeamsView,
    },
    {
      path: '/teams/:organizationGuid',
      name: 'team',
      component: OrgView,
      meta: { requiresAuth: true }
    }
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
