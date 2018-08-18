<template>
  <div class="arrow-container">
    <div class="arrow" :style="styles"/>
  </div>
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
      const color = this.lightColor ? '#eee' : '#979797';
      return {
        '--color': color,
      }
    }
  }
}
</script>

<style>
.arrow-container {
  position: relative;
  display: inline-block;
  padding-left: 20px;
  height: 50px;
}

.arrow {
  --color: #979797;

  content: '';
  width: 21px;
  height: 21px;
  border: 0px;
  border-top: solid 1.5px var(--color);
  border-right: solid 1.5px var(--color);
  transform: rotate(135deg);
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 0;
  margin-top: -4px;
}

</style>
