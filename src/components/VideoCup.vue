<template>
  <section class="video-cup__view">
    <video class="video-cup__video" autoplay muted loop>
      <source src="../../public/main_video.mp4" type="video/mp4" />
    </video>
    <section class="video-cup__title">
      <h2>HEART COFFEE</h2>
      <p>в сердце с <span>2к17</span></p>
    </section>
  </section>
</template>

<style scoped>
.video-cup__view {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.video-cup__video {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  border: none;
  outline: none;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
}

.video-cup__title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  inset: 0;
  white-space: nowrap;
  gap: 2rem;
}

.video-cup__title h2,
.video-cup__title p {
  font-size: 3.65rem;
  font-family: var(--font-heading);
  color: var(--color-text-light);
}

.video-cup__title span {
  color: var(--accent-color);
}
</style>
