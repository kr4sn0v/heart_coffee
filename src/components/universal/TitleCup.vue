<template>
  <main class="title-cup__page">
    <div class="title-cup__logo-container">
      <h1 v-for="line in header" :key="line" :style="{ fontSize: props.fontSize }">{{ line }}</h1>
    </div>
  </main>
</template>

<script setup>
import { getHeader } from '@/composables/useGetHeader'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const header = computed(() =>
  getHeader(route.params.type ? route.name + '/' + route.params.type : route.name),
)

const props = defineProps({
  fontSize: {
    type: String,
    required: false,
  },
})
</script>

<style scoped>
.title-cup__page {
  font-weight: 800;
  font-size: 1.5rem;
}

.title-cup__logo-container {
  color: var(--dark-color);
  text-align: center;
}

.title-cup__logo-container > h1:hover {
  color: var(--accent-color-light);
  transition: var(--transition);
  cursor: pointer;
}
</style>
