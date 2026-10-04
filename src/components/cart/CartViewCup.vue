<template>
  <main class="cart-cup__empty-view" v-if="props.totalItems === 0">
    <p>Ваша корзина пуста и грустит :(</p>
    <p>Не дайте корзине грустить - пополните ее любым напитком из нашего меню</p>
  </main>

  <main class="cart-cup__view" v-if="props.totalItems > 0">
    <section class="cart-cup__drinks-view">
      <CartListCup
        :get-image="props.getImage"
        :active-drink-key="props.activeDrinkKey"
        :items="props.items"
        @update-quantity="emit('update-quantity', $event)"
        @remove-item="emit('remove-item', $event)"
      />
    </section>
  </main>
</template>

<script setup>
import CartListCup from './CartListCup.vue'

const props = defineProps({
  getImage: {
    type: Function,
    required: true,
  },
  activeDrinkKey: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  totalItems: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['update-quantity', 'remove-item'])
</script>

<style scoped>
.cart-cup__empty-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  color: var(--dark-color);
}

.cart-cup__empty-view p {
  text-align: center;
}

.cart-cup__view {
  width: 100%;
}

.cart-cup__drinks-view {
  display: flex;
  margin: 3em 0;
}
</style>
