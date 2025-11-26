<template>
  <main class="cart-cup__page">
    <HeaderCup />

    <section class="cart-cup__header">
      <TitleCup font-size="11.5vw" />
    </section>

    <section class="cart-cup__view">
      <section class="cart-cup__drinks-view" v-if="totalItems > 0">
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

      <section v-if="totalItems === 0" class="cart-cup__empty-view">
        <p>Ваша корзина пуста и грустит :(</p>
        <p>Не дайте корзине грустить - пополните ее любым напитком из нашего меню</p>
      </section>

      <section class="cart-cup__footer-view" v-if="totalItems > 0">
        <CartFooterCup
          :items="items"
          :total-items="totalItems"
          :total-price="totalPrice"
          @clear-cart="clearCart"
        />
      </section>
    </section>
  </main>
</template>

<script setup>
import HeaderCup from '../universal/HeaderCup.vue'
import CartListCup from './CartListCup.vue'
import CartFooterCup from './CartFooterCup.vue'
import TitleCup from '../universal/TitleCup.vue'

import { getImage } from '@/composables/useGetImage'
import { activeDrinkKey } from '@/composables/useSelectDrink'
import { useCart } from '@/composables/useCart'

const { items, totalItems, totalPrice, removeItem, updateQuantity, clearCart } = useCart()
</script>

<style scoped>
.cart-cup__page {
  font-size: 1.5rem;
  display: grid;
  grid-auto-flow: column;
  height: 100dvh;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-areas: 'section' 'section';
}

section {
  grid-area: 'section';
}

section {
  grid-area: 'section';
}

.cart-cup__header {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--header-border);
}

.cart-cup__view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.cart-cup__drinks-view {
  display: flex;
  margin: 3em 0;
}

.cart-cup__empty-view {
  text-align: center;
  font-size: 2em;
  color: var(--dark-color);
}

.cart-cup__footer-view {
  margin-top: auto;
}

.cart-cup__footer-logo-view {
  color: var(--dark-color);
}
</style>
