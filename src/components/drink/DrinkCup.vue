<template>
  <main class="drink-cup__page">
    <HeaderCup />
    <section class="drink-cup__header-view">
      <img class="drink-cup__image" :src="getImage(routeId)" alt="Icon Drink" />
      <h1>{{ drink.name }}</h1>
    </section>

    <section class="drink-cup__view">
      <DrinkDetailsCup
        :drink="drink"
        :active-drink-key="activeDrinkKey"
        @selectDrink="(...args) => selectDrink(args)"
        @add-to-cart="(...args) => addToCart(args)"
      />

      <section class="drink-cup__footer-view">
        <LogoCup />
      </section>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import HeaderCup from '../universal/HeaderCup.vue'
import DrinkDetailsCup from './DrinkDetailsCup.vue'

import { useCart } from '../../composables/useCart'
import { drinks } from '../../composables/useDrinks'
import { getImage } from '../../composables/useGetImage'
import { activeDrinkKey, selectDrink } from '../../composables/useSelectDrink'
import LogoCup from '../universal/LogoCup.vue'

const route = useRoute()
const routeId = computed(() => route.params.id)
const drink = computed(() => drinks.value[routeId.value - 1])

const { addItem: addToCart } = useCart()
</script>

<style scoped>
.drink-cup__page {
  font-size: 1.5rem;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-areas: 'section' 'section';
}

section {
  grid-area: 'section';
}

section {
  grid-area: 'section';
}

.drink-cup__header-view {
  display: flex;
  height: 45vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--header-border);
  color: var(--dark-color);
}

.drink-cup__header h1 {
  font-weight: 800;
  font-size: 2.15em;
}

.drink-cup__header h1:hover {
  color: var(--accent-color-light);
  transition: var(--transition);
  cursor: pointer;
}

.drink-cup__image {
  width: 100%;
  max-width: 30em;
  min-width: 15em;
  height: auto;
}

.drink-cup__view {
  display: flex;
  flex-direction: column;
}

.drink-cup__footer-view {
  color: var(--dark-color);
}
</style>
