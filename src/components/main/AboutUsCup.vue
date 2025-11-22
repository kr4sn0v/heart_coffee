<template>
  <main class="about-us-cup__view" v-if="!loading">
    <div v-for="line in currentLines" :key="line" class="about-us-cup__container">
      <h2 class="about-us-cup__header">{{ line.title }}</h2>

      <div v-for="item in line.items" :key="item">
        <p class="about-us-cup__subtitle-text">{{ item }}</p>
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
.about-us-cup__view {
  margin: 5.5rem;
}

.about-us-cup__container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.about-us-cup__header {
  font-family: var(--font-body);
  font-size: 5.5rem;
  font-weight: 700;
  text-align: center;
}

.about-us-cup__header:hover {
  color: var(--accent-color);
  transition: var(--transition);
  cursor: pointer;
}

.about-us-cup__subtitle-text {
  font-family: var(--font-body);
  font-size: 1.85rem;
  font-weight: 300;
  margin: 0 15rem 0rem 15rem;
}
</style>
