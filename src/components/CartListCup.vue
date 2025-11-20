<template>
  <section class="cart-list-cup__form" :validation-schema="cartListShema" autocomplete="off">
    <main class="cart-list-cup__page">
      <section class="cart-list-cup__view" v-for="item in items" :key="item.id">
        <img class="cart-list-cup__image" :src="getImage(item.id)" alt="Icon Drink" />

        <section class="cart-list-cup__info-view">
          <section class="cart-list-cup__name-container">
            <h3 class="cart-list-cup__name">
              <router-link class="cart-list-cup__router-link" :to="'/drink-info/' + item.id">{{
                item.name
              }}</router-link>
            </h3>
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
                name="quantity"
                @input="(event) => updateQuantity(item.id, +event.target.value, activeDrinkKey)"
              />
            </div>
          </div>

          <button class="cart-list-cup__button" @click="removeItem(item.id, activeDrinkKey)">
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
        <button class="cart-list-cup__button-bottom" @click="clearCart">Оплатить заказ</button>
        <button class="cart-list-cup__button-bottom" @click="clearCart">Удалить все</button>
      </section>
    </footer>
  </section>
</template>

<script setup>
import { cartListShema } from '@/composables/useSchemas'
import { useCart } from '@/composables/useCart'

import { getImage } from '@/composables/useGetImage'
import { activeDrinkKey } from '@/composables/useSelectDrink'

const { items, totalItems, totalPrice, removeItem, updateQuantity, clearCart } = useCart()
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
  max-width: 200px;
  padding: 3.5rem;
  border-radius: 20px;
  background: var(--color-text-light);
}

.cart-list-cup__image {
  width: 100%;
  max-width: 210px;
  min-width: 150px;
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

.cart-list-cup__name:hover {
  transform: scale(1.05);
  transition: var(--transition);
}

.cart-list-cup__router-link {
  color: inherit;
  text-decoration: none;
}

.cart-list-cup__info-view {
  gap: 1.5rem;
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
  width: 100%;
  max-width: 100px;
  height: 3.5rem;
}

.cart-list-cup__input:focus {
  outline: none;
  transition: var(--transition);
}

.cart-list-cup__error {
  font-size: 1.25rem;
  text-align: start;
  width: 100%;
  max-width: 200px;
  font-family: var(--font-body);
  color: var(--color-text-dark);
  opacity: 0.7;
}

.cart-list-cup__button {
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
  height: 4.5rem;
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
