<template>
  <section class="sign-up-cup__view">
    <HeaderCup />
    <SignUpHeaderCup />
    <main class="sign-up-cup__page">
      <section class="sign-up-cup__section">
        <p>Введите почту и получите промокод на -30%</p>
        <p>Спамить не будем, честное слово ^-^</p>
      </section>
      <SignUpFormCup class="sign-up-cup__form" />
      <FooterLogoCup class="sign-up-cup__footer" />
    </main>
  </section>
</template>

<script setup>
import HeaderCup from './HeaderCup.vue'
import FooterLogoCup from './FooterLogoCup.vue'
import SignUpHeaderCup from './SignUpHeaderCup.vue'
import SignUpFormCup from './SignUpFormCup.vue'
</script>

<style scoped>
.sign-up-cup__view {
  display: grid;
  height: 100vh;
  grid-auto-flow: row;
  grid-template-rows: 1fr 0.75fr;
  grid-template-areas:
    'section section'
    'main main';
}

section {
  grid-area: section;
}

main {
  grid-area: main;
}

.sign-up-cup__page {
  display: flex;
  flex-direction: column;
  background: var(--accent-color);
  color: var(--color-text-light);
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;
}

.sign-up-cup__section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7.5rem;
  gap: 1rem;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 2.55rem;
}

.sign-up-cup__form {
  margin-bottom: 5rem;
}

.sign-up-cup__footer {
  margin-top: auto;
}
</style>
