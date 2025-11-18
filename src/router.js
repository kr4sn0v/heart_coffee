import { createMemoryHistory, createRouter } from 'vue-router'
import MainCup from './components/MainCup.vue'
import SignInCup from './components/SignInCup.vue'
import SignUpCup from './components/SignUpCup.vue'
import DrinkInfoCup from './components/DrinkInfoCup.vue'
import TermsCup from './components/TermsCup.vue'
import ProcessingCup from './components/ProcessingCup.vue'

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
    path: '/terms',
    component: TermsCup,
  },
  {
    path: '/processing',
    component: ProcessingCup,
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export { router }
