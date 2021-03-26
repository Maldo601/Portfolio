import { createRouter, createWebHistory } from '@ionic/vue-router';

// A esta versió, les views s'importen sense redirect. 
// Directament es monta el component i es crida a l'import.

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/pages/MemoriesPage.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
