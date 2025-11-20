<template>
  <section class="drink-info-cup__view">
    <HeaderCup />

    <section class="drink-info-cup__header">
      <img class="drink-info-cup__image" :src="getImage(drinkId)" alt="Icon Drink" />
      <h1>{{ drinkInfo.name }}</h1>
    </section>

    <main class="drink-info-cup__info-page">
      <section class="drink-info-cup__info-description">
        <p>{{ drinkInfo.description }}</p>
      </section>

      <section class="drink-info-cup__info-view">
        <div
          class="drink-info-cup__info-container"
          :class="{
            'drink-info-cup__info--active':
              activeDrinkKey === `${drinkInfo.id}-${drinkInfo.prices.small?.price}`,
          }"
          v-if="drinkInfo.prices.small?.price"
          @click="selectDrink(drinkInfo.id, drinkInfo.prices.small?.price)"
        >
          <p class="drink-info-cup__price">
            {{ drinkInfo.prices.small.price }}
            <span>₽</span>
          </p>
          <p class="drink-info-cup__volume">{{ drinkInfo.prices.small.volume }} мл</p>
        </div>

        <div
          class="drink-info-cup__info-container"
          :class="{
            'drink-info-cup__info--active':
              activeDrinkKey === `${drinkInfo.id}-${drinkInfo.prices.medium?.price}`,
          }"
          v-if="drinkInfo.prices.medium?.price"
          @click="selectDrink(drinkInfo.id, drinkInfo.medium.small?.price)"
        >
          <p class="drink-info-cup__price">
            {{ drinkInfo.prices.medium.price }}
            <span>₽</span>
          </p>
          <p class="drink-info-cup__volume">{{ drinkInfo.prices.medium.volume }} мл</p>
        </div>

        <div
          class="drink-info-cup__info-container"
          :class="{
            'drink-info-cup__info--active':
              activeDrinkKey === `${drinkInfo.id}-${drinkInfo.prices.large?.price}`,
          }"
          v-if="drinkInfo.prices.large?.price"
          @click="selectDrink(drinkInfo.id, drinkInfo.large.small?.price)"
        >
          <p class="drink-info-cup__price">
            {{ drinkInfo.prices.large.price }}
            <span>₽</span>
          </p>
          <p class="drink-info-cup__volume">{{ drinkInfo.prices.large.volume }} мл</p>
        </div>
      </section>

      <button class="drink-info-cup__button" @click="addToCart(drinkInfo, activeDrinkKey)">
        В корзину
      </button>
    </main>
  </section>

  <footer class="drink-info-cup__footer">
    <FooterCup />
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import HeaderCup from './HeaderCup.vue'
import FooterCup from './FooterCup.vue'

import { useCart } from '@/composables/useCart'
import { drinks } from '@/composables/useDrinks'
import { getImage } from '@/composables/useGetImage'
import { activeDrinkKey, selectDrink } from '@/composables/useSelectDrink'

const route = useRoute()
const drinkId = computed(() => route.params.id)
const drinkInfo = computed(() => drinks.value[drinkId.value - 1])

const { addItem: addToCart } = useCart()
</script>

<style scoped>
.drink-info-cup__view {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-areas: 'section' 'main' 'footer';
}

.drink-info-cup__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--header-border);
  gap: 1.5rem;
}

.drink-info-cup__header h1 {
  font-family: var(--font-body);
  font-weight: 800;
  font-size: 2.85rem;
}

.drink-info-cup__header h1:hover {
  color: var(--accent-color);
  transition: var(--transition);
  cursor: pointer;
}

.drink-info-cup__image {
  width: 100%;
  max-width: 300px;
  min-width: 150px;
  height: auto;
}

.drink-info-cup__info-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.drink-info-cup__info-description {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-color);
  width: 45%;
  padding: 2.15rem;
  border-radius: 20px;
  margin: 10.5rem 0 7.5rem 0;
  border-radius: 20px;
  box-shadow:
    0 0 0 10px var(--accent-color),
    0 0 0 20px var(--color-text-light),
    0 0 0 30px var(--accent-color),
    0 0 0 40px var(--color-text-light),
    0 0 0 50px var(--accent-color);
}

.drink-info-cup__info-description p {
  font-family: var(--font-body);
  color: var(--color-text-light);
  font-weight: 400;
  font-size: 1.75rem;

  box-shadow: offset-x offset-y blur-radius spread-radius color;
}

.drink-info-cup__info-view {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.drink-info-cup__info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.5rem;
  gap: 3.5rem;
}

.drink-info-cup__info-container:hover {
  transform: scale(1.05);
  transition: var(--transition);
  cursor: pointer;
  color: var(--accent-color);
}

.drink-info-cup__info--active {
  cursor: pointer;
  color: var(--accent-color);
}

.drink-info-cup__price {
  display: flex;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.65rem;
}

.drink-info-cup__volume {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 1.45rem;
}

.drink-info-cup__button {
  width: 100%;
  max-width: 200px;
  height: 4.5rem;
  background: var(--accent-color);
  border: none;
  border-radius: 50px;
  color: var(--color-text-light);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 1.65rem;
  cursor: pointer;
  white-space: nowrap;
}

.drink-info-cup__button:hover {
  background: var(--accent-color-hover);
  transform: scale(1.05);
  transition: var(--transition);
}

.drink-info-cup__footer {
  margin-top: 4.5rem;
}
</style>
