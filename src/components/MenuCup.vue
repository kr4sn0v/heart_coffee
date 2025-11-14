<template>
  <section class="menu-cup__view">
    <nav class="menu-cup__navigation">
      <h2>меню</h2>
      <hr />
      <h3>кофе</h3>
    </nav>
    <nav class="menu-cup__navigation">
      <h3>не кофе</h3>
    </nav>
  </section>
</template>

<script setup></script>

<style scoped>
.menu-cup__view {
  display: grid;
  grid-auto-flow: row;
}

.menu-cup__navigation h2,
.menu-cup__navigation h3 {
  font-family: 'Onder', sans-serif;
  font-size: 2rem;
}

hr {
  border: 2px solid #252732;
  border-radius: 4px;
  margin-bottom: 30px;
}
</style>
