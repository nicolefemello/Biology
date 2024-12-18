import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import CellsView from '@/views/CellsView.vue'
import CellTheoryView from '@/views/CellTheoryView.vue'
import OrganellesView from '@/views/OrganellesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sobre',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/celulas',
      name: 'cells',
      component: CellsView,
    },
    {
      path: '/teoria-celular',
      name: 'cellTheory',
      component: CellTheoryView,
    },
    {
      path: '/organelas',
      name: 'organelles',
      component: OrganellesView,
    }
  ],
})

export default router
