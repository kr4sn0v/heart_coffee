<template>
  <section class="sign-up-cup__view" v-if="!$route.meta.isHideChild">
    <HeaderCup />
    <section class="sign-up-cup__header">
      <SignUpHeaderCup />
    </section>
    <main class="sign-up-cup__page">
      <section class="sign-up-cup__section">
        <p>
          Введите почту и получите
          <router-link to="/sign-up/documents/promo" class="sign-up__router-link"
            >промокод на -30%</router-link
          >
        </p>
        <p>Спамить не будем, честное слово ^-^</p>
      </section>
      <SignUpFormCup class="sign-up-cup__form" />
      <FooterLogoCup class="sign-up-cup__footer" />
    </main>
  </section>
  <router-view></router-view>
</template>

<script setup>
import HeaderCup from '../main/HeaderCup.vue'
import FooterLogoCup from '../main/FooterLogoCup.vue'
import SignUpHeaderCup from './SignUpHeaderCup.vue'
import SignUpFormCup from './SignUpFormCup.vue'
</script>

<style scoped>
.sign-up-cup__view {
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

.sign-up-cup__page {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  background: var(--accent-color);
  color: var(--color-text-light);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}

.sign-up-cup__header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign-up-cup__section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  gap: 1rem;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 2.55rem;
}

.sign-up__router-link {
  color: inherit;
  text-decoration: none;
  opacity: 0.5;
  text-decoration: none;
  background-image: linear-gradient(var(--color-text-light), var(--color-text-light));
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 0% 2px;
  transition: background-size 0.4s ease;
}

.sign-up__router-link:hover {
  opacity: 1;
  background-size: 100% 2px;
  transition: var(--transition);
}

.sign-up-cup__form {
  margin-bottom: 5rem;
}

.sign-up-cup__footer {
  margin-top: auto;
}
</style>
