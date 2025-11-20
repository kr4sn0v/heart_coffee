import { createMemoryHistory, createRouter } from 'vue-router'

const MainCup = () => import('./components/MainCup.vue')
const SignInCup = () => import('./components/SignInCup.vue')
const SignUpCup = () => import('./components/SignUpCup.vue')
const DrinkInfoCup = () => import('./components/DrinkInfoCup.vue')
const DocumentsCup = () => import('./components/DocumentsCup.vue')
const MulledWineCup = () => import('./components/MulledWineCup.vue')
const CartCup = () => import('./components/CartCup.vue')

const routes = [
  {
    path: '/',
    name: '',
    component: MainCup,
    children: [
      {
        path: 'sign-in',
        name: 'sign-in',
        component: SignInCup,
        meta: { isHide: true },
        children: [
          {
            path: 'mulled-wine',
            name: 'mulled-wine',
            component: MulledWineCup,
            meta: { isHideChild: true },
          },
        ],
      },
      {
        path: 'sign-up',
        name: 'sign-up',
        component: SignUpCup,
        meta: { isHide: true },
        children: [
          {
            path: 'documents/:type',
            name: 'documents',
            component: DocumentsCup,
            meta: { isHideChild: true },
            props: true,
          },
        ],
      },
      {
        path: 'drink-info/:id',
        name: 'drink-info',
        component: DrinkInfoCup,
        meta: { isHide: true },
      },
      {
        path: 'cart',
        name: 'cart',
        component: CartCup,
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
