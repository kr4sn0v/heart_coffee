<template>
  <unit class="processing-cup__view">
    <HeaderCup />
    <unit class="processing-cup__header">
      <h1>Условия использования</h1>
      <h1>сервиса HEART COFFEE</h1>
    </unit>
    <main class="processing-cup__container" v-if="!loading">
      <div v-for="unit in units" :key="unit.num">
        <h2 class="processing-cup__header-unit">{{ unit.num }}. {{ unit.title }}</h2>

        <div v-for="(item, index) in unit.items" :key="index">
          <p class="processing-cup__subtitle-text" v-if="typeof item === 'string'">
            {{ unit.num }}.{{ index + 1 }} {{ item }}
          </p>

          <div v-else class="processing-cup__subtitles-container">
            <h3 class="processing-cup__subtitle-unit">{{ item.subtitle }}</h3>
            <ul>
              <li
                class="processing-cup__subtitle-text"
                v-for="(row, index) in item.list"
                :key="index"
              >
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
  </unit>
</template>

<script setup>
import HeaderCup from './HeaderCup.vue'
import FooterCup from './FooterCup.vue'
import { useFetch } from '../composables/useFetch.js'
import { ref } from 'vue'

const url = ref('http://localhost:3000/units')

const { data: units, loading } = useFetch(url)
console.log(units)
</script>

<style scoped>
.processing-cup__view {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-areas: 'unit' 'main' 'footer';
}

unit {
  grid-area: 'unit';
}

main {
  grid-area: 'main';
}

footer {
  grid-area: 'footer';
}

.processing-cup__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--header-border);
}

.processing-cup__header h1 {
  font-family: var(--font-body);
  font-weight: 800;
  font-size: 2.85rem;
}

.processing-cup__header h1:hover {
  color: var(--accent-color);
  transition: var(--transition);
  cursor: pointer;
}

.processing-cup__container {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 8.5rem;
  gap: 3.5rem;
}

.processing-cup__header-unit {
  font-family: var(--font-body);
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.processing-cup__subtitle-text {
  font-family: var(--font-body);
  font-size: 1.45rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

.processing-cup__subtitles-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.processing-cup__subtitle-unit {
  font-family: var(--font-body);
  font-size: 1.85rem;
  font-weight: 500;
}
</style>
