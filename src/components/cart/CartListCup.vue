<template>
  <section class="cart-list-cup__form">
    <main class="cart-list-cup__page">
      <section class="cart-list-cup__view" v-for="item in items" :key="item.id">
        <img class="cart-list-cup__image" :src="getImage(item.callsign)" alt="Icon Drink" />

        <section class="cart-list-cup__info-view">
          <section class="cart-list-cup__name-container">
            <p class="cart-list-cup__name">
              <router-link class="cart-list-cup__router-link" :to="'/drink-info/' + item.callsign">
                {{ item.name }}</router-link
              >
            </p>
          </section>

          <div class="card-list-cup__info-container">
            <div class="cart-list-cup__info">
              <p class="cart-list-cup__price">
                {{ item.price }}
                <span>₽</span>
              </p>
              <p class="cart-list-cup__volume">
                {{ item.volume }}
                <span>мл</span>
              </p>
            </div>

            <div class="cart-list-cup__input-container">
              <input
                class="cart-list-cup__input"
                type="number"
                v-model.number="item.quantity"
                @input="
                  (event) => $emit('update-quantity', item.id, +event.target.value, activeDrinkKey)
                "
              />
            </div>
          </div>

          <button
            class="cart-list-cup__button"
            @click="$emit('remove-item', item.id, item.activeDrinkKey)"
          >
            Удалить
          </button>
        </section>
      </section>
    </main>

    <footer class="cart-list-cup__footer" v-if="items.length > 0">
      <section class="cart-list-cup__bottom-section">
        <div class="cart-list-cup__info-bottom">
          К оплате: {{ totalPrice }}
          <span>₽</span>
        </div>
        <div class="cart-list-cup__info-bottom">Позиций: {{ totalItems }}</div>
      </section>

      <section class="cart-list-cup__bottom-section">
        <button class="cart-list-cup__button-bottom" @click="$emit('clear-cart')">
          Оплатить заказ
        </button>
        <button class="cart-list-cup__button-bottom" @click="$emit('clear-cart')">
          Удалить все
        </button>
      </section>
    </footer>
  </section>
</template>

<script setup>
defineProps({
  items: {
    type: Object,
    required: true,
  },
  totalItems: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
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
</script>

<style scoped>
.cart-list-cup__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cart-list-cup__header {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 2.55rem;
}

.cart-list-cup__page {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  gap: 5rem;
}

.cart-list-cup__view {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 30rem;
  min-width: 15rem;
  padding: 3.5rem;
  gap: 1.25rem;
  border-radius: 20px;
  background: var(--color-text-light);
}

.cart-list-cup__image {
  width: auto;
  height: auto;
}

.cart-list-cup__name-container {
  display: flex;
}

.cart-list-cup__name {
  font-family: var(--font-body);
  color: var(--color-text-dark);
  font-weight: 600;
  font-size: 1.75rem;
}

.cart-list-cup__router-link {
  font-family: var(--font-body);
  color: var(--color-text-dark);
  font-weight: 600;
  font-size: 1.75rem;
  color: inherit;
  text-decoration: none;
  text-decoration: none;
  background-image: linear-gradient(var(--color-text-dark), var(--color-text-dark));
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 0% 2px;
  transition: background-size 0.4s ease;
}

.cart-list-cup__router-link:hover {
  background-size: 100% 2px;
  transition: var(--transition);
}

.cart-list-cup__info-view {
  gap: 1.25rem;
  display: flex;
  flex-direction: column;
}

.card-list-cup__info-container {
  display: flex;
  justify-content: space-between;
}

.cart-list-cup__info {
  display: flex;
  flex-direction: column;
}

.cart-list-cup__price {
  display: flex;
  font-family: var(--font-body);
  color: var(--color-text-dark);
  font-weight: 600;
  font-size: 1.65rem;
}

.cart-list-cup__volume {
  font-family: var(--font-body);
  color: var(--color-text-dark);
  font-weight: 300;
  font-size: 1.45rem;
}

.cart-list-cup__input-container {
  display: flex;
  flex-direction: column;
  align-items: end;
}

.cart-list-cup__input {
  text-align: center;
  background: transparent;
  font-family: var(--font-body);
  font-weight: 600;
  border: 2px solid var(--color-border);
  border-radius: 25px;
  font-size: 1.5rem;
  max-width: 12.5rem;
  height: 3.5rem;
}

.cart-list-cup__input:focus {
  outline: none;
  transition: var(--transition);
}

.cart-list-cup__button {
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

.cart-list-cup__button:hover {
  transform: scale(1.05);
  transition: var(--transition);
}

.cart-list-cup__footer {
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  background: var(--accent-color);
  width: 100%;
}

.cart-list-cup__bottom-section {
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin-bottom: 2.5rem;
}

.cart-list-cup__info-bottom {
  display: flex;
  color: var(--color-text-light);
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 2rem;
}

.cart-list-cup__button-bottom {
  width: 30rem;
  height: 5.5rem;
  background: var(--color-text-light);
  border: none;
  border-radius: 50px;
  color: var(--accent-color);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 1.65rem;
  cursor: pointer;
  white-space: nowrap;
}

.cart-list-cup__button-bottom:hover {
  transform: scale(1.05);
  transition: var(--transition);
}
</style>
