<template>
  <div>
    <clipy-header/>
    <clipy-top/>
    <feature-section
      v-bind:title="$t('history.title')"
      v-bind:description="$t('history.description')"
      iconImageUrl="/images/icon-history.png"
      mainImageUrl="/images/screenshot-history.png"
      blueColor
    />
    <feature-section
      v-bind:title="$t('snippet.title')"
      v-bind:description="$t('snippet.description')"
      iconImageUrl="/images/icon-snippet.png"
      mainImageUrl="/images/screenshot-snippet.png"
    />
    <feature-section
      v-bind:title="$t('shortcut.title')"
      v-bind:description="$t('shortcut.description')"
      iconImageUrl="/images/icon-shortcut.png"
      mainImageUrl="/images/screenshot-shortcut.png"
      blueColor
    />
    <open-source-section/>
    <special-thanks-section/>
    <section class="container">
      <div>
        {{ $t('welcome') }}
        <nuxt-link
        v-for="locale in $i18n.locales"
        v-if="locale.code !== $i18n.locale"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"><span class="languages">{{ locale.name }}</span></nuxt-link>
        <h1 class="title">
          clipy.github.io
        </h1>
        <h2 class="subtitle">
          Clipy site
        </h2>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green">Documentation</a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey">GitHub</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ClipyHeader from '~/components/header/ClipyHeader.vue'
import ClipyTop from '~/components/ClipyTop.vue'
import FeatureSection from '~/components/FeatureSection.vue'
import OpenSourceSection from '~/components/OpenSourceSection.vue'
import SpecialThanksSection from '~/components/SpecialThanksSection.vue'

export default {
  components: {
    ClipyHeader,
    ClipyTop,
    FeatureSection,
    OpenSourceSection,
    SpecialThanksSection,
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.languages {
  display: inline-block;
  margin: 0 4px;
}
</style>

