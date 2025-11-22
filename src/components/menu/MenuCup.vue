<template>
  <section class="menu-cup__view" id="menu">
    <nav class="menu-cup__navigation">
      <h2>меню</h2>
      <hr />
    </nav>
    <section class="menu-cup__drinks-view">
      <h3>кофе</h3>
      <DrinksCup :get-image="getImage" :drinks="coffeeDrinks" />
    </section>
    <section class="menu-cup__drinks-view">
      <h3>не кофе</h3>
      <DrinksCup :get-image="getImage" :drinks="noCoffeeDrinks" />
    </section>
  </section>
</template>

<script setup>
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
  grid-auto-flow: row;
  margin: 3rem;
}

.menu-cup__navigation {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.menu-cup__navigation h2 {
  font-family: var(--font-body);
  font-size: 3.25rem;
}

hr {
  width: 100%;
  border: 2px solid var(--color-border);
  border-radius: 4px;
}

.menu-cup__drinks-view {
  display: flex;
  flex-direction: column;
}

.menu-cup__drinks-view h3 {
  font-family: var(--font-body);
  font-size: 2.65rem;
  font-weight: 800;
  margin: 2.5rem 0 2.5rem 0;
}
</style>
