<template>
  <main v-if="!$route.meta.isHide">
    <HeaderCup />
    <MainVideoCup />
    <MainAboutCup />
    <FooterCup />
  </main>
  <router-view></router-view>
</template>

<script setup>
import HeaderCup from '../universal/HeaderCup.vue'
import MainVideoCup from './MainVideoCup.vue'
import MainAboutCup from './MainAboutCup.vue'
import FooterCup from '../universal/FooterCup.vue'
</script>
