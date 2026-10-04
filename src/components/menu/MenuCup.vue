<template>
  <LayoutCup>
    <TitleCup font-size="11.5vw" />

    <MenuViewCup
      :drinks="drinks"
      :coffee-drinks="coffeeDrinks"
      :no-coffee-drinks="noCoffeeDrinks"
      :active-drink-key="activeDrinkKey"
      :get-image="getImage"
      @select-drink="selectDrink"
      @add-to-cart="addToCart"
    />

    <FooterBlackCup />
  </LayoutCup>
</template>

<script setup>
import LayoutCup from '../universal/LayoutCup.vue'
import MenuViewCup from './MenuViewCup.vue'
import FooterBlackCup from '../universal/FooterBlackCup.vue'
import TitleCup from '../universal/TitleCup.vue'

import { computed, onMounted } from 'vue'
import { useCart } from '../../composables/useCart.js'
import { getImage } from '../../composables/useGetImage.js'
import { drinks, fetchDrinks } from '../../composables/useDrinks.js'
import { activeDrinkKey, selectDrink } from '../../composables/useSelectDrink.js'

const { addItem: addToCart } = useCart()

const coffeeDrinks = computed(() => drinks.value.slice(0, 8))
const noCoffeeDrinks = computed(() => drinks.value.slice(8))

onMounted(() => {
  fetchDrinks()
})
</script>
