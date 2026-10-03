<template>
  <main class="layout-cup__page">
    <HeaderCup />
    <slot />
  </main>
</template>

<script setup>
import HeaderCup from './HeaderCup.vue'
</script>

<style scoped>
.layout-cup__page {
  font-size: 1.5rem;
  display: grid;
  height: 100dvh;
}
</style>
