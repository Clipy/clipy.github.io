<template>
  <section class="feature" :style="styles">
    <section class="feature-content" :style="styles">
      <div class="feature-icon-container">
        <div class="feature-icon" :style="styles">
          <img :src="iconImageUrl" alt="icon" />
        </div>
      </div>
      <h2 class="feature-title" :style="styles">{{ title }}</h2>
      <div class="feature-description" :style="styles">{{ description }}</div>
      <img class="screenshot" :src="mainImageUrl" alt="screenshot" />
    </section>
    <bottom-arrow
      v-bind:lightColor="blueColor"
    />
  </section>
</template>

<script>

import BottomArrow from '~/components/BottomArrow.vue'

export default {
  components: {
    BottomArrow,
  },
  props: {
    blueColor: {
      type: Boolean,
      default: false,
    },
    iconImageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    mainImageUrl: {
      type: String,
      required: true
    },
  },
  computed: {
    styles() {
      const color = this.blueColor ? '#fff' : '#222';
      const backgroundColor = this.blueColor ? '#3d90c9' : '#fff';
      const iconBackgroundColor = this.blueColor ? '#fff' : '#3d90c9';
      const wrap = this.blueColor ? "wrap" : "wrap-reverse";
      return {
        '--color': color,
        '--background-color': backgroundColor,
        '--flex-wrap': wrap,
        '--icon-background-color': iconBackgroundColor,
      }
    }
  }
}
</script>

<style>

.feature {
  background-color: var(--background-color);
  text-align: center;
  padding: 20px;
}

.feature-content {
  display: flex;
  width: 1000px;
  margin: 120px auto;
  flex-direction: column;
  flex-wrap: var(--flex-wrap);
  height: 400px;
}

@media screen and (max-width: 768px) {
  .feature-content {
    width: 100%;
    height: auto;
    align-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 35px;
  }
}

.feature-icon {
  width: 66px;
  height: 66px;
  border-radius: 10px;
  background-color: var(--icon-background-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

.feature-icon-container {
  width: 320px;
}

.feature-icon img {
  width: 42px;
  height: 42px;
}


@media screen and (max-width: 768px) {
  .feature-icon-container {
    text-align: center;
  }
  .feature-icon {
    margin: 0 auto;
  }
}

.feature-title {
  width: 320px;
  font-size: 2em;
  font-weight: normal;
  margin: 12px 0;
  color: var(--color);
  text-align: left;
  line-height: 1.5em;
}

@media screen and (max-width: 768px) {
  .feature-title {
    width: 300px;
    text-align: center;
    margin: 20px 0;
    font-size: 1.8em;
  }
}

.feature-description {
  width: 320px;
  color: var(--color);
  text-align: left;
  line-height: 1.8em;
}

@media screen and (max-width: 768px) {
  .feature-description {
    width: 300px;
    text-align: center;
    margin: 25px 0;
    font-size: 0.9em;
    line-height: 2em;
  }
}


.screenshot {
  width: 626px;
  height: 386px;
  margin: 0 54px;
}

@media screen and (max-width: 768px) {
  .screenshot {
    width: 300px;
    height: auto;
    margin-bottom: 0;
  }
}

</style>
