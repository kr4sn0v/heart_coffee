<template>
  <header class="header-cup__view">
    <section class="header-cup__container">
      <div class="header-cup__logo">
        <h1>HEART COFFEE</h1>
      </div>
      <nav class="header-cup__navigation">
        <ul>
          <li>меню</li>
          <li>корзина</li>
          <li>регистрация</li>
          <li>войти</li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<style scoped>
.header-cup__view {
  position: fixed;
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
  padding: 20px 0px;
}

.header-cup__container {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-cup__logo h1 {
  font-family: var(--font-heading);
  font-size: 2rem;
  white-space: nowrap;
}

.header-cup__logo h1:hover {
  cursor: pointer;
  color: var(--accent-color);
  transition: var(--transition);
}

.header-cup__navigation {
  display: flex;
  align-items: center;
  gap: 30px;
}

.header-cup__navigation ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 30px;
}

.header-cup__navigation li {
  font-family: var(--font-body);
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
}

.header-cup__navigation li:hover {
  cursor: pointer;
  color: var(--accent-color);
  transition: color var(--transition);
}
</style>
