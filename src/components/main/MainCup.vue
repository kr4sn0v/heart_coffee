<template>
  <main v-if="!$route.meta.isHide">
    <HeaderCup />
    <VideoCup />
    <MenuCup />
    <FooterCup />
  </main>
  <router-view></router-view>
</template>

<script setup>
import HeaderCup from './HeaderCup.vue'
import VideoCup from './VideoCup.vue'
import MenuCup from '../menu/MenuCup.vue'
import FooterCup from './FooterCup.vue'
</script>
