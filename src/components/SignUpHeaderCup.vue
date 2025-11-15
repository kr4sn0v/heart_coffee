<template>
  <section class="sign-up-header-cup__header">
    <div class="sign-up-header-cup__logo">
      <div>
        <h1>Давайте</h1>
        <h1>дружить;)</h1>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sign-up-header-cup__header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 2.5rem;
}

.sign-up-header-cup__logo div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

.sign-up-header-cup__logo > div > h1:hover {
  color: var(--accent-color);
  transition: var(--transition);
  cursor: pointer;
}
</style>
