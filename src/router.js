import { createMemoryHistory, createRouter } from 'vue-router'
import MainCup from './components/MainCup.vue'
import SignInCup from './components/SignInCup.vue'
import SignUpCup from './components/SignUpCup.vue'

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
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export { router }
