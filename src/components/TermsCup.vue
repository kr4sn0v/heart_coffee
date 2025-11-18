<template>
  <section class="terms-cup__view">
    <HeaderCup />
    <section class="terms-cup__header">
      <h1>Условия использования</h1>
      <h1>сервиса HEART COFFEE</h1>
    </section>
    <main class="terms-cup__container" v-if="!loading">
      <div v-for="section in sections" :key="section.num">
        <h2 class="terms-cup__header-section">{{ section.num }}. {{ section.title }}</h2>

        <div v-for="(item, index) in section.items" :key="index">
          <p class="terms-cup__subtitle-text" v-if="typeof item === 'string'">
            {{ section.num }}.{{ index + 1 }} {{ item }}
          </p>

          <div v-else class="terms-cup__subtitles-container">
            <h3 class="terms-cup__subtitle-section">{{ item.subtitle }}</h3>
            <ul>
              <li class="terms-cup__subtitle-text" v-for="(row, index) in item.list" :key="index">
                {{ row }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <FooterCup />
    </footer>
  </section>
</template>

<script setup>
import HeaderCup from './HeaderCup.vue'
import FooterCup from './FooterCup.vue'
import { useFetch } from '../composables/useFetch.js'
import { ref } from 'vue'

const url = ref('http://localhost:3000/sections')

const { data: sections, loading } = useFetch(url)
console.log(sections)
</script>

<style scoped>
.terms-cup__view {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-areas: 'section' 'main' 'footer';
}

section {
  grid-area: 'section';
}

main {
  grid-area: 'main';
}

footer {
  grid-area: 'footer';
}

.terms-cup__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--header-border);
}

.terms-cup__header h1 {
  font-family: var(--font-body);
  font-weight: 800;
  font-size: 2.85rem;
}

.terms-cup__header h1:hover {
  color: var(--accent-color);
  transition: var(--transition);
  cursor: pointer;
}

.terms-cup__container {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 8.5rem;
  gap: 3.5rem;
}

.terms-cup__header-section {
  font-family: var(--font-body);
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.terms-cup__subtitle-text {
  font-family: var(--font-body);
  font-size: 1.45rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

.terms-cup__subtitles-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.terms-cup__subtitle-section {
  font-family: var(--font-body);
  font-size: 1.85rem;
  font-weight: 500;
}
</style>
