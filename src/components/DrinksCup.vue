<template>
  <section class="drinks-cup__view">
    <div class="drinks-cup__drink" v-for="drink in drinks" :key="drink.id">
      <img class="drinks-cup__image" :src="get_image(drink.id)" alt="Icon Drink" />
      <h3 class="drinks-cup__name">{{ drink.name }}</h3>

      <section class="drinks-cup__info-view">
        <div class="drinks-cup__info-container">
          <p class="drinks-cup__price">
            {{ drink.price_one }}
            <span>₽</span>
          </p>
          <p class="drinks-cup__volume">{{ drink.volume_one }} мл</p>
        </div>

        <div class="drinks-cup__info-container" v-if="drink.price_two && drink.volume_two">
          <p class="drinks-cup__price">
            {{ drink.price_two }}
            <span>₽</span>
          </p>
          <p class="drinks-cup__volume">{{ drink.volume_two }} мл</p>
        </div>

        <div class="drinks-cup__info-container" v-if="drink.price_three && drink.volume_three">
          <p class="drinks-cup__price">
            {{ drink.price_three }}
            <span>₽</span>
          </p>
          <p class="drinks-cup__volume">{{ drink.volume_three }} мл</p>
        </div>
      </section>

      <button class="drinks-cup__button">В корзину</button>
    </div>
  </section>
</template>

<script setup>
defineProps({
  drinks: Array,
  get_image: Function,
})
</script>

<style scoped>
.drinks-cup__view {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 3rem;
  margin-top: 30px;
}

.drinks-cup__drink {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.drinks-cup__name {
  font-family: var(--font-body);
  font-weight: 600;
  width: calc(100% - 25vh / 4);
  font-size: 2rem;
  text-align: start;
}

.drinks-cup__image {
  width: calc(100% - 25vh / 4);
}

.drinks-cup__info-view {
  gap: 2rem;
  display: flex;
  width: calc(100% - 25vh / 4);
  justify-content: start;
}

.drinks-cup__info-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 1rem 0 1rem 0;
}

.drinks-cup__info-container:hover {
  transform: scale(1.05);
  transition: var(--transition);
  cursor: pointer;
  color: var(--accent-color);
}

.drinks-cup__price {
  display: flex;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 2rem;
}

.drinks-cup__volume {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 1.65rem;
}

.drinks-cup__button {
  width: calc(100% - 25vh / 4);
  height: 55px;
  background: var(--accent-color);
  border: none;
  border-radius: 50px;
  color: var(--color-text-light);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 2rem;
  cursor: pointer;
  white-space: nowrap;
}

.drinks-cup__button:hover {
  background: var(--accent-color-hover);
  transform: scale(1.05);
  transition: var(--transition);
}
</style>
