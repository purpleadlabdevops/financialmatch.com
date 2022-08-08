<template>
  <section class="with-video">
    <div class="with-video__container">
      <blocks-video-frame />
    </div>
  </section>
</template>

<script>
export default {
  name: 'WithVideo',
}
</script>

<style lang="scss">
.with-video {
  padding: 40px 0;
  background: $global_bg_color_1;
}
.with-video__container {
  max-width: 800px;
  margin: 0 auto 0;
  padding: 0 20px;
}
</style>
