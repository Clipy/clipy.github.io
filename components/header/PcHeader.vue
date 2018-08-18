<template>
  <div class="pc-header" v-bind:class='{"pc-header-shadow": showShadow}'>
    <clipy-logo/>
    <nav class="pc-header-nav">
      <ul class="header-buttons">
        <li><a href="#history">{{ $t('header.navigation.history') }}</a></li>
        <li><a href="#snippet">{{ $t('header.navigation.snippet') }}</a></li>
        <li><a href="#shortcut">{{ $t('header.navigation.shortcut') }}</a></li>
        <li><a href="#open-source">{{ $t('header.navigation.open-source') }}</a></li>
      </ul>
    </nav>
    <download-button class="pc-header-download-button"/>
  </div>
</template>


<script>
import ClipyLogo from '~/components/ClipyLogo.vue'
import DownloadButton from '~/components/DownloadButton.vue'

export default {
  components: {
    ClipyLogo,
    DownloadButton,
  },
  data: function() {
    return {
      scrollY: 0
    }
  },
  computed: {
    showShadow: function(){
      if (this.scrollY > 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    }
  }
  
}
</script>

<style>
.pc-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: white;
  height: 80px;
  padding: 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1000px;
}

.pc-header-shadow {
  box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.4);
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

.sns-buttons .facebook {
  top: -3px;
}

.pc-header-download-button {
  margin-left: 8px;
}

</style>

