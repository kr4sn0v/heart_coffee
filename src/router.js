import { createMemoryHistory, createRouter } from 'vue-router'

const MainCup = () => import('./components/main/MainCup.vue')
const MenuCup = () => import('./components/menu/MenuCup.vue')
const SignInCup = () => import('./components/sign-in/SignInCup.vue')
const SignUpCup = () => import('./components/sign-up/SignUpCup.vue')
const DrinkCup = () => import('./components/drink/DrinkCup.vue')
const DocumentsCup = () => import('./components/documents/DocumentsCup.vue')
const CartCup = () => import('./components/cart/CartCup.vue')

const routes = [
  {
    path: '/',
    name: '',
    component: MainCup,
    children: [
      {
        path: 'menu',
        name: 'menu',
        component: MenuCup,
        meta: { isHide: true },
      },
      {
        path: 'sign-in',
        name: 'sign-in',
        component: SignInCup,
        meta: { isHide: true },
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
        path: 'drink/:id',
        name: 'drink',
        component: DrinkCup,
        meta: { isHide: true },
        props: true,
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
