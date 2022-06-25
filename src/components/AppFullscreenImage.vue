<template>
  <div class="imageModal" @click="this.$store.state.imageName = ''">
    <v-img
      :src="imageFullPath"
      max-width="auto"
      max-height="auto"
    ></v-img>
  </div>
</template>

<script>
export default {
  name: 'AppFullscreenImage',
  computed: {
    imageFullPath () {
      return this.$store.state.imageName
    }
  }
}
</script>

<style scoped lang="sass">
  .imageModal
    position: fixed
    top: 0
    height: 100%
    width: 100%
    z-index: 100
    background: rgba(0, 0, 0, 0.7)
    cursor: zoom-out
    padding: 5vh 5vw
    .v-img
      margin: auto 0
      z-index: 1000
</style>
