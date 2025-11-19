import { createMemoryHistory, createRouter } from 'vue-router'
import MainCup from './components/MainCup.vue'
import SignInCup from './components/SignInCup.vue'
import SignUpCup from './components/SignUpCup.vue'
import DrinkInfoCup from './components/DrinkInfoCup.vue'
import DocumentsCup from './components/DocumentsCup.vue'
import MulledWineCup from './components/MulledWineCup.vue'
import PromoCodeCup from './components/PromoCodeCup.vue'

const routes = [
  {
    path: '/',
    component: MainCup,
  },
  {
    path: '/sign-in',
    component: SignInCup,
  },
  {
    path: '/sign-up',
    component: SignUpCup,
  },
  {
    path: '/drink',
    component: DrinkInfoCup,
  },
  {
    path: '/documents/:type',
    component: DocumentsCup,
    props: true,
  },
  {
    path: '/mulled-wine',
    component: MulledWineCup,
  },
  {
    path: '/promo',
    component: PromoCodeCup,
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export { router }
