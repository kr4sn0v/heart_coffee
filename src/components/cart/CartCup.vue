<template>
  <section class="cart-cup__view">
    <HeaderCup />
    <section class="cart-cup__header">
      <CartListHeaderCup />
    </section>
    <main class="cart-cup__main">
      <section class="cart-cup__section">
        <CartListCup class="cart-cup__page" />
      </section>
    </main>
  </section>
</template>

<script setup>
import HeaderCup from '../main/HeaderCup.vue'
import CartListCup from './CartListCup.vue'
import CartListHeaderCup from './CartListHeaderCup.vue'
</script>

<style scoped>
.cart-cup__view {
  display: grid;
  grid-auto-flow: column;
  height: 100%;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-areas: 'section' 'main';
}

section {
  grid-area: 'section';
}

main {
  grid-area: 'main';
}

.cart-cup__header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-cup__main {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  background: var(--accent-color);
  color: var(--color-text-light);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}

.cart-cup__section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
}

.cart-cup__page {
  display: flex;
  margin-top: auto;
  flex-direction: column;
}
</style>
