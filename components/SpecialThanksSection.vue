<template>
  <section class="special-thanks-section">
    <section class="special-thanks-content">
      <h2 class="special-thanks-title">{{ $t('special-thanks.title') }}</h2>
      <div class="clipmenu-icon-container">
        <img src="/images/clipmenu.png" alt="ClipMenu icon" />
      </div>
      <div class="special-thanks-description"  v-html="$t('special-thanks.description')"></div>
    </section>
    <bottom-arrow/>
  </section>
</template>

<script>

import BottomArrow from '~/components/BottomArrow.vue'

export default {
  components: {
    BottomArrow,
  },
}
</script>

<style>
.special-thanks-section {
  text-align: center;
  padding-bottom: 50px;
}

.special-thanks-content {
  display: flex;
  width: 630px;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin: 80px auto;
}

@media screen and (max-width: 768px) {
  .special-thanks-content {
    width: 320px;
  }
}

.special-thanks-title {
  font-weight: normal;
  font-size: 1.8em;
}

.clipmenu-icon-container {
  width: 146px;
  height: 164px;
  margin: 20px auto;
}

.clipmenu-icon-container img {
  width: 146px;
  height: 164px;
}

.special-thanks-description {
  width: 600px;
  margin-top: 20px;
  margin-bottom: 36px;
  line-height: 1.8em;
}

@media screen and (max-width: 768px) {
  .special-thanks-description {
    width: 300px;
    margin: 20px auto;
    line-height: 1.8em;
  }
}

</style>

