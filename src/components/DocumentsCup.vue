<template>
  <section class="documents-cup__view">
    <HeaderCup />

    <section class="documents-cup__header" v-if="currentType === 'terms'">
      <h1>Условия использования</h1>
      <h1>сервиса HEART COFFEE</h1>
    </section>

    <section class="documents-cup__header" v-if="currentType === 'processing'">
      <h1>Условия обработки</h1>
      <h1>персональных данных</h1>
    </section>

    <section class="documents-cup__header" v-if="currentType === 'promo'">
      <h1>Условия проведения</h1>
      <h1>акции</h1>
    </section>

    <main class="documents-cup__container" v-if="!loading">
      <div v-for="document in currentDocument" :key="document.num">
        <h2 class="documents-cup__header-section">{{ document.num }}. {{ document.title }}</h2>

        <div v-for="(item, index) in document.items" :key="index">
          <p class="documents-cup__subtitle-text" v-if="typeof item === 'string'">
            {{ document.num }}.{{ index + 1 }} {{ item }}
          </p>

          <div v-else class="documents-cup__subtitles-container">
            <h3 class="documents-cup__subtitle-section">{{ item.subtitle }}</h3>
            <ul>
              <li
                class="documents-cup__subtitle-text"
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
  </section>
</template>

<script setup>
import HeaderCup from './HeaderCup.vue'
import FooterCup from './FooterCup.vue'
import { useFetch } from '../composables/useFetch.js'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const url = ref('http://localhost:3000/documents')
const { data: documents, loading } = useFetch(url)

const route = useRoute()
const currentType = computed(() => route.params.type)
const currentDocument = computed(() => documents.value[currentType.value])
</script>

<style scoped>
.documents-cup__view {
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

.documents-cup__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--header-border);
}

.documents-cup__header h1 {
  font-family: var(--font-body);
  font-weight: 800;
  font-size: 2.85rem;
}

.documents-cup__header h1:hover {
  color: var(--accent-color);
  transition: var(--transition);
  cursor: pointer;
}

.documents-cup__container {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 8.5rem;
  gap: 3.5rem;
}

.documents-cup__header-section {
  font-family: var(--font-body);
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.documents-cup__subtitle-text {
  font-family: var(--font-body);
  font-size: 1.45rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

.documents-cup__subtitles-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.documents-cup__subtitle-section {
  font-family: var(--font-body);
  font-size: 1.85rem;
  font-weight: 500;
}
</style>
