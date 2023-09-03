import { createRouter, createWebHistory } from 'vue-router'
import passwordMeter from '../components/passwordMeter.vue'
import generatorView from '../components/generatorView.vue'
import homePage from '../components/homePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/meter',
      name: 'meter',
      component: passwordMeter
    },
    {
      path: '/generator',
      name: 'generator',
      component: generatorView
    }
  ]
})

export default router
