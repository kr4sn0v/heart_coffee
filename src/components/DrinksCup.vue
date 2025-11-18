<template>
  <section class="drinks-cup__view">
    <div class="drinks-cup__drinks" v-for="drink in drinks" :key="drink.id">
      <DrinkCup :drink="drink" :get-image="getImage(drink.id)" />
    </div>
  </section>
</template>

<script setup>
import DrinkCup from './DrinkCup.vue'

defineProps({
  drinks: Array,
  getImage: Function,
})
</script>

<style scoped>
.drinks-cup__view {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 5rem 10rem;
  align-items: center;
  width: 100%;
}
</style>
