<template>
  <header class="drink-cup__header-view">
    <img class="drink-cup__image" :src="getImage(props.routeId)" alt="Icon Drink" />
    <div class="drink-cup__stroke">
      <p class="drink-cup__stroke-item" v-for="item in 10" :key="item">
        {{ props.drink.name }} &nbsp;
      </p>
      <p class="drink-cup__stroke-item" v-for="item in 10" :key="item">
        {{ props.drink.name }} &nbsp;
      </p>
    </div>
  </header>
</template>

<script setup>
import { getImage } from '../../composables/useGetImage'

const props = defineProps({
  routeId: {
    type: String,
    required: true,
  },
  drink: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.drink-cup__header-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--header-border);
  color: var(--dark-color);
  margin-top: 5em;
}

.drink-cup__image {
  width: 100%;
  max-width: 30em;
  min-width: 15em;
}

.drink-cup__stroke {
  display: flex;
  width: 100vw;
  max-width: 3000px;
  margin: 2em auto;
  overflow: hidden;
}

.drink-cup__stroke-item {
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
