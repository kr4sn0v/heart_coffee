<template>
  <main class="documents-cup__page">
    <HeaderCup />

    <section class="documents-cup__header-view">
      <TitleCup font-size="3.5vw" />
    </section>

    <section class="documents-cup__view" v-if="!loading">
      <div v-for="document in currentDocument" :key="document.num">
        <h2 class="documents-cup__header">{{ document.num }}. {{ document.title }}</h2>

        <div v-for="(item, index) in document.items" :key="index">
          <p class="documents-cup__subtitle" v-if="typeof item === 'string'">
            {{ document.num }}.{{ index + 1 }} {{ item }}
          </p>

          <div v-else class="documents-cup__subsection-container">
            <h3 class="documents-cup__subtitle">{{ item.subtitle }}</h3>
            <ul>
              <li class="documents-cup__subtitle" v-for="(row, index) in item.list" :key="index">
                {{ row }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <FooterCup />
    </footer>
  </main>
</template>

<script setup>
import HeaderCup from '../universal/HeaderCup.vue'
import FooterCup from '../universal/FooterCup.vue'
import { useFetch } from '../../composables/useFetch.js'

import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import TitleCup from '../universal/TitleCup.vue'

const url = ref('http://localhost:3000/documents')
const { data: documents, loading } = useFetch(url)

const route = useRoute()
const currentType = computed(() => route.params.type)
const currentDocument = computed(() => documents.value[currentType.value])
</script>

<style scoped>
.documents-cup__page {
  font-size: 1.5rem;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(auto-fit, minmax(350px, 1fr));
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

.documents-cup__header-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--header-border);
}

.documents-cup__header h1:hover {
  color: var(--accent-color-light);
  transition: var(--transition);
  cursor: pointer;
}

.documents-cup__view {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 5em;
  gap: 2.5em;
  color: var(--dark-color);
}

.documents-cup__header {
  font-size: 1.85em;
  font-weight: 600;
  margin-bottom: 0.85em;
}

.documents-cup__subtitle {
  font-size: 1.25em;
  font-weight: 300;
  margin-bottom: 0.5em;
}

.documents-cup__subsection-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
</style>
