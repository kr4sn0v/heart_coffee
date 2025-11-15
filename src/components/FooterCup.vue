<template>
  <footer>
    <section class="footer-cup__view">
      <p>Если у вас есть вопросы, предложения или</p>
      <p>что-либо ещё — обращаться к нам по адресу:</p>
      <span>franchise_heart_coffee@heart_group.io</span>
    </section>
    <FooterLogoCup />
  </footer>
</template>

<script setup>
import FooterLogoCup from './FooterLogoCup.vue'
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  background: var(--accent-color);
  color: var(--color-text-light);
  font-family: var(--font-body);
  font-weight: 400;
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;
}

.footer-cup__view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 65px;
  white-space: nowrap;
  gap: 5px;
}

.footer-cup__view p {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 3rem;
}

.footer-cup__view span {
  font-family: var(--font-body);
  font-weight: 800;
  font-size: 3rem;
}
</style>
