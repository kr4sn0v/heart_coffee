<template>
  <main class="menu-cup__page" id="menu">
    <HeaderCup />
    <section class="menu-cup__header-view">
      <TitleCup font-size="11.5vw" />
    </section>

    <section class="menu-cup__view">
      <section>
        <section class="menu-cup__drinks-view">
          <div class="menu-cup__stroke">
            <p class="menu-cup__stroke-item">
              кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе
              кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе
              кофе &nbsp;
            </p>
            <p class="menu-cup__stroke-item">
              кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе
              кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе кофе
              кофе &nbsp;
            </p>
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
            <p class="menu-cup__stroke-item">
              не кофе не кофе не кофе не кофе не кофе не кофе не кофе не кофе не кофе не кофе не
              кофе не кофе не кофе не кофе не кофе не кофе не кофе не кофе не кофе не кофе не кофе
              не кофе не кофе &nbsp;
            </p>
            <p class="menu-cup__stroke-item">
              не кофе не кофе не кофе не кофе не кофе не кофе не кофе не кофе не кофе не кофе не
              кофе не кофе не кофе не кофе не кофе не кофе не кофе не кофе не кофе не кофе не кофе
              не кофе не кофе &nbsp;
            </p>
          </div>
          <MenuListCup
            :get-image="getImage"
            :drinks="noCoffeeDrinks"
            :active-drink-key="activeDrinkKey"
            @select-drink="selectDrink"
            @add-to-cart="addToCart"
          />
        </section>
      </section>

      <section class="menu-cup__footer-view">
        <LogoCup />
      </section>
    </section>
  </main>
</template>

<script setup>
import HeaderCup from '../universal/HeaderCup.vue'
import MenuListCup from './MenuListCup.vue'
import LogoCup from '../universal/LogoCup.vue'
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
.menu-cup__page {
  font-size: 1.5rem;
  display: grid;
  grid-auto-flow: column;
  height: 100dvh;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-areas: 'section' 'main';
}

section {
  grid-area: 'section';
}

main {
  grid-area: 'main';
}

.menu-cup__header-view {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--header-border);
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
  animation: running-animation 55s linear infinite;
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

.menu-cup__footer-view {
  color: var(--dark-color);
}
</style>
