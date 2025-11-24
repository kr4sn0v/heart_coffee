<template>
  <section class="drinks-cup__view">
    <div class="drinks-cup__drinks" v-for="drink in props.drinks" :key="drink.id">
      <DrinkCup
        :drink="drink"
        :get-image="localeImage(drink)"
        :active-drink-key="activeDrinkKey"
        @select-drink="(...args) => emit('select-drink', args)"
        @add-to-cart="(...args) => emit('add-to-cart', args)"
      />
    </div>
  </section>
</template>

<script setup>
import DrinkCup from './DrinkCup.vue'

const props = defineProps({
  drinks: {
    type: Array,
    required: true,
  },
  getImage: {
    type: Function,
    required: true,
  },
  activeDrinkKey: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['select-drink', 'add-to-cart'])

const localeImage = (drink) => {
  try {
    return props.getImage(drink.id)
  } catch (err) {
    console.error('Ошибка при получении картинки:', drink.id, err)
  }
}
</script>

<style scoped>
.drinks-cup__view {
  font-size: 1.5rem;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 4.5em 9.5em;
  align-items: center;
  width: 100%;
}

.drinks-cup__drinks {
  display: flex;
  flex-direction: column;
}
</style>
