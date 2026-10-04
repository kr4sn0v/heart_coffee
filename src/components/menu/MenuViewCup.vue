<template>
  <main class="menu-cup__view">
    <section class="menu-cup__drinks-view">
      <div class="menu-cup__stroke">
        <p class="menu-cup__stroke-item" v-for="item in 10" :key="item">кофе &nbsp;</p>
        <p class="menu-cup__stroke-item" v-for="item in 10" :key="item">кофе &nbsp;</p>
      </div>
      <MenuListCup
        :drinks="props.coffeeDrinks"
        :active-drink-key="props.activeDrinkKey"
        :get-image="props.getImage"
        @select-drink="(...args) => emit('select-drink', ...args)"
        @add-to-cart="(...args) => emit('add-to-cart', ...args)"
      />
    </section>

    <section class="menu-cup__drinks-view">
      <div class="menu-cup__stroke">
        <p class="menu-cup__stroke-item" v-for="item in 10" :key="item">не кофе &nbsp;</p>
        <p class="menu-cup__stroke-item" v-for="item in 10" :key="item">не кофе &nbsp;</p>
      </div>
      <MenuListCup
        :drinks="props.noCoffeeDrinks"
        :active-drink-key="props.activeDrinkKey"
        :get-image="props.getImage"
        @select-drink="(...args) => emit('select-drink', ...args)"
        @add-to-cart="(...args) => emit('add-to-cart', ...args)"
      />
    </section>
  </main>
</template>

<script setup>
import MenuListCup from './MenuListCup.vue'

const props = defineProps({
  getImage: {
    type: Function,
    required: true,
  },
  coffeeDrinks: {
    type: Array,
    required: true,
  },
  noCoffeeDrinks: {
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
