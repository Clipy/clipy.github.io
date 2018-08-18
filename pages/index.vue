<template>
  <div>
    <clipy-header/>
    <clipy-top/>
    <div class="in-page-anchor">
      <div id="history"></div>
    </div>
    <feature-section
      v-bind:title="$t('history.title')"
      v-bind:description="$t('history.description')"
      iconImageUrl="/images/icon-history.png"
      mainImageUrl="/images/screenshot-history.png"
      blueColor
    />
    <div class="in-page-anchor">
      <div id="snippet"></div>
    </div>
    <feature-section
      v-bind:title="$t('snippet.title')"
      v-bind:description="$t('snippet.description')"
      iconImageUrl="/images/icon-snippet.png"
      mainImageUrl="/images/screenshot-snippet.png"
    />
    <div class="in-page-anchor">
      <div id="shortcut"></div>
    </div>
    <feature-section
      v-bind:title="$t('shortcut.title')"
      v-bind:description="$t('shortcut.description')"
      iconImageUrl="/images/icon-shortcut.png"
      mainImageUrl="/images/screenshot-shortcut.png"
      blueColor
    />
    <div class="in-page-anchor">
      <div id="open-source"></div>
    </div>
    <open-source-section/>
    <special-thanks-section/>
    <clipy-footer/>
  </div>
</template>

<script>
import ClipyHeader from '~/components/header/ClipyHeader.vue'
import ClipyTop from '~/components/ClipyTop.vue'
import FeatureSection from '~/components/FeatureSection.vue'
import OpenSourceSection from '~/components/OpenSourceSection.vue'
import SpecialThanksSection from '~/components/SpecialThanksSection.vue'
import ClipyFooter from '~/components/ClipyFooter.vue'

export default {
  components: {
    ClipyHeader,
    ClipyTop,
    FeatureSection,
    OpenSourceSection,
    SpecialThanksSection,
    ClipyFooter,
  }
}
</script>

<style>
@import url( 'https://fonts.googleapis.com/css?family=Montserrat' );

*{
  font-family: 'ヒラギノ角ゴ Pro W3' , 'Hiragino Kaku Gothic ProN' , 'Montserrat' , sans-serif;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.in-page-anchor {
  position: relative;
}

.in-page-anchor div {
  position: absolute;
  margin-top: -80px;
}

@media screen and (max-width: 768px) {
  .in-page-anchor div {
    margin-top: -59px;
  }
}

</style>

