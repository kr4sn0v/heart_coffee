<template>
  <section class="cart-drink-cup__view">
    <img
      class="cart-drink-cup__image"
      :src="props.getImage(props.item.callsign)"
      alt="Icon Drink"
    />

    <section class="cart-drink-cup__info-view">
      <section class="cart-drink-cup__name-container">
        <h3 class="cart-drink-cup__name">
          <router-link
            class="cart-drink-cup__router-link"
            :to="'/drink-info/' + props.item.callsign"
          >
            {{ props.item.name }}</router-link
          >
        </h3>
      </section>

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
            v-model.number="props.item.quantity"
            @input="
              (event) =>
                emit('update-quantity', props.item.id, +event.target.value, props.activeDrinkKey)
            "
          />
        </div>
      </div>

      <button
        class="cart-drink-cup__button"
        @click="emit('remove-item', props.item.id, props.item.activeDrinkKey)"
      >
        Удалить
      </button>
    </section>
  </section>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  getImage: {
    type: Function,
    required: true,
  },
  activeDrinkKey: {
    type: String,
    required: true,
  },
})

console.log(props.activeDrinkKey)

const emit = defineEmits(['update-quantity', 'remove-item'])
</script>

<style scoped>
.cart-drink-cup__view {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 20em;
  min-width: 15em;
  padding: 2.5em;
  gap: 1.25rem;
  border-radius: var(--border-radius);
  background: var(--light-color);
}

.cart-drink-cup__image {
  width: auto;
  height: auto;
}

.cart-drink-cup__name-container {
  display: flex;
}

.cart-drink-cup__name {
  color: var(--dark-color);
}

.cart-drink-cup__router-link {
  color: var(--dark-color);
  font-weight: 600;
  font-size: 1.35em;
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
  gap: 1.25em;
  display: flex;
  flex-direction: column;
}

.card-drink-cup__info-container {
  display: flex;
  justify-content: space-between;
}

.cart-drink-cup__info {
  display: flex;
  flex-direction: column;
}

.cart-drink-cup__price {
  display: flex;
  color: var(--dark-color);
  font-weight: 600;
  font-size: 1.25em;
}

.cart-drink-cup__volume {
  color: var(--dark-color);
  font-weight: 300;
  font-size: 1.15em;
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
  max-width: 10em;
  height: 2.5em;
}

.cart-drink-cup__input:focus {
  outline: none;
  transition: var(--transition);
}

.cart-drink-cup__button {
  width: 100%;
  height: 3.5em;
  background: var(--accent-color);
  border: none;
  border-radius: var(--border-radius);
  color: var(--light-color);
  font-weight: 500;
  font-size: 1.15em;
  cursor: pointer;
  white-space: nowrap;
}

.cart-drink-cup__button:hover {
  transform: scale(1.05);
  transition: var(--transition);
}
</style>
