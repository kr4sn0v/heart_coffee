<template>
  <LayoutCup>
    <header class="cart-cup__header-view">
      <TitleCup font-size="11.5vw" />
    </header>

    <main class="cart-cup__empty-view" v-if="totalItems === 0">
      <p>Ваша корзина пуста и грустит :(</p>
      <p>Не дайте корзине грустить - пополните ее любым напитком из нашего меню</p>
    </main>

    <main class="cart-cup__view" v-if="totalItems > 0">
      <section class="cart-cup__drinks-view">
        <CartListCup
          :get-image="getImage"
          :active-drink-key="activeDrinkKey"
          :items="items"
          :total-items="totalItems"
          :total-price="totalPrice"
          @update-quantity="updateQuantity"
          @remove-item="removeItem"
          @clear-cart="clearCart"
        />
      </section>
    </main>

    <footer class="cart-cup__footer-view">
      <CartFooterCup
        :items="items"
        :total-items="totalItems"
        :total-price="totalPrice"
        @clear-cart="clearCart"
      />
    </footer>
  </LayoutCup>
</template>

<script setup>
import LayoutCup from '../universal/LayoutCup.vue'
import CartListCup from './CartListCup.vue'
import CartFooterCup from './CartFooterCup.vue'
import TitleCup from '../universal/TitleCup.vue'

import { getImage } from '@/composables/useGetImage'
import { activeDrinkKey } from '@/composables/useSelectDrink'
import { useCart } from '@/composables/useCart'

const { items, totalItems, totalPrice, removeItem, updateQuantity, clearCart } = useCart()
</script>

<style scoped>
.cart-cup__header-view {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--header-border);
  margin-top: 5em;
}

.cart-cup__empty-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  color: var(--dark-color);
}

.cart-cup__empty-view p {
  text-align: center;
}

.cart-cup__view {
  width: 100%;
}

.cart-cup__drinks-view {
  display: flex;
  margin: 3em 0;
}

.cart-cup__footer-view {
  margin-top: auto;
}
</style>
