<template>
  <header class="header">
    <div class="pc-header-container">
      <pc-header/>
    </div>
    <div class="sp-header-container">
      <sp-header/>
    </div>
  </header>
</template>

<script>
import PcHeader from './PcHeader.vue'
import SpHeader from './SpHeader.vue'

export default {
  components: {
    PcHeader,
    SpHeader
  }
}
</script>

<style>
@media screen and (max-width: 768px) {
  .pc-header-container {
    display: none;
  }
}
@media screen and (min-width: 769px) {
  .sp-header-container {
    display: none;
  }
}
</style>

