<template>
  <div class="pc-header">
    <clipy-logo/>
    <nav class="pc-header-nav">
      <ul class="header-buttons">
        <li><a href="#">{{ $t('header.navigation.history') }}</a></li>
        <li><a href="#">{{ $t('header.navigation.snippet') }}</a></li>
        <li><a href="#">{{ $t('header.navigation.shortcut') }}</a></li>
        <li><a href="#">{{ $t('header.navigation.open-source') }}</a></li>
      </ul>
    </nav>
    <div class="sns-buttons">
      <social-buttons/>
    </div>
    <download-button class="pc-header-download-button"/>
  </div>
</template>


<script>
import SocialButtons from '~/components/social/SocialButtons.vue'
import ClipyLogo from '~/components/ClipyLogo.vue'
import DownloadButton from '~/components/DownloadButton.vue'

export default {
  components: {
    SocialButtons,
    ClipyLogo,
    DownloadButton
  }
}
</script>

<style>
.pc-header {
  display: flex;
  margin-top: 30px;
  margin-left: 40px;
  margin-right: 40px;
  min-width: 1000px;
}

.pc-header-nav {
  margin-left: 20px;
  flex: 1;
}

.header-buttons {
  display: flex;
  list-style: none;
  margin: 8px 0;
  padding: 0;
}

.header-buttons a {
  text-decoration: none;
  color: #2d2d2d;
}

.header-buttons a:hover {
  opacity: 0.7;
}

.header-buttons li {
  white-space: nowrap;
  margin: 0 16px;
}

.sns-buttons {
  min-width: 210px;
  margin: 8px 0;
  flex-shrink: 2;
}

.pc-header-download-button {
  margin-top: -10px;
  margin-left: 8px;
}

</style>

