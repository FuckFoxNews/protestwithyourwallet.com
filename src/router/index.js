import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CauseList from '../views/CauseList.vue'
import CompanyList from '../views/CompanyList.vue'
import About from '../views/About.vue'
import ContactUs from '../views/ContactUs.vue'
import StayInformed from '../views/StayInformed.vue'
import Company from '../views/Company.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cause-list',
    name: 'CauseList',
    component: CauseList
  },
  {
    path: '/company-list',
    name: 'CompanyList',
    component: CompanyList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactUs
  },
  {
    path: '/stay-informed',
    name: 'Stay Informed',
    component: StayInformed
  },
  {
    path: '/company/:id',
    name: 'Company',
    component: Company
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
