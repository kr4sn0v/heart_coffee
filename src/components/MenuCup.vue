<template>
  <section class="menu-cup__view" ref="menu">
    <nav class="menu-cup__navigation">
      <h2>меню</h2>
      <hr />
    </nav>
    <section class="menu-cup__drinks-view">
      <h3>кофе</h3>
      <DrinksCup class="menu-cup__drinks" :get_image="getImage" :drinks="coffeeDrinks" />
    </section>
    <section class="menu-cup__drinks-view">
      <h3>не кофе</h3>
      <DrinksCup :get_image="getImage" :drinks="noCoffeeDrinks" />
    </section>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import DrinksCup from './DrinksCup.vue'
import { drinks, fetchDrinks } from '../composables/useDrinks'

const getImage = (id) => {
  let images = {
    1: '../../public/espresso.svg',
    2: '../../public/americano.svg',
    3: '../../public/filter.svg',
    4: '../../public/funnel.svg',
    5: '../../public/cappuccino.svg',
    6: '../../public/latte.svg',
    7: '../../public/flat-white.svg',
    8: '../../public/raf.svg',
    9: '../../public/cocoa.svg',
    10: '../../public/matcha-latte.svg',
    11: '../../public/ginger-tea.svg',
    12: '../../public/buckthorn-tea.svg',
    13: '../../public/black-tea.svg',
    14: '../../public/apple-tea.svg',
    15: '../../public/cedar-tea.svg',
    16: '../../public/milkshake.svg',
    default: '',
  }
  return images[id] || images['default']
}

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
  margin: 0 4.5rem 0 4.5rem;
}

.menu-cup__navigation h2 {
  font-family: var(--font-heading);
  font-size: 2rem;
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
  font-family: var(--font-heading);
  font-size: 1.65rem;
  margin: 2.5rem 0 2.5rem 4.5rem;
}
</style>
