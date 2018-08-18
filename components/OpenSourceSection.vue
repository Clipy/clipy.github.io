<template>
  <section class="open-source-section">
    <section class="open-source-content">
      <div class="github-icon-container">
        <img src="/images/icon-github.png" alt="icon" />
      </div>
      <h2 class="open-source-title">{{ $t('open-source.title') }}</h2>
      <div class="open-source-description">{{ $t('open-source.description') }}</div>
      <a href="https://github.com/Clipy/Clipy">
        <img class="github-link" src="images/button-github.png" alt="link to github" />
      </a>
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
.open-source-section {
  text-align: center;
  padding-bottom: 50px;
  border-bottom: solid 1px #979797;
}

.open-source-content {
  display: flex;
  flex-wrap: wrap;
  width: 630px;
  justify-content: center;
  margin: 80px auto;
}

@media screen and (max-width: 768px) {
  .open-source-content {
    flex-direction: column;
    align-content: center;
    width: 320px;
  }
}

.github-icon-container {
  width: 36px;
  height: 36px;
  margin: 0 14px;
}

@media screen and (max-width: 768px) {
  .github-icon-container {
    margin: 20px auto;
  }
}


.github-icon-container img {
  width: 36px;
  height: 36px;
}

.open-source-title {
  height: 36px;
  line-height: 36px;
  font-weight: normal;
  font-size: 1.8em;
}

.open-source-description {
  width: 620px;
  margin-top: 20px;
  margin-bottom: 36px;
  line-height: 1.8em;
}

@media screen and (max-width: 768px) {
  .open-source-description {
    width: 300px;
    margin: 20px auto;
    line-height: 1.8em;
  }
}


.github-link {
  width: 260px;
  height: 80px;
}

@media screen and (max-width: 768px) {
  .github-link {
    width: 195px;
    height: 60px;
    margin: 25px auto;
  }
}

.github-screenshot {
  width: 626px;
  height: 386px;
  margin: 0 auto;
}


@media screen and (max-width: 768px) {
  .github-screenshot {
    width: 280px;
    height: 168px;
    margin: 0 auto;
  }
}

</style>
