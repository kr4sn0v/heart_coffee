<template>
  <section class="sign-in-cup__view" v-if="!$route.meta.isHideChild">
    <HeaderCup />
    <section class="sign-in-cup__header">
      <HeaderUniversalCup />
    </section>
    <main class="sign-in-cup__page">
      <section class="sign-in-cup__section">
        <p>С 1 декабря — возвращение легенды :)</p>
        <p>
          Тот самый
          <router-link to="/sign-in/mulled-wine" class="sign-in__router-link">глинтвейн</router-link
          >, который все ждут
        </p>
      </section>
      <SignInFormCup class="sign-in-cup__form" />
      <FooterLogoCup class="sign-in-cup__footer" />
    </main>
  </section>
  <router-view></router-view>
</template>

<script setup>
import FooterLogoCup from '../main/FooterLogoCup.vue'
import HeaderCup from '../main/HeaderCup.vue'
import HeaderUniversalCup from '../uni/HeaderUniversalCup.vue'
import SignInFormCup from './SignInFormCup.vue'
</script>

<style scoped>
.sign-in-cup__view {
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
}

.sign-in-cup__section p {
  font-weight: 600;
  font-size: 2.55rem;
}

.sign-in__router-link {
  color: inherit;
  text-decoration: none;
  opacity: 0.5;
  text-decoration: none;
  background-image: linear-gradient(var(--light-color), var(--light-color));
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 0% 2px;
  transition: background-size var(--transition) ease;
}

.sign-in__router-link:hover {
  opacity: 1;
  background-size: 100% 2px;
  transition: var(--transition);
}

.sign-in-cup__form {
  margin-bottom: 5rem;
}

.sign-in-cup__footer {
  margin-top: auto;
}
</style>
