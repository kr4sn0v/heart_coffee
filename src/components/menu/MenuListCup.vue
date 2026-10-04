<template>
  <section class="menu-list-cup__view">
    <div class="menu-list-cup__drinks" v-for="drink in props.drinks" :key="drink.id">
      <MenuDrinkCup
        :drink="drink"
        :active-drink-key="props.activeDrinkKey"
        :get-image="props.getImage"
        @select-drink="(...args) => emit('select-drink', args)"
        @add-to-cart="(...args) => emit('add-to-cart', args)"
      />
    </div>
  </section>
</template>

<script setup>
import MenuDrinkCup from './MenuDrinkCup.vue'

const props = defineProps({
  getImage: {
    type: Function,
    required: true,
  },
  drinks: {
    type: Array,
    required: true,
  },
  activeDrinkKey: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['select-drink', 'add-to-cart'])
</script>

<style scoped>
.menu-list-cup__view {
  font-size: 1.5rem;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 4.5em 9.5em;
  justify-items: center;
  width: 100%;
}

.menu-list-cup__drinks {
  display: flex;
  flex-direction: column;
}
</style>
