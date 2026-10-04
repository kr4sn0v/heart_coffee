<template>
  <LayoutCup>
    <header class="menu-cup__header-view">
      <TitleCup font-size="11.5vw" />
    </header>

    <main class="menu-cup__view">
      <section class="menu-cup__drinks-view">
        <div class="menu-cup__stroke">
          <p class="menu-cup__stroke-item" v-for="item in 10" :key="item">кофе &nbsp;</p>
          <p class="menu-cup__stroke-item" v-for="item in 10" :key="item">кофе &nbsp;</p>
        </div>
        <MenuListCup
          :get-image="getImage"
          :drinks="coffeeDrinks"
          :active-drink-key="activeDrinkKey"
          @select-drink="selectDrink"
          @add-to-cart="addToCart"
        />
      </section>

      <section class="menu-cup__drinks-view">
        <div class="menu-cup__stroke">
          <p class="menu-cup__stroke-item" v-for="item in 10" :key="item">не кофе &nbsp;</p>
          <p class="menu-cup__stroke-item" v-for="item in 10" :key="item">не кофе &nbsp;</p>
        </div>
        <MenuListCup
          :get-image="getImage"
          :drinks="noCoffeeDrinks"
          :active-drink-key="activeDrinkKey"
          @select-drink="selectDrink"
          @add-to-cart="addToCart"
        />
      </section>
    </main>

    <footer>
      <FooterBlackCup />
    </footer>
  </LayoutCup>
</template>

<script setup>
import LayoutCup from '../universal/LayoutCup.vue'
import MenuListCup from './MenuListCup.vue'
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

<style scoped>
.menu-cup__header-view {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--header-border);
  margin-top: 5em;
}

.menu-cup__view {
  display: flex;
  flex-direction: column;
  gap: 4.5em;
}

.menu-cup__drinks-view {
  display: flex;
  flex-direction: column;
}

.menu-cup__drinks-view h3 {
  color: var(--dark-color);
  font-size: 2.15em;
  font-weight: 800;
  margin: 1em 0 1em 0;
}

.menu-cup__stroke {
  display: flex;
  width: 100vw;
  max-width: 3000px;
  margin: 2em auto;
  overflow: hidden;
}

.menu-cup__stroke-item {
  flex-shrink: 0;
  font-size: clamp(5.125rem, 0.8023rem + 1.2064vw, 2.25rem);
  line-height: 1.5;
  font-weight: 900;
  text-transform: uppercase;
  animation: running-animation 5s linear infinite;
  white-space: nowrap;
  color: var(--dark-color);
}

@keyframes running-animation {
  0% {
    transform: translateZ(0);
  }

  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
