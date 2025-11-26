<template>
  <header class="header-cup__page">
    <section class="header-cup__view">
      <div class="header-cup__logo-container">
        <router-link to="/" class="header-cup__router-link">
          <h1>HEART COFFEE</h1>
        </router-link>
      </div>
      <nav class="header-cup__navigation">
        <ul>
          <router-link to="/menu" class="header-cup__router-link">
            <li>меню</li>
          </router-link>
          <router-link to="/cart" class="header-cup__router-link header-cup__cart-counter">
            <li>корзина</li>
            <p>{{ totalItems }}</p>
          </router-link>
          <router-link to="/sign-up" class="header-cup__router-link">
            <li>регистрация</li>
          </router-link>
          <router-link to="/sign-in" class="header-cup__router-link">
            <li>войти</li>
          </router-link>
        </ul>
      </nav>
    </section>
  </header>
</template>

<script setup>
import { useCart } from '@/composables/useCart'

const { totalItems } = useCart()
</script>

<style scoped>
.header-cup__page {
  position: fixed;
  font-size: 1.5rem;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  background: var(--header-bg);
  backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid var(--header-border);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.85rem 0;
  color: var(--dark-color);
}

.header-cup__view {
  width: 100%;
  margin-inline: 2.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-cup__logo-container h1 {
  font-weight: 800;
  font-size: 2em;
  white-space: nowrap;
  margin-right: 3em;
}

.header-cup__logo-container h1:hover {
  cursor: pointer;
  color: var(--accent-color-light);
  transition: var(--transition);
}

.header-cup__router-link {
  color: inherit;
  text-decoration: none;
}

.header-cup__cart-counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}

.header-cup__cart-counter p {
  background-color: var(--accent-color-light);
  color: var(--light-color);
  border-radius: 50%;
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875em;
  font-weight: 700;
}

.header-cup__navigation {
  display: flex;
  align-items: center;
}

.header-cup__navigation ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-cup__navigation li {
  font-size: 1.25em;
  font-weight: 700;
  cursor: pointer;
}

.header-cup__navigation li:hover {
  cursor: pointer;
  color: var(--accent-color-light);
  transition: color var(--transition);
}
</style>
