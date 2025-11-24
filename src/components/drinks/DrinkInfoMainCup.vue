<template>
  <main class="drink-info-main-cup__info-page">
    <section class="drink-info-main-cup__info-description">
      <p>{{ props.drink.description }}</p>
    </section>

    <section class="drink-info-main-cup__info-view">
      <div
        class="drink-info-main-cup__info-container"
        :class="{
          'drink-info-main-cup__info--active': activeDrinkKey === `${drink.id}-${smallPrice}`,
        }"
        v-if="smallPrice > 0"
        @click="$emit('select-drink', drink.id, smallPrice)"
      >
        <p class="drink-info-main-cup__price">
          {{ smallPrice }}
          <span>₽</span>
        </p>
        <p class="drink-info-main-cup__volume">{{ smallVolume }} мл</p>
      </div>

      <div
        class="drink-info-main-cup__info-container"
        :class="{
          'drink-info-main-cup__info--active': activeDrinkKey === `${drink.id}-${mediumPrice}`,
        }"
        v-if="mediumPrice > 0"
        @click="$emit('select-drink', drink.id, mediumPrice)"
      >
        <p class="drink-info-main-cup__price">
          {{ mediumPrice }}
          <span>₽</span>
        </p>
        <p class="drink-info-main-cup__volume">{{ mediumVolume }} мл</p>
      </div>

      <div
        class="drink-info-main-cup__info-container"
        :class="{
          'drink-info-main-cup__info--active': activeDrinkKey === `${drink.id}-${largePrice}`,
        }"
        v-if="largePrice > 0"
        @click="$emit('select-drink', drinkInfo.id, largePrice)"
      >
        <p class="drink-info-main-cup__price">
          {{ largePrice }}
          <span>₽</span>
        </p>
        <p class="drink-info-main-cup__volume">{{ largeVolume }} мл</p>
      </div>
    </section>

    <button
      class="drink-info-main-cup__button"
      @click="$emit('add-to-cart', drink, activeDrinkKey)"
    >
      В корзину
    </button>
  </main>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  drink: {
    type: Object,
    required: true,
  },
  activeDrinkKey: {
    type: String,
    required: true,
  },
})

defineEmits(['select-drink', 'add-to-cart'])

const smallPrice = computed(() => props.drink?.prices?.small?.price ?? 0)
const smallVolume = computed(() => props.drink?.prices?.small?.volume ?? 0)

const mediumPrice = computed(() => props.drink?.prices?.medium?.price ?? 0)
const mediumVolume = computed(() => props.drink?.prices?.medium?.volume ?? 0)

const largePrice = computed(() => props.drink?.prices?.large?.price ?? 0)
const largeVolume = computed(() => props.drink?.prices?.large?.volume ?? 0)
</script>

<style scoped>
.drink-info-main-cup__info-page {
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7.5rem 0 0 0;
}

.drink-info-main-cup__info-description {
  margin: 5em 0 6.5em 0;
  text-align: center;
  background: var(--accent-color);
  width: 45%;
  padding: 2em;
  border-radius: var(--border-radius);
  border-radius: var(--border-radius);
  box-shadow:
    0 0 0 10px var(--accent-color),
    0 0 0 20px var(--light-color),
    0 0 0 30px var(--accent-color),
    0 0 0 40px var(--light-color),
    0 0 0 50px var(--accent-color);
}

.drink-info-main-cup__info-description p {
  color: var(--light-color);
  font-weight: 400;
  font-size: 1.75rem;

  box-shadow: offset-x offset-y blur-radius spread-radius color;
}

.drink-info-main-cup__info-view {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--dark-color);
}

.drink-info-main-cup__info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.5rem;
  gap: 3.5rem;
}

.drink-info-main-cup__info-container:hover {
  transform: scale(1.05);
  transition: var(--transition);
  cursor: pointer;
  color: var(--accent-color);
}

.drink-info-main-cup__info--active {
  cursor: pointer;
  color: var(--accent-color);
}

.drink-info-main-cup__price {
  display: flex;
  font-weight: 600;
  font-size: 1.65rem;
}

.drink-info-main-cup__volume {
  font-weight: 300;
  font-size: 1.45rem;
}

.drink-info-main-cup__button {
  max-width: 40rem;
  min-width: 30rem;
  height: 4.5rem;
  background: var(--accent-color);
  border: none;
  border-radius: 50px;
  color: var(--light-color);
  font-weight: 500;
  font-size: 1.65rem;
  cursor: pointer;
  white-space: nowrap;
}

.drink-info-main-cup__button:hover {
  background: var(--accent-color-hover);
  transform: scale(1.05);
  transition: var(--transition);
}
</style>
