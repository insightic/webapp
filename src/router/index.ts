import { createRouter, createWebHistory } from 'vue-router'
import TeamsView from '@/views/TeamsView.vue'
import TeamView from '@/views/TeamView.vue'
import ProjectView from '@/views/ProjectView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import CreateTeamView from '@/views/CreateTeamView.vue';

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
      path: '/teams/create-team',
      name: 'createTeam',
      component: CreateTeamView,
    },
    {
      path: '/teams/:teamID',
      name: 'team',
      component: TeamView,
      meta: { requiresAuth: true }
    },
    {
      path: '/teams/:teamID/:teamSubView',
      name: 'teamSubView',
      component: TeamView,
      meta: { requiresAuth: true }
    },
    {
      path: '/projects/:projectID/',
      name: 'projectView',
      component: ProjectView,
      meta: { requiresAuth: true }
    },
    {
      path: '/projects/:projectID/:projectSubView',
      name: 'projectSubView',
      component: ProjectView,
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
