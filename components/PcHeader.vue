<template>
  <div class="pc-header">
    <h1 class="logo">
      Clipy
    </h1>
    <nav>
      <ul class="header-buttons">
        <li><a href="#">コピー履歴</a></li>
        <li><a href="#">スニペット</a></li>
        <li><a href="#">自由に呼び出し</a></li>
        <li><a href="#">オープンソース</a></li>
      </ul>
    </nav>
    <div class="sns-buttons">
      <social-buttons/>
    </div>
    <div class="download-button">Download</div>
  </div>
</template>


<script>
import SocialButtons from '~/components/social/SocialButtons.vue'

export default {
  components: {
    SocialButtons
  }
}
</script>



<style>
.pc-header {
  display: flex;
  margin-top: 30px;
}

.logo {
  margin: 0 39px;
}

.header-buttons {
  display: flex;
  list-style: none;
  margin: 8px 0;
  padding: 0;
}

.header-buttons li {
  margin: 0 16px;
}

.sns-buttons {
  margin: 8px 0;
}

.download-button {
  margin-top: -10px;
  width: 176px;
  height: 52px;
  line-height: 48px;
  border-radius: 6px;
  border: solid 2px #3d90c9;
  color: #3d90c9;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
}
</style>


