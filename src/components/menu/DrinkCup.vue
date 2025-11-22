<template>
  <section class="drink-cup__view">
    <img class="drink-cup__image" :src="getImage" alt="Icon Drink" />
    <h3 class="drink-cup__name">
      <router-link :to="'/drink-info/' + drink.id" class="drink-cup__router-link">{{
        drink.name
      }}</router-link>
    </h3>

    <section class="drink-cup__info-view">
      <div
        class="drink-cup__info-container"
        v-if="$props.drink.prices.small?.price"
        :class="{
          'drink-cup__info-container--active':
            activeDrinkKey === `${$props.drink.id}-${$props.drink.prices.small?.price}`,
        }"
        @click="selectDrink($props.drink.id, $props.drink.prices.small?.price)"
      >
        <p class="drink-cup__price">
          {{ $props.drink.prices.small?.price }}
          <span>₽</span>
        </p>
        <p class="drink-cup__volume">{{ $props.drink.prices.small?.volume }} мл</p>
      </div>

      <div
        class="drink-cup__info-container"
        v-if="$props.drink.prices.medium?.price"
        :class="{
          'drink-cup__info-container--active':
            activeDrinkKey === `${$props.drink.id}-${$props.drink.prices.medium?.price}`,
        }"
        @click="selectDrink($props.drink.id, $props.drink.prices.medium?.price)"
      >
        <p class="drink-cup__price">
          {{ $props.drink.prices.medium.price }}
          <span>₽</span>
        </p>
        <p class="drink-cup__volume">{{ $props.drink.prices.medium?.volume }} мл</p>
      </div>

      <div
        class="drink-cup__info-container"
        v-if="$props.drink.prices.large?.price"
        :class="{
          'drink-cup__info-container--active':
            activeDrinkKey === `${$props.drink.id}-${$props.drink.prices.large?.price}`,
        }"
        @click="selectDrink($props.drink.id, $props.drink.prices.large?.price)"
      >
        <p class="drink-cup__price">
          {{ $props.drink.prices.large?.price }}
          <span>₽</span>
        </p>
        <p class="drink-cup__volume">{{ $props.drink.prices.large?.volume }} мл</p>
      </div>
    </section>

    <button class="drink-cup__button" @click="addToCart($props.drink, activeDrinkKey)">
      В корзину
    </button>
  </section>
</template>

<script setup>
import { useCart } from '../../composables/useCart'
import { activeDrinkKey, selectDrink } from '../../composables/useSelectDrink'

const { addItem: addToCart } = useCart()

defineProps({
  drink: Object,
  getImage: String,
})
</script>

<style scoped>
.drink-cup__view {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  max-width: 30rem;
  min-width: 15rem;
}

.drink-cup__drink {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
}

.drink-cup__name {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.75rem;
  text-align: start;
}

.drink-cup__name:hover {
  color: var(--accent-color);
  transform: scale(1.05);
  transition: var(--transition);
}

.drink-cup__router-link {
  color: inherit;
  text-decoration: none;
}

.drink-cup__image {
  width: 100%;
  height: auto;
}

.drink-cup__info-view {
  gap: 1rem;
  display: flex;
  width: 100%;
  justify-content: start;
}

.drink-cup__info-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 1rem 0 1rem 0;
}

.drink-cup__info-container:hover {
  transform: scale(1.05);
  transition: var(--transition);
  cursor: pointer;
  color: var(--accent-color);
}

.drink-cup__info-container--active {
  cursor: pointer;
  color: var(--accent-color);
}

.drink-cup__price {
  display: flex;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.65rem;
}

.drink-cup__volume {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 1.45rem;
}

.drink-cup__button {
  width: 100%;
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

.drink-cup__button:hover {
  background: var(--accent-color-hover);
  transform: scale(1.05);
  transition: var(--transition);
}
</style>
