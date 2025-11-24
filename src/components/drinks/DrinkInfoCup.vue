<template>
  <HeaderCup />
  <section class="drink-info-cup__view">
    <section class="drink-info-cup__header">
      <img class="drink-info-cup__image" :src="getImage(routeId)" alt="Icon Drink" />
      <h1>{{ drink.name }}</h1>
    </section>

    <main class="drink-info-cup__main">
      <DrinkInfoMainCup
        :drink="drink"
        :active-drink-key="activeDrinkKey"
        @selectDrink="(...args) => selectDrink(args)"
        @add-to-cart="(...args) => addToCart(args)"
      />

      <FooterCup class="drink-info-cup__footer" />
    </main>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import HeaderCup from '../main/HeaderCup.vue'
import FooterCup from '../main/FooterCup.vue'
import DrinkInfoMainCup from './DrinkInfoMainCup.vue'

import { useCart } from '../../composables/useCart'
import { drinks } from '../../composables/useDrinks'
import { getImage } from '../../composables/useGetImage'
import { activeDrinkKey, selectDrink } from '../../composables/useSelectDrink'

const route = useRoute()
const routeId = computed(() => route.params.id)
const drink = computed(() => drinks.value[routeId.value - 1])

const { addItem: addToCart } = useCart()
</script>

<style scoped>
.drink-info-cup__view {
  font-size: 1.5rem;
  height: 100dvh;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'section' 'main';
}

section {
  grid-area: 'section';
}

main {
  grid-area: 'main';
}

.drink-info-cup__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--header-border);
  gap: 1.5em;
  height: 25dvh;
  color: var(--dark-color);
}

.drink-info-cup__header h1 {
  font-weight: 800;
  font-size: 2.15em;
}

.drink-info-cup__header h1:hover {
  color: var(--accent-color);
  transition: var(--transition);
  cursor: pointer;
}

.drink-info-cup__image {
  width: 100%;
  max-width: 30em;
  min-width: 15em;
  height: auto;
}

.drink-info-cup__main {
  display: flex;
  flex-direction: column;
  gap: 4.5em;
}

.drink-info-cup__footer {
  margin-top: auto;
}
</style>
