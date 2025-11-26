<template>
  <main class="main-about-cup__page" v-if="!loading">
    <div v-for="line in currentLines" :key="line" class="main-about-cup__container">
      <h1 class="main-about-cup__header">{{ line.title }}</h1>

      <div v-for="item in line.items" :key="item">
        <p class="main-about-cup__subtitle">{{ item }}</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useFetch } from '../../composables/useFetch.js'
import { computed, ref } from 'vue'

const url = ref('http://localhost:3000/documents')
const { data: lines, loading } = useFetch(url)

const currentLines = computed(() => lines.value['about-us'])
</script>

<style scoped>
.main-about-cup__page {
  font-size: 1.5rem;
  margin: 7.5em;
  font-weight: 800;
  color: var(--dark-color);
}

.main-about-cup__container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.main-about-cup__header {
  text-align: center;
  font-size: 2em;
}

.main-about-cup__header:hover {
  color: var(--accent-color-light);
  transition: var(--transition);
  cursor: pointer;
}

.main-about-cup__subtitle {
  font-size: 1.25em;
  font-weight: 300;
}
</style>
