<template>
  <LayoutCup>
    <TitleCup font-size="11.5vw" />
    <CartViewCup
      :items="items"
      :get-image="getImage"
      :total-items="totalItems"
      :active-drink-key="activeDrinkKey"
      @remove-item="(...args) => removeItem(...args)"
      @update-quantity="(...args) => updateQuantity(...args)"
    />
    <CartFooterCup
      :items="items"
      :total-items="totalItems"
      :total-price="totalPrice"
      @clear-cart="(...args) => clearCart(...args)"
    />
  </LayoutCup>
</template>

<script setup>
import LayoutCup from '../universal/LayoutCup.vue'
import CartViewCup from './CartViewCup.vue'
import CartFooterCup from './CartFooterCup.vue'
import TitleCup from '../universal/TitleCup.vue'

import { getImage } from '@/composables/useGetImage'
import { activeDrinkKey } from '@/composables/useSelectDrink'
import { useCart } from '@/composables/useCart'

const { items, totalItems, totalPrice, removeItem, updateQuantity, clearCart } = useCart()
</script>
