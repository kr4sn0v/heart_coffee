<template>
  <footer class="cart-footer-cup__footer" v-if="props.items.length > 0">
    <section class="cart-footer-cup__bottom-section">
      <div class="cart-footer-cup__info-bottom">
        К оплате: {{ props.totalPrice }}
        <span>₽</span>
      </div>
      <div class="cart-footer-cup__info-bottom">Позиций: {{ props.totalItems }}</div>
    </section>

    <section class="cart-footer-cup__bottom-section">
      <button class="cart-footer-cup__button-bottom" @click="emit('clear-cart')">
        Оплатить заказ
      </button>
      <button class="cart-footer-cup__button-bottom" @click="emit('clear-cart')">
        Удалить все
      </button>
    </section>
  </footer>
</template>

<script setup>
const props = defineProps({
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
})

const emit = defineEmits(['clear-cart'])
</script>

<style scoped>
.cart-footer-cup__footer {
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--accent-color-light);
  width: 100%;
  padding: 3em 0;
  gap: 3em;
}

.cart-footer-cup__bottom-section {
  display: flex;
  justify-content: center;
  gap: 5em;
}

.cart-footer-cup__info-bottom {
  display: flex;
  color: var(--light-color);
  font-weight: 400;
  font-size: 1.55em;
}

.cart-footer-cup__button-bottom {
  width: 15em;
  height: 3.5em;
  background: var(--light-color);
  border: none;
  border-radius: var(--border-radius);
  color: var(--accent-color-light);
  font-weight: 600;
  font-size: 1.15em;
  cursor: pointer;
  white-space: nowrap;
}

.cart-footer-cup__button-bottom:hover {
  transform: scale(1.05);
  transition: var(--transition);
}
</style>
