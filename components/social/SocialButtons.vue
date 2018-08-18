<template>
  <div class="social-buttons">
    <git-hub-button class="github"/>
    <facebook-button class="facebook"/>
    <twitter-button class="twitter"/>
    <hatebu-button class="hatebu"/>
  </div>
</template>

<style>
.social-buttons {
  padding: 0 4px;
  display: flex;
}
.facebook {
  margin-left: -4px;
}

.twitter {
  margin: 0 4px;
}


</style>

<script>
import FacebookButton from '~/components/social/Facebook.vue'
import TwitterButton from '~/components/social/Twitter.vue'
import GitHubButton from '~/components/social/GitHub.vue'
import HatebuButton from '~/components/social/Hatebu.vue'

export default {
  components: {
    FacebookButton,
    TwitterButton,
    GitHubButton,
    HatebuButton,
  }
}
</script>

