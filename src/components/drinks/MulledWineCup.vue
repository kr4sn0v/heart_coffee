<template>
  <HeaderCup />
  <section class="mulled-wine-cup__view">
    <section class="mulled-wine-cup__header">
      <img
        class="mulled-wine-cup__image"
        src="../../../public/svg/mulled-wine.svg"
        alt="Icon Drink"
      />
      <h1>Глинтвейн</h1>
    </section>

    <main class="mulled-wine-cup__main">
      <section class="mulled-wine-cup__info-page">
        <section class="mulled-wine-cup__info-description">
          <p>
            Ароматное сочетание красного вина, пряностей и цитрусовых согревает душу и поднимает
            настроение. Насладитесь нежными нотками корицы, гвоздики и апельсина в каждом глотке –
            маленький зимний праздник в вашей чашке.
          </p>
        </section>

        <section class="mulled-wine-cup__info-view">
          <div class="mulled-wine-cup__info-container">
            <p class="mulled-wine-cup__price">
              230
              <span>₽</span>
            </p>
            <p class="mulled-wine-cup__volume">200 мл</p>
          </div>

          <div class="mulled-wine-cup__info-container">
            <p class="mulled-wine-cup__price">
              250
              <span>₽</span>
            </p>
            <p class="mulled-wine-cup__volume">300 мл</p>
          </div>

          <div class="mulled-wine-cup__info-container">
            <p class="mulled-wine-cup__price">
              270
              <span>₽</span>
            </p>
            <p class="mulled-wine-cup__volume">500 мл</p>
          </div>
        </section>
      </section>

      <FooterCup class="mulled-wine-cup__footer" />
    </main>
  </section>
</template>

<script setup>
import HeaderCup from '../main/HeaderCup.vue'
import FooterCup from '../main/FooterCup.vue'
</script>

<style scoped>
.mulled-wine-cup__view {
  height: 100dvh;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'section' 'main';
}

section {
  grid-area: 'section';
}

main {
  grid-area: 'main';
}

.mulled-wine-cup__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--header-border);
  gap: 1.5rem;
  height: 20dvh;
}

.mulled-wine-cup__header h1 {
  font-weight: 800;
  font-size: 2.85rem;
  color: var(--dark-color);
}

.mulled-wine-cup__header h1:hover {
  color: var(--accent-color);
  transition: var(--transition);
  cursor: pointer;
}

.mulled-wine-cup__image {
  width: 100%;
  max-width: 300px;
  min-width: 150px;
  height: auto;
}

.mulled-wine-cup__main {
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
}

.mulled-wine-cup__info-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mulled-wine-cup__info-description {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-color);
  width: 45%;
  padding: 2.15rem;
  border-radius: 20px;
  margin: 10.5rem 0 7.5rem 0;
  border-radius: 20px;
  box-shadow:
    0 0 0 10px var(--accent-color),
    0 0 0 20px var(--color-text-light),
    0 0 0 30px var(--accent-color),
    0 0 0 40px var(--color-text-light),
    0 0 0 50px var(--accent-color);
}

.mulled-wine-cup__info-description p {
  color: var(--color-text-light);
  font-weight: 400;
  font-size: 1.75rem;

  box-shadow: offset-x offset-y blur-radius spread-radius color;
}

.mulled-wine-cup__info-view {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--dark-color);
}

.mulled-wine-cup__info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.5rem;
  gap: 3.5rem;
}

.mulled-wine-cup__info-container:hover {
  transform: scale(1.05);
  transition: var(--transition);
  cursor: pointer;
  color: var(--accent-color);
}

.mulled-wine-cup__info--active {
  cursor: pointer;
  color: var(--accent-color);
}

.mulled-wine-cup__price {
  display: flex;

  font-weight: 600;
  font-size: 1.65rem;
}

.mulled-wine-cup__volume {
  font-weight: 300;
  font-size: 1.45rem;
}

.mulled-wine-cup__footer {
  margin-top: auto;
}
</style>
