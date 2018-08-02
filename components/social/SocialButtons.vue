<template>
  <div>
    <git-hub-button/>
    <facebook-button/>
    <twitter-button/>
    <hatebu-button/>
  </div>
</template>

<style>
.fb-like {
  top: -3px;
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

