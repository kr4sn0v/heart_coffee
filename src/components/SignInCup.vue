<script setup>
import HeaderCup from './HeaderCup.vue'
import FooterLogoCup from './FooterLogoCup.vue'
import SignInHeaderCup from './SignInHeaderCup.vue'
import SignInFormCup from './SignInFormCup.vue'

import { loading } from '../composables/useSignIn.js'
</script>

<template>
  <section class="sign-in-cup__view">
    <HeaderCup />
    <SignInHeaderCup />
    <main class="sign-in-cup__page">
      <section class="sign-in-cup__section">
        <p>Введите почту и получите промокод на -30%</p>
        <p>Спамить не будем, честное слово ^-^</p>
      </section>
      <SignInFormCup />
      <div class="sign-in-cup__overlay" v-if="loading">Пожалуйста, подождите, идет загрузка</div>
      <FooterLogoCup class="sign-in-cup__footer" />
    </main>
  </section>
</template>

<style scoped>
.sign-in-cup__view {
  display: grid;
  height: 100%;
  grid-auto-flow: row;
  grid-template-rows: 1fr 1fr;
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
  padding: 75px;
  gap: 10px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 3.35rem;
}

.sign-in-cup__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.15rem;
  font-family: var(--font-heading);
  color: var(--color-text-light);
  z-index: 1;
}

.sign-in-cup__footer {
  margin-top: 100px;
}
</style>
