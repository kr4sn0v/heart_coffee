<template>
  <section class="sign-in-cup__view">
    <HeaderCup />
    <SignInHeaderCup />
    <main class="sign-in-cup__page">
      <section class="sign-in-cup__section">
        <p>С 1 декабря — возвращение легенды :)</p>
        <p>Тот самый глинтвейн, который все ждут</p>
      </section>
      <SignInFormCup class="sign-in-cup__form" />
      <FooterLogoCup class="sign-in-cup__footer" />
    </main>
  </section>
</template>

<script setup>
import FooterLogoCup from './FooterLogoCup.vue'
import HeaderCup from './HeaderCup.vue'
import SignInHeaderCup from './SignInHeaderCup.vue'
import SignInFormCup from './SignInFormCup.vue'
</script>

<style scoped>
.sign-in-cup__view {
  display: grid;
  height: 100vh;
  grid-auto-flow: row;
  grid-template-rows: 1fr 0.5fr;
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

.sign-in-cup__page {
  display: flex;
  flex-direction: column;
  background: var(--accent-color);
  color: var(--color-text-light);
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;
}

.sign-in-cup__section {
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

.sign-in-cup__form {
  margin-bottom: 5rem;
}

.sign-in-cup__footer {
  margin-top: auto;
}
</style>
