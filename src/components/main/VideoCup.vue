<template>
  <section class="video-cup__view">
    <video class="video-cup__video" playsinline muted loop autoplay>
      <source src="../../../public/main_video.mp4" type="video/mp4" />
    </video>
    <section class="video-cup__title">
      <h2>HEART COFFEE</h2>
      <p>в сердце с <span>2к17</span></p>
    </section>
  </section>
</template>

<style scoped>
.video-cup__view {
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.video-cup__video {
  overflow: hidden;
  height: auto;
  width: 100vw;
  border: none;
  outline: none;
}

.video-cup__title {
  font-family: var(--font-header);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  inset: 0;
  white-space: nowrap;
}

.video-cup__title h2,
.video-cup__title p {
  font-size: 3em;
  font-weight: 800;
  color: var(--light-color);
}

.video-cup__title span {
  color: var(--accent-color);
}
</style>
