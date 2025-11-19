import { createMemoryHistory, createRouter } from 'vue-router'
import MainCup from './components/MainCup.vue'
import SignInCup from './components/SignInCup.vue'
import SignUpCup from './components/SignUpCup.vue'
import DrinkInfoCup from './components/DrinkInfoCup.vue'
import DocumentsCup from './components/DocumentsCup.vue'
import MulledWineCup from './components/MulledWineCup.vue'

const routes = [
  {
    path: '/',
    component: MainCup,
    children: [
      {
        path: 'sign-in',
        component: SignInCup,
        meta: { isHide: true },
        children: [
          {
            path: 'mulled-wine',
            component: MulledWineCup,
            meta: { isHideChild: true },
          },
        ],
      },
      {
        path: 'sign-up',
        component: SignUpCup,
        meta: { isHide: true },
        children: [
          {
            path: 'documents/:type',
            component: DocumentsCup,
            meta: { isHideChild: true },
            props: true,
          },
        ],
      },
      {
        path: 'drink',
        component: DrinkInfoCup,
        meta: { isHide: true },
      },
    ],
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export { router }
