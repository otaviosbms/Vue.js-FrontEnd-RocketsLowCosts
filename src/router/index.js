import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },

    {
      path: '/login/create',
      name: 'login.create',
      component: () => import('../views/LoginCreateView.vue'),
    },

    {
      path: '/foguetes',
      name: 'foguetes',
      component: () => import('../views/FoguetesView.vue'),
    },

    {
      path: '/foguetes/lancamento/:id',
      name: 'lancamento',
      component: () => import('../views/LancamentoView.vue'),
    },

    {
      path: '/lancamentos',
      name: 'meus-lancamentos',
      component: () => import('../views/MeusLancamentosView.vue'),
    },

  ]
})

export default router
