<template>
  <section class="cart-list-cup__form">
    <main class="cart-list-cup__page">
      <div v-for="item in items" :key="item">
        <CartDrinkCup
          :item="item"
          :get-image="getImage"
          :active-drink-key="activeDrinkKey"
          @update-quantity="(...args) => emit('update-quantity', args)"
          @remove-item="(...args) => emit('remove-item', args)"
        />
      </div>
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
        <button class="cart-list-cup__button-bottom" @click="emit('clear-cart')">
          Оплатить заказ
        </button>
        <button class="cart-list-cup__button-bottom" @click="emit('clear-cart')">
          Удалить все
        </button>
      </section>
    </footer>
  </section>
</template>

<script setup>
import CartDrinkCup from './CartDrinkCup.vue'

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

const emit = defineEmits(['update-quantity', 'remove-item', 'clear-cart'])
</script>

<style scoped>
.cart-list-cup__form {
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
}

.cart-list-cup__page {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  gap: 3em 7em;
}

.cart-list-cup__footer {
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--accent-color);
  width: 100%;
}

.cart-list-cup__bottom-section {
  display: flex;
  justify-content: center;
  gap: 5em;
  margin-bottom: 2.5em;
}

.cart-list-cup__info-bottom {
  display: flex;
  color: var(--light-color);
  font-weight: 400;
  font-size: 1.55em;
}

.cart-list-cup__button-bottom {
  width: 20em;
  height: 3.5em;
  background: var(--light-color);
  border: none;
  border-radius: var(--border-radius);
  color: var(--accent-color);
  font-weight: 600;
  font-size: 1.35em;
  cursor: pointer;
  white-space: nowrap;
}

.cart-list-cup__button-bottom:hover {
  transform: scale(1.05);
  transition: var(--transition);
}
</style>
