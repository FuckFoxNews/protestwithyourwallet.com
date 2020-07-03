import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Procedure from '../views/Procedure.vue'
import Toolkit from '../views/Toolkit.vue'
import Resources from '../views/Resources.vue'
import About from '../views/About.vue'
import StayInformed from '../views/StayInformed.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/procedure',
    name: 'Procedure',
    component: Procedure
  },
  {
    path: '/toolkit',
    name: 'Toolkit',
    component: Toolkit
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources
  },{
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/stay-informed',
    name: 'Stay Informed',
    component: StayInformed
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
