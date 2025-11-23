<template>
  <section class="header-universal-cup__view">
    <div class="header-universal-cup__logo">
      <h1 v-for="line in header" :key="line">{{ line }}</h1>
    </div>
  </section>
</template>

<script setup>
import { getHeader } from '@/composables/useGetHeader'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const header = computed(() =>
  getHeader(route.params.type ? route.name + '/' + route.params.type : route.name),
)
</script>

<style scoped>
.header-universal-cup__view {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 2.85rem;
}

.header-universal-cup__logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--dark-color);
}

.header-universal-cup__logo > h1:hover {
  color: var(--accent-color);
  transition: var(--transition);
  cursor: pointer;
}
</style>
