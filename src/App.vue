<template>
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
      modalIsOpen: false
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

//@media (max-width: 1399.98px)

//@media (max-width: 1199.98px)

//@media (max-width: 991.98px)

//@media (max-width: 767.98px)

//@media (max-width: 575.98px)
</style>
