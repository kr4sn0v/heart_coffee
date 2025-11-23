<template>
  <main class="drink-info-main-cup__info-page">
    <section class="drink-info-main-cup__info-description">
      <p>{{ drinkInfo.description }}</p>
    </section>

    <section class="drink-info-main-cup__info-view">
      <div
        class="drink-info-main-cup__info-container"
        :class="{
          'drink-info-main-cup__info--active':
            activeDrinkKey === `${drinkInfo.id}-${drinkInfo.prices.small?.price}`,
        }"
        v-if="drinkInfo.prices.small?.price"
        @click="$emit('select-drink', drinkInfo.id, drinkInfo.prices.small?.price)"
      >
        <p class="drink-info-main-cup__price">
          {{ drinkInfo.prices.small.price }}
          <span>₽</span>
        </p>
        <p class="drink-info-main-cup__volume">{{ drinkInfo.prices.small.volume }} мл</p>
      </div>

      <div
        class="drink-info-main-cup__info-container"
        :class="{
          'drink-info-main-cup__info--active':
            activeDrinkKey === `${drinkInfo.id}-${drinkInfo.prices.medium?.price}`,
        }"
        v-if="drinkInfo.prices.medium?.price"
        @click="$emit('select-drink', drinkInfo.id, drinkInfo.prices.medium?.price)"
      >
        <p class="drink-info-main-cup__price">
          {{ drinkInfo.prices.medium.price }}
          <span>₽</span>
        </p>
        <p class="drink-info-main-cup__volume">{{ drinkInfo.prices.medium.volume }} мл</p>
      </div>

      <div
        class="drink-info-main-cup__info-container"
        :class="{
          'drink-info-main-cup__info--active':
            activeDrinkKey === `${drinkInfo.id}-${drinkInfo.prices.large?.price}`,
        }"
        v-if="drinkInfo.prices.large?.price"
        @click="$emit('select-drink', drinkInfo.id, drinkInfo.prices.large?.price)"
      >
        <p class="drink-info-main-cup__price">
          {{ drinkInfo.prices.large.price }}
          <span>₽</span>
        </p>
        <p class="drink-info-main-cup__volume">{{ drinkInfo.prices.large.volume }} мл</p>
      </div>
    </section>

    <button
      class="drink-info-main-cup__button"
      @click="$emit('add-to-cart', drinkInfo, activeDrinkKey)"
    >
      В корзину
    </button>
  </main>
</template>

<script setup>
defineProps({
  drinkInfo: {
    type: Object,
    required: true,
  },
  activeDrinkKey: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.drink-info-main-cup__info-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7.5rem 0 0 0;
}

.drink-info-main-cup__info-description {
  text-align: center;
  background: var(--accent-color);
  width: 45%;
  padding: 2.15rem;
  border-radius: 20px;
  border-radius: 20px;
  box-shadow:
    0 0 0 10px var(--accent-color),
    0 0 0 20px var(--color-text-light),
    0 0 0 30px var(--accent-color),
    0 0 0 40px var(--color-text-light),
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
