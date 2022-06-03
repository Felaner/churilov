<template>
  <div v-if="loadingPercent < 100" class="loader">
    <div class="loader-wrapper">
      <img src="@/assets/images/logo-black.svg" alt="logo">
<!--      <div class="loader-progressbar">-->
<!--        <div class="loader-progressbar__inner" :style="{width: loadingPercent + '%'}"></div>-->
<!--      </div>-->
    </div>
  </div>
  <app-navbar></app-navbar>
  <app-modal v-if="this.modalIsOpen"></app-modal>
  <app-main></app-main>
  <app-calculate></app-calculate>
  <app-about-us></app-about-us>
  <app-facts></app-facts>
  <app-need-price></app-need-price>
  <app-steps></app-steps>
  <app-portfolio></app-portfolio>
  <app-excursion></app-excursion>
  <app-reviews></app-reviews>
  <!--  <app-stock></app-stock>-->
  <app-add-services></app-add-services>
  <app-contacts></app-contacts>
  <app-faq></app-faq>
  <app-form-block></app-form-block>
  <app-footer></app-footer>
</template>

<script>

import AppNavbar from '@/components/AppNavbar'
import AppMain from '@/components/AppMain'
import AppCalculate from '@/components/AppCalculate'
import AppAboutUs from '@/components/AppAboutUs'
import AppFacts from '@/components/AppFacts'
import AppNeedPrice from '@/components/AppNeedPrice'
import AppSteps from '@/components/AppSteps'
import AppPortfolio from '@/components/AppPortfolio'
import AppExcursion from '@/components/AppExcursion'
import AppReviews from '@/components/AppReviews'
// import AppStock from '@/components/AppStock'
import AppAddServices from '@/components/AppAddServices'
import AppContacts from '@/components/AppContacts'
import AppFaq from '@/components/AppFaq'
import AppFormBlock from '@/components/AppFormBlock'
import AppFooter from '@/components/AppFooter'
import AppModal from '@/components/AppModal'

export default {
  name: 'App',
  data () {
    return {
      loadingPercent: 0,
      loadTime: 0,
      interval: null,
      modalIsOpen: false
    }
  },
  created () {
    document.body.style.overflow = 'hidden'
    const perfData = window.performance.timing
    const estimatedTime = Math.abs(perfData.loadEventEnd - perfData.navigationStart)
    this.loadTime = (estimatedTime / 1000) % 60 * 100
    console.log(typeof this.loadTime)
    this.doProgress()
  },
  methods: {
    doProgress () {
      const step = this.loadTime / 100
      this.interval = setInterval(() => {
        this.loadingPercent++
      }, step)
    }
  },
  computed: {
    loaded () {
      return this.loadingPercent + '%'
    }
  },
  watch: {
    loadingPercent (val) {
      if (val >= 100) {
        document.body.style.overflow = 'visible'
        clearInterval(this.interval)
      }
    }
  },
  components: {
    AppModal,
    AppFooter,
    AppFormBlock,
    AppFaq,
    AppContacts,
    AppAddServices,
    AppReviews,
    AppExcursion,
    AppPortfolio,
    AppSteps,
    AppNeedPrice,
    AppNavbar,
    AppMain,
    AppCalculate,
    AppAboutUs,
    AppFacts
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
