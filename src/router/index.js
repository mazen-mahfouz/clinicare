import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'
import DoctorsPage from '@/components/DoctorsPage.vue'
import DoctorsdetailsPage from '@/components/DoctorsdetailsPage.vue'
import ServicesPage from '@/components/ServicesPage.vue'
import SpecialtiesPage from '@/components/SpecialtiesPage.vue'
import ContacusPage from '@/components/ContacusPage.vue'
import NotfoundPage from '@/components/NotfoundPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import RegisterPage from '@/components/RegisterPage.vue'
import Myprofile_doctor from '@/components/Myprofile_doctor.vue'
import Myprofile_user from '@/components/Myprofile_user.vue'
import ReportPage from '@/components/ReportPage.vue'
import My_all_servicesPage from '@/components/My_all_servicesPage.vue'
import MeetingPage from '@/components/MeetingPage.vue'
import ReviewsPage from '@/components/ReviewsPage.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: HomePage},
  {path: '/not-found', component: NotfoundPage},
  {path: '/about', component: AboutPage},
  {path: '/services', component: ServicesPage},
  {path: '/doctors', component: DoctorsPage},
  {path: '/doctor-details', component: DoctorsdetailsPage},
  {path: '/specialties', component: SpecialtiesPage},
  {path: '/contact-us', component: ContacusPage},
  {path: '/login', component: LoginPage},
  {path: '/register', component: RegisterPage},
  {path: '/my-profile-doctor', component: Myprofile_doctor},
  {path: '/my-profile-user', component: Myprofile_user},
  {path: '/report', component: ReportPage},
  {path: '/My-all-servicesPage', component: My_all_servicesPage, props: true},
  {path: '/meeting', component: MeetingPage, props: true},
  {path: '/review', component: ReviewsPage},
  {path: '/my-profile-user', component: Myprofile_user},
  {path: '*', component: NotfoundPage},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from, next) =>{
  window.scrollTo(0,0)
  next()
})

export default router
