<template>
  <section class="drink-cup__view">
    <img class="drink-cup__image" :src="getImage" alt="Icon Drink" />
    <h3 class="drink-cup__name">
      <router-link to="drink" class="drink-cup__router-link">{{ drink.name }}</router-link>
    </h3>

    <section class="drink-cup__info-view">
      <div class="drink-cup__info-container">
        <p class="drink-cup__price">
          {{ drink.price_one }}
          <span>₽</span>
        </p>
        <p class="drink-cup__volume">{{ drink.volume_one }} мл</p>
      </div>

      <div class="drink-cup__info-container" v-if="drink.price_two && drink.volume_two">
        <p class="drink-cup__price">
          {{ drink.price_two }}
          <span>₽</span>
        </p>
        <p class="drink-cup__volume">{{ drink.volume_two }} мл</p>
      </div>

      <div class="drink-cup__info-container" v-if="drink.price_three && drink.volume_three">
        <p class="drink-cup__price">
          {{ drink.price_three }}
          <span>₽</span>
        </p>
        <p class="drink-cup__volume">{{ drink.volume_three }} мл</p>
      </div>
    </section>

    <button class="drink-cup__button">В корзину</button>
  </section>
</template>

<script setup>
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
}

.drink-cup__drink {
  display: flex;
  width: 100%;
  min-width: 200px;
  flex-direction: column;
  align-items: start;
}

.drink-cup__name {
  font-family: var(--font-body);
  font-weight: 600;
  width: 100%;
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
  max-width: 200px;
  min-width: 150px;
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

.drink-cup__button:hover {
  background: var(--accent-color-hover);
  transform: scale(1.05);
  transition: var(--transition);
}
</style>
