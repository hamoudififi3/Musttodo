
import { createRouter, createWebHistory } from 'vue-router/auto'
import HomePage from '../pages/Home.vue';
import AboutPage from '../pages/About.vue';
import Students from '../pages/dialog/students/index.vue';
import Teachers from '../pages/dialog/teacher/index.vue';
import Training from '../pages/dialog/training/Index.vue';
const routes = [
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/students',
    component: Students
  },
  {
    path: '/teacher',
    component: Teachers
  }, {
    path: '/training',
    component: Training
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
