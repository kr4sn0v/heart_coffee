<template>
  <section class="sign-in-cup__view">
    <HeaderCup />
    <section class="sign-in-cup__header">
      <SignInHeaderCup />
    </section>
    <main class="sign-in-cup__page">
      <section class="sign-in-cup__section">
        <p>С 1 декабря — возвращение легенды :)</p>
        <p>
          Тот самый <router-link class="sign-in__router-link">глинтвейн</router-link>, который все
          ждут
        </p>
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
  grid-auto-flow: column;
  height: 100%;
  grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-areas: 'section' 'main';
}

section {
  grid-area: 'section';
}

main {
  grid-area: 'main';
}

.sign-in-cup__header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign-in-cup__page {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  background: var(--accent-color);
  color: var(--color-text-light);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}

.sign-in-cup__section {
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

.sign-in__router-link {
  color: inherit;
}

.sign-in__router-link:hover {
  opacity: 0.5;
  transition: var(--transition);
}

.sign-in-cup__form {
  margin-bottom: 5rem;
}

.sign-in-cup__footer {
  margin-top: auto;
}
</style>
