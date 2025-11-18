<template>
  <section class="sign-in-header-cup__header">
    <div class="sign-in-header-cup__logo">
      <div>
        <h1>Рады вас</h1>
        <h1>видеть ^-^</h1>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sign-in-header-cup__header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body);
  font-weight: 800;
  font-size: 2.85rem;
}

.sign-in-header-cup__logo div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

.sign-in-header-cup__logo > div > h1:hover {
  color: var(--accent-color);
  transition: var(--transition);
  cursor: pointer;
}
</style>
