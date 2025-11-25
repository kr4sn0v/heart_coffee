<template>
  <header class="header-cup__view">
    <section class="header-cup__container">
      <div class="header-cup__logo">
        <router-link to="/" class="header-cup__router-link">
          <h1>HEART COFFEE</h1>
        </router-link>
      </div>
      <nav class="header-cup__navigation">
        <ul>
          <router-link to="/menu" class="header-cup__router-link">
            <li>меню</li>
          </router-link>
          <router-link to="/cart" class="header-cup__router-link">
            <li>корзина</li>
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

<style scoped>
.header-cup__view {
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

.header-cup__container {
  width: 100%;
  margin-inline: 2.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-cup__logo h1 {
  font-weight: 800;
  font-size: 2em;
  white-space: nowrap;
  margin-right: 3em;
}

.header-cup__logo h1:hover {
  cursor: pointer;
  color: var(--accent-color-light);
  transition: var(--transition);
}

.header-cup__router-link {
  color: inherit;
  text-decoration: none;
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
