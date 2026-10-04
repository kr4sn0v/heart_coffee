<template>
  <LayoutCup v-if="!$route.meta.isHideChild">
    <TitleCup font-size="6.5vw" />
    <SignUpViewCup />
  </LayoutCup>

  <router-view></router-view>
</template>

<script setup>
import LayoutCup from '../universal/LayoutCup.vue'
import TitleCup from '../universal/TitleCup.vue'
import SignUpViewCup from './SignUpViewCup.vue'
</script>
