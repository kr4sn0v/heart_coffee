<template>
  <footer class="footer-cup__page">
    <section class="footer-cup__view">
      <p>Если у вас есть вопросы, предложения или</p>
      <p>что-либо ещё — обращаться к нам по адресу:</p>
      <a>franchise_heart_coffee@heart_group.io</a>
    </section>
    <LogoCup />
  </footer>
</template>

<script setup>
import LogoCup from './LogoCup.vue'
</script>

<style scoped>
.footer-cup__page {
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  background: var(--accent-color-light);
  color: var(--color-text-light);

  font-weight: 400;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
}

.footer-cup__view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.5em;
  white-space: nowrap;
  gap: 0.5rem;
}

.footer-cup__view p {
  font-weight: 400;
  font-size: 1.55em;
}

.footer-cup__view a {
  font-weight: 800;
  font-size: 1.55em;
  text-decoration: none;
  background-image: linear-gradient(var(--light-color), var(--light-color));
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 0% 2px;
  transition: background-size var(--transition) ease;
  cursor: pointer;
}

.footer-cup__view a:hover {
  opacity: 1;
  background-size: 100% 2px;
  transition: var(--transition);
}
</style>
