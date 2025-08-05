import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteCrearView from "@/views/EstudianteCrearView.vue"
import VistaEstudianteView from "@/views/VistaEstudianteView.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crear',
    name: 'crearEstudiante',
    component: EstudianteCrearView
  },
  {
    path: '/vista',
    name: 'vistaEstudiante',
    component: VistaEstudianteView
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
