<template>
  <div class="sp-header">
    <div class="header-item">
      <clipy-logo/>
      <label for="header-menu-on" class="menu">=メニュー</label>
    </div>
    <input type="checkbox" id="header-menu-on"/>
    <ul class="header-menu">
      <li><a href="#">{{ $t('header.navigation.history') }}</a></li>
      <li><a href="#">{{ $t('header.navigation.snippet') }}</a></li>
      <li><a href="#">{{ $t('header.navigation.shortcut') }}</a></li>
      <li><a href="#">{{ $t('header.navigation.open-source') }}</a></li>
      <li class="social-container"><social-buttons class="social-buttons"/></li>
    </ul>
  </div>
</template>

<style>
.sp-header {
  padding: 15px 20px;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
}

.header-item {
  display: flex;
  justify-content: space-between;
}

.menu {
  width: 93px;
  height: 30px;
  border-radius: 3px;
  border: solid 1px #3d90c9;
  user-select: none;
}

.header-menu {
  background-color: #fff;
  position: absolute;
  top: 68px;
  left: 0;
  height: 0;
  padding: 0 20px;
  overflow: hidden;
  width: 100%;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.1);
}

.header-menu li {
  list-style-type: none;
  border-bottom: solid 1px #eceaea;
  padding: 10px;
}

.header-menu li:last-child {
  border-bottom: none;
}

.social-container {
  margin: 25px;
  padding: 0 20px;
}
.social-buttons {
  text-align: center;
  margin: 0 auto;
  display: block;
}

.social-container .facebook {
  top: -3px;
}

.header-menu li a {
  display: block;
  border-radius: 4px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #222;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(61, 144, 201, 0.7);
}

.header-menu li a:hover {
  color: #eee;
  background-color: #3d90c9;
}



input[type="checkbox"]#header-menu-on {
  display: none;
}

input[type="checkbox"]#header-menu-on + .header-menu {
  display: none;
}

input[type="checkbox"]#header-menu-on:checked + .header-menu {
  display: block;
  height: auto;
}
</style>

<script>
import ClipyLogo from '~/components/ClipyLogo.vue'
import SocialButtons from '~/components/social/SocialButtons.vue'

export default {
  components: {
    ClipyLogo,
    SocialButtons
  }
}
</script>

