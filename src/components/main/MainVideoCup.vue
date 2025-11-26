<template>
  <main class="main-video-cup__page">
    <video class="main-video-cup__video" playsinline muted loop autoplay>
      <source src="../../../public/main_video.mp4" type="video/mp4" />
    </video>
    <section class="main-video-cup__title-view">
      <h2>HEART COFFEE</h2>
      <p>в сердце с <span>2к17</span></p>
    </section>
  </main>
</template>

<style scoped>
.main-video-cup__page {
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.main-video-cup__video {
  overflow: hidden;
  height: auto;
  width: 100vw;
  border: none;
  outline: none;
}

.main-video-cup__title-view {
  font-family: var(--font-header);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  inset: 0;
  white-space: nowrap;
}

.main-video-cup__title-view h2,
.main-video-cup__title-view p {
  font-size: 3.5em;
  font-weight: 800;
  color: var(--light-color);
}

.main-video-cup__title-view span {
  color: var(--accent-color-light);
}
</style>
