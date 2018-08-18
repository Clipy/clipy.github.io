<template>
  <footer>
    <div class="footer-download">
      <download-button
        class="footer-download-button"
        lightColor
      />
      {{ $t('support-os') }}
    </div>
    <div class="language-selector">

      <span
        v-for="locale in $i18n.locales"
        v-if="locale.code == $i18n.locale"
        :key="locale.code"
      >
      <img src="images/baseline_language_black_18dp.png"/><span class="languages">{{ locale.name }}</span>
      </span>
      <nuxt-link
      v-for="locale in $i18n.locales"
      v-if="locale.code !== $i18n.locale"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"><span class="languages">{{ locale.name }}</span></nuxt-link>
    </div>
    <div class="footer-social">
      <social-buttons/>
    </div>
    <div class="footer-copyright">
      2015-2016 Clipy Project
    </div>
  </footer>
</template>

<script>
import SocialButtons from '~/components/social/SocialButtons.vue'
import DownloadButton from '~/components/DownloadButton.vue'
import BottomArrow from '~/components/BottomArrow.vue'

export default {
  components: {
    SocialButtons,
    DownloadButton,
    BottomArrow,
  }
}
</script>

<style>
footer {
  width: 100%;
  background-color: #f3f6f7;
}

.footer-download {
  background-color: #3d90c9;
  padding: 50px;
  text-align: center;
  color: white;
}

.footer-download-button {
  margin: 0 auto;
  margin-bottom: 10px;
}

.languages {
  display: inline-block;
  margin: 0 4px;
}

.language-selector {
  text-align: center;
  margin: 30px 0;
}

.language-selector img {
  width: 20px;
  height: 20px;
  margin-top: -2px;
  vertical-align: middle;
}

.footer-social {
  width: 100%;
  margin: 30px 0;
}

.footer-social .social-buttons {
  width: 100%;
  display: flex;
  justify-content: center;
}

.footer-copyright {
  width: 100%;
  text-align: center;
  padding-bottom: 14px;
}

</style>
