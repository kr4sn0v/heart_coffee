<template>
  <section class="drink-cup__view" v-if="drink">
    <img class="drink-cup__image" :src="props.getImage" alt="Icon Drink" />
    <h3 class="drink-cup__name">
      <router-link :to="'/drink-info/' + props.drink.id" class="drink-cup__router-link">{{
        props.drink.name
      }}</router-link>
    </h3>

    <section class="drink-cup__info-view">
      <div
        class="drink-cup__info-container"
        v-if="smallPrice > 0"
        :class="{
          'drink-cup__info-container--active':
            props.activeDrinkKey === `${props.drink?.id}-${smallPrice}`,
        }"
        @click="emit('select-drink', props.drink.id, smallPrice)"
      >
        <p class="drink-cup__price">
          {{ smallPrice }}
          <span>₽</span>
        </p>
        <p class="drink-cup__volume">{{ smallVolume }} мл</p>
      </div>

      <div
        class="drink-cup__info-container"
        v-if="mediumPrice > 0"
        :class="{
          'drink-cup__info-container--active':
            props.activeDrinkKey === `${props.drink?.id}-${mediumPrice}`,
        }"
        @click="emit('select-drink', props.drink.id, mediumPrice)"
      >
        <p class="drink-cup__price">
          {{ mediumPrice }}
          <span>₽</span>
        </p>
        <p class="drink-cup__volume">{{ mediumVolume }} мл</p>
      </div>

      <div
        class="drink-cup__info-container"
        v-if="largePrice > 0"
        :class="{
          'drink-cup__info-container--active':
            props.activeDrinkKey === `${props.drink?.id}-${largePrice}`,
        }"
        @click="emit('select-drink', props.drink.id, largePrice)"
      >
        <p class="drink-cup__price">
          {{ largePrice }}
          <span>₽</span>
        </p>
        <p class="drink-cup__volume">{{ largeVolume }} мл</p>
      </div>
    </section>

    <button
      class="drink-cup__button"
      @click="() => emit('add-to-cart', props.drink, props.activeDrinkKey)"
    >
      В корзину
    </button>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  drink: {
    type: Object,
    required: true,
  },
  getImage: {
    type: String,
    required: true,
  },
  activeDrinkKey: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['select-drink', 'add-to-cart'])

const smallPrice = computed(() => props.drink?.prices?.small?.price ?? 0)
const smallVolume = computed(() => props.drink?.prices?.small?.volume ?? 0)

const mediumPrice = computed(() => props.drink?.prices?.medium?.price ?? 0)
const mediumVolume = computed(() => props.drink?.prices?.medium?.volume ?? 0)

const largePrice = computed(() => props.drink?.prices?.large?.price ?? 0)
const largeVolume = computed(() => props.drink?.prices?.large?.volume ?? 0)
</script>

<style scoped>
.drink-cup__view {
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  max-width: 20em;
  min-width: 15em;
  color: var(--dark-color);
}

.drink-cup__image {
  width: 100%;
  height: auto;
}

.drink-cup__name {
  font-weight: 600;
  font-size: 1.35em;
  text-align: start;
}

.drink-cup__name:hover {
  color: var(--accent-color-light);
  transform: scale(1.05);
  transition: var(--transition);
}

.drink-cup__router-link {
  color: inherit;
  text-decoration: none;
}

.drink-cup__info-view {
  gap: 1em;
  display: flex;
  width: 100%;
  justify-content: start;
}

.drink-cup__info-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 1em 0 1em 0;
}

.drink-cup__info-container:hover {
  transform: scale(1.05);
  transition: var(--transition);
  cursor: pointer;
  color: var(--accent-color-light);
}

.drink-cup__info-container--active {
  cursor: pointer;
  color: var(--accent-color-light);
}

.drink-cup__price {
  display: flex;
  font-weight: 600;
  font-size: 1.25em;
}

.drink-cup__volume {
  font-weight: 300;
  font-size: 1em;
}

.drink-cup__button {
  width: 100%;
  height: 3.25em;
  background: var(--accent-color-light);
  color: var(--light-color);
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.15em;
  cursor: pointer;
  white-space: nowrap;
}

.drink-cup__button:hover {
  background: var(--accent-color-dark);
  transform: scale(1.05);
  transition: var(--transition);
}
</style>
