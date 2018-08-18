<template>
  <section class="top">
    <section class="top-content">
      <img class="clipy-icon" src="~/assets/clipy.png" alt="Clipy Icon" />
      <div class="top-description-container">
        <clipy-logo class="top-logo"/>
        <div class="top-description" v-html="$t('top.description')"/>
        <download-button class="top-download-button"/>
        <div class="top-support-os">
          {{ $t('support-os') }}
        </div>
      </div>
    </section>
    <bottom-arrow/>
  </section>
</template>

<style>

.top {
  margin: 20px auto;
  width: 1000px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .top {
    width: 100%;
  }
}

.top-content {
  display: flex;
  margin: 60px auto;
}

@media screen and (max-width: 768px) {
  .top-content {
    width: 100%;
    flex-direction: column;
    align-content: center;
    align-items: center;
    margin-bottom: 0px;
  }
}

.top img {
  margin-right: 100px;
}

@media screen and (max-width: 768px) {
  .top img {
    width: 139px;
    height: 184px;
    margin-top: -10px;
    margin-right: 0;
  }
}

.top-logo {
  font-size: 4em;
  margin-right: .1em;
}

@media screen and (max-width: 768px) {
  .top-logo {
    margin-right: 0;
    margin-top: 20px;
    margin-bottom: -10px;
  }
}

.clipy-icon {
  width: 342px;
  height: 456px;
  filter: drop-shadow(-26px 27px 7px rgba(20, 35, 53, 0.31));
}

@media screen and (max-width: 768px) {
  .clipy-icon {
    filter: none;
  }
}

.top-description-container {
  display: inline-flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .top-description-container {
    flex-direction: column;
    text-align: center;
    font-size: .8em;
  }
}

.top-description {
  margin: 40px 0;
  font-size: 2em;
  line-height: 1.5em;
  width: 380px;
}

@media screen and (max-width: 768px) {
  .top-description {
    width: 100%;
  }
}

.top-download-button {
  width: 188px;
  height: 56px;
  line-height: 56px;
}

@media screen and (max-width: 768px) {
  .top-download-button {
    display: none;
  }
}

.top-support-os {
  margin: 20px;
  font-size: .9em;
  color: #444;
}


@media screen and (max-width: 768px) {
  .top-support-os {
    margin: 0;
    margin-top: -8px;
  }
}

</style>


<script>
import ClipyLogo from '~/components/ClipyLogo.vue'
import DownloadButton from '~/components/DownloadButton.vue'
import BottomArrow from '~/components/BottomArrow.vue'

export default {
  components: {
    ClipyLogo,
    DownloadButton,
    BottomArrow,
  }
}
</script>

