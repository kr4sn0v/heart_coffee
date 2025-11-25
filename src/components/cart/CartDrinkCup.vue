<template>
  <section class="cart-drink-cup__view">
    <img class="cart-drink-cup__image" :src="props.getImage" alt="Icon Drink" />
    <h3 class="cart-drink-cup__name">
      <router-link class="cart-drink-cup__router-link" :to="'/drink-info/' + props.item.callsign">
        {{ props.item.name }}</router-link
      >
    </h3>

    <section class="cart-drink-cup__info-view">
      <div class="card-drink-cup__info-container">
        <div class="cart-drink-cup__info">
          <p class="cart-drink-cup__price">
            {{ props.item.price }}
            <span>₽</span>
          </p>
          <p class="cart-drink-cup__volume">
            {{ props.item.volume }}
            <span>мл</span>
          </p>
        </div>

        <div class="cart-drink-cup__input-container">
          <input
            class="cart-drink-cup__input"
            type="number"
            :value="localeQuantity"
            @input="localeInput"
            min="1"
          />
        </div>
      </div>
    </section>

    <button
      class="cart-drink-cup__button"
      @click="emit('remove-item', props.item.id, props.item.activeDrinkKey)"
    >
      Удалить
    </button>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  item: {
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

const localeQuantity = ref(props.item.quantity)
const localeInput = (event) => {
  const value = +event.target.value
  localeQuantity.value = value
  emit('update-quantity', props.item.id, value, props.item.activeDrinkKey)
}

const emit = defineEmits(['update-quantity', 'remove-item'])
</script>

<style scoped>
.cart-drink-cup__view {
  font-size: 1.5rem;
  width: 100%;
  max-width: 20em;
  min-width: 15em;
  color: var(--dark-color);
}

.cart-drink-cup__image {
  width: 100%;
  height: auto;
}

.cart-drink-cup__name-container {
  display: flex;
}

.cart-drink-cup__name {
  font-weight: 600;
  font-size: 1.35em;
  text-align: start;
}

.cart-drink-cup__router-link {
  color: inherit;
  text-decoration: none;
  text-decoration: none;
  background-image: linear-gradient(var(--dark-color), var(--dark-color));
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 0% 2px;
  transition: background-size var(--transition) ease;
}

.cart-drink-cup__router-link:hover {
  background-size: 100% 2px;
  transition: var(--transition);
}

.cart-drink-cup__info-view {
  gap: 1em;
  display: flex;
  width: 100%;
  justify-content: start;
}

.card-drink-cup__info-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 1em 0 1em 0;
}

.cart-drink-cup__info {
  display: flex;
  flex-direction: column;
}

.cart-drink-cup__price {
  display: flex;
  font-weight: 600;
  font-size: 1.25em;
}

.cart-drink-cup__volume {
  font-weight: 300;
  font-size: 0.85em;
}

.cart-drink-cup__input-container {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.cart-drink-cup__input {
  text-align: center;
  background: transparent;
  font-weight: 600;
  border: 2px solid var(--dark-color);
  border-radius: var(--border-radius);
  font-size: 1em;
  max-width: 8.5em;
  height: 2.5em;
}

.cart-drink-cup__input:focus {
  outline: none;
  transition: var(--transition);
}

.cart-drink-cup__button {
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

.cart-drink-cup__button:hover {
  background: var(--accent-color-hover);
  transform: scale(1.05);
  transition: var(--transition);
}
</style>
