<template>
  <div v-if="loading" class="loader">
    <div class="loader-wrapper">
      <img :src="require('@/assets/images/logo-black.svg')" alt="logo">
    </div>
  </div>
  <router-view :blocks="this.blocks" v-else></router-view>
  <notifications/>
</template>

<script>

import messages from '@/utils/messages'

export default {
  name: 'App',
  data () {
    return {
      blocks: [],
      loading: true
    }
  },
  async mounted () {
    this.blocks = await this.$store.dispatch('fetchBlocks')
    this.$store.state.editData.navbar = this.blocks[0].navbar
    this.$store.state.editData.modal = this.blocks[0].modal
    this.$store.state.editData.main = this.blocks[0].main
    this.$store.state.editData.price = this.blocks[0].price
    this.$store.state.editData.why_we = this.blocks[0].why_we
    this.$store.state.editData.facts = this.blocks[0].facts
    this.$store.state.editData.want = this.blocks[0].want
    this.$store.state.editData.steps = this.blocks[0].steps
    this.$store.state.editData.portfolio = this.blocks[0].portfolio
    this.$store.state.editData.excursion = this.blocks[0].excursion
    this.$store.state.editData.reviews = this.blocks[0].reviews
    this.$store.state.editData.add_services = this.blocks[0].add_services
    this.$store.state.editData.contacts = this.blocks[0].contacts
    this.$store.state.editData.faq = this.blocks[0].faq
    this.$store.state.editData.form_block = this.blocks[0].form_block
    this.$store.state.editData.footer = this.blocks[0].footer
    this.loading = false
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  watch: {
    error (fbError) {
      if (messages[fbError.code]) {
        this.$notify({
          type: 'error',
          text: messages[fbError.code]
        })
      }
    }
  }
}
</script>

<style lang="sass">

#app
  font-family: "Muller Medium", Avenir, Helvetica, Arial, sans-serif

.loader
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  height: 100%
  width: 100%
  background: #ffffff
  z-index: 1000

  &-progressbar
    margin-top: 10px
    position: relative
    border: 1px solid #000000
    height: 10px
    width: 100%
    border-radius: 2px

    &__inner
      height: 100%
      border-radius: 2px
      background: #ff0000

  &-wrapper
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

    p
      font-size: 26px
      text-align: center

    img
      width: 200px
      animation: scale 2s infinite

@keyframes scale
  0%
    transform: scale(.8)

  20%
    transform: scale(1)

  40%
    transform: scale(.8)

  60%
    transform: scale(1)

  80%
    transform: scale(.8)

  100%
    transform: scale(.8)

//@media (max-width: 1399.98px)

//@media (max-width: 1199.98px)

//@media (max-width: 991.98px)

//@media (max-width: 767.98px)

//@media (max-width: 575.98px)
</style>
