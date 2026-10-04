<template>
  <LayoutCup>
    <DrinkHeaderCup :routeId="routeId" :drink="drink" />
    <DrinkDetailsCup
      :drink="drink"
      :active-drink-key="activeDrinkKey"
      @selectDrink="(...args) => selectDrink(args)"
      @add-to-cart="(...args) => addToCart(args)"
    />
    <FooterBlackCup />
  </LayoutCup>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import LayoutCup from '../universal/LayoutCup.vue'
import DrinkHeaderCup from './DrinkHeaderCup.vue'
import DrinkDetailsCup from './DrinkDetailsCup.vue'
import FooterBlackCup from '../universal/FooterBlackCup.vue'

import { useCart } from '../../composables/useCart'
import { drinks } from '../../composables/useDrinks'
import { activeDrinkKey, selectDrink } from '../../composables/useSelectDrink'

const route = useRoute()
const routeId = computed(() => route.params.id)
const drink = computed(() => drinks.value[routeId.value - 1])

const { addItem: addToCart } = useCart()
</script>
