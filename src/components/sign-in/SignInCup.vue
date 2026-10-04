<template>
  <LayoutCup v-if="!$route.meta.isHideChild">
    <TitleCup font-size="6.5vw" />
    <SignInViewCup />
  </LayoutCup>

  <router-view></router-view>
</template>

<script setup>
import LayoutCup from '../universal/LayoutCup.vue'
import TitleCup from '../universal/TitleCup.vue'
import SignInViewCup from './SignInViewCup.vue'
</script>
