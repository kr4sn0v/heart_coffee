<template>
  <main v-if="!$route.meta.isHide">
    <HeaderCup />
    <VideoCup />
    <AboutUsCup />
    <FooterCup />
  </main>
  <router-view></router-view>
</template>

<script setup>
import HeaderCup from './HeaderCup.vue'
import VideoCup from './VideoCup.vue'
import AboutUsCup from './AboutUsCup.vue'
import FooterCup from './FooterCup.vue'
</script>
