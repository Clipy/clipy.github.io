<template>
  <div class="download-button" :style="styles">{{ $t('button.download.title') }}</div>
</template>


<script>
export default {
  props: {
    lightColor: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    styles() {
      const color = this.lightColor ? '#fff' : '#3d90c9';
      return {
        '--color': color,
      }
    }
  }
}
</script>

<style>
.download-button {
  width: 176px;
  height: 52px;
  line-height: 48px;
  border-radius: 6px;
  border: solid 2px var(--color);
  color: var(--color);
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  user-select: none;
  cursor: pointer;
}
</style>
