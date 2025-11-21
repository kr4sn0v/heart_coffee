<template>
  <section class="cart-list-header-cup-cup__header">
    <div class="cart-list-header-cup-cup__logo">
      <div>
        <h1>Корзина</h1>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cart-list-header-cup-cup__header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body);
  font-weight: 800;
  font-size: 2.85rem;
}

.cart-list-header-cup-cup__logo div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

.cart-list-header-cup-cup__logo > div > h1:hover {
  color: var(--accent-color);
  transition: var(--transition);
  cursor: pointer;
}
</style>
