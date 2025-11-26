<template>
  <main class="sign-in-cup__page" v-if="!$route.meta.isHideChild">
    <HeaderCup />
    <section class="sign-in-cup__header-view">
      <TitleCup font-size="6.5vw" />
    </section>
    <section class="sign-in-cup__view">
      <div class="sign-in-cup__container">
        <p>С 1 декабря — возвращение легенды :)</p>
        <p>
          Тот самый
          <router-link class="sign-in__router-link">глинтвейн</router-link>, который все ждут
        </p>
      </div>
      <div class="sign-in-cup__form-container">
        <SignInFormCup />
      </div>

      <div class="sign-in-cup__footer-container">
        <LogoCup />
      </div>
    </section>
  </main>
  <router-view></router-view>
</template>

<script setup>
import HeaderCup from '../universal/HeaderCup.vue'
import SignInFormCup from './SignInFormCup.vue'
import TitleCup from '../universal/TitleCup.vue'
import LogoCup from '../universal/LogoCup.vue'
</script>

<style scoped>
.sign-in-cup__page {
  font-size: 1.5rem;
  display: grid;
  grid-auto-flow: column;
  height: 100dvh;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-areas: 'section' 'main';
}

section {
  grid-area: 'section';
}

main {
  grid-area: 'main';
}

.sign-in-cup__header-view {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign-in-cup__view {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  background: var(--accent-color-light);
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
}

.sign-in-cup__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4.5em;
  gap: 1em;
}

.sign-in-cup__container p {
  font-weight: 600;
  font-size: 1.55em;
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

.sign-in-cup__form-container {
  margin-bottom: 2.5em;
}

.sign-in-cup__footer-container {
  margin-top: auto;
}
</style>
