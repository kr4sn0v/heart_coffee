<template>
  <section class="menu-cup__view" id="menu">
    <HeaderCup />
    <section class="menu-cup__header">
      <HeaderUniversalCup />
    </section>
    <main class="menu-cup__page">
      <section>
        <section class="menu-cup__drinks-view">
          <h3>кофе</h3>
          <DrinksCup :get-image="getImage" :drinks="coffeeDrinks" />
        </section>
        <section class="menu-cup__drinks-view">
          <h3>не кофе</h3>
          <DrinksCup :get-image="getImage" :drinks="noCoffeeDrinks" />
        </section>
      </section>
      <FooterLogoCup class="menu-cup__footer" />
    </main>
  </section>
</template>

<script setup>
import HeaderCup from '../main/HeaderCup.vue'
import HeaderUniversalCup from '../uni/HeaderUniversalCup.vue'
import FooterLogoCup from '../main/FooterLogoCup.vue'
import { computed, onMounted } from 'vue'
import DrinksCup from './DrinksCup.vue'
import { drinks, fetchDrinks } from '../../composables/useDrinks'
import { getImage } from '../../composables/useGetImage'

const coffeeDrinks = computed(() => {
  return drinks.value.slice(0, 8)
})

const noCoffeeDrinks = computed(() => {
  return drinks.value.slice(8)
})

onMounted(() => {
  fetchDrinks()
})
</script>

<style scoped>
.menu-cup__view {
  display: grid;
  grid-auto-flow: column;
  height: 100%;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-areas: 'section' 'main';
}

section {
  grid-area: 'section';
}

.ain {
  grid-area: 'main';
}

.menu-cup__header {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--header-border);
}

.menu-cup__page {
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
}

.menu-cup__drinks-view {
  display: flex;
  flex-direction: column;
}

.menu-cup__drinks-view h3 {
  color: var(--dark-color);
  font-size: 2.65rem;
  font-weight: 800;
  margin: 2.5rem 0 2.5rem 0;
}

.menu-cup__footer {
  color: var(--dark-color);
}
</style>
