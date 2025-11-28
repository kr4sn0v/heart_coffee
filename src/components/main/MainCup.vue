<template>
  <main class="main-cup__page" v-if="!$route.meta.isHide">
    <HeaderCup />

    <section class="main-cup__header-view">
      <MainVideoCup />
    </section>

     <section class="main-cup__view">
        <MainAboutCup />
     </section>

    <footer class="main-cup__footer">
      <FooterCup />
    </footer>
  </main>
  <router-view></router-view>
</template>

<script setup>
import HeaderCup from '../universal/HeaderCup.vue'
import MainVideoCup from './MainVideoCup.vue'
import MainAboutCup from './MainAboutCup.vue'
import FooterCup from '../universal/FooterCup.vue'
</script>

<style scoped>
.main-cup__page {
  font-size: 1.5rem;
  display: grid;
  height: 100dvh;
  grid-template-rows: repeat(auto-fit, minmax(auto, 1fr));
  grid-template-areas: 'section' 'section';
}

section {
  grid-area: 'section';
}

section {
  grid-area: 'section';
}

.main-cup__view {
  display: flex;
  align-items: center;
}

.main-cup__footer {
  margin-top: auto;
}
</style>
