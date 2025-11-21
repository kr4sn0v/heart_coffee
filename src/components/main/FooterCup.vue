<template>
  <footer>
    <section class="footer-cup__view">
      <p>Если у вас есть вопросы, предложения или</p>
      <p>что-либо ещё — обращаться к нам по адресу:</p>
      <a>franchise_heart_coffee@heart_group.io</a>
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
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}

.footer-cup__view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6.5rem;
  white-space: nowrap;
  gap: 0.5rem;
}

.footer-cup__view p {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 2.5rem;
}

.footer-cup__view a {
  font-family: var(--font-body);
  font-weight: 800;
  font-size: 2.5rem;
  text-decoration: none;
  background-image: linear-gradient(var(--color-text-light), var(--color-text-light));
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 0% 2px;
  transition: background-size 0.4s ease;
  cursor: pointer;
}

.footer-cup__view a:hover {
  opacity: 1;
  background-size: 100% 2px;
  transition: var(--transition);
}
</style>
