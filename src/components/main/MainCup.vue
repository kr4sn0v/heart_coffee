<template>
  <LayoutCup v-if="!$route.meta.isHide">
    <main>
      <MainVideoCup />
      <MainAboutCup />
    </main>

    <footer>
      <FooterBlueCup />
    </footer>
  </LayoutCup>

  <router-view></router-view>
</template>

<script setup>
import LayoutCup from '../universal/LayoutCup.vue'
import FooterBlueCup from '../universal/FooterBlueCup.vue'
import MainVideoCup from './MainVideoCup.vue'
import MainAboutCup from './MainAboutCup.vue'
</script>
