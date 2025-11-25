<template>
  <section class="header-universal-cup__view">
    <div class="header-universal-cup__logo">
      <h1 v-for="line in header" :key="line" :style="{ fontSize: props.fontSize }">{{ line }}</h1>
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

const props = defineProps({
  fontSize: {
    type: String,
    required: false,
  },
})
</script>

<style scoped>
.header-universal-cup__view {
  font-weight: 800;
  font-size: 1.5rem;
}

.header-universal-cup__logo {
  color: var(--dark-color);
  text-align: center;
}

.header-universal-cup__logo > h1:hover {
  color: var(--accent-color-light);
  transition: var(--transition);
  cursor: pointer;
}
</style>
