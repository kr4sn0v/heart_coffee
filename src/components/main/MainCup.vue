<template>
  <LayoutCup v-if="!$route.meta.isHide">
    <section>
      <MainVideoCup />
    </section>

    <section>
      <MainAboutCup />
    </section>

    <section>
      <FooterBlueCup />
    </section>
  </LayoutCup>
  <router-view></router-view>
</template>

<script setup>
import LayoutCup from '../universal/LayoutCup.vue'
import FooterBlueCup from '../universal/FooterBlueCup.vue'
import MainVideoCup from './MainVideoCup.vue'
import MainAboutCup from './MainAboutCup.vue'
</script>

<style scoped>
section {
  grid-area: 'section';
}
</style>
