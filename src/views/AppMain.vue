<template>
  <app-navbar :block="this.navbar"></app-navbar>
  <app-modal :block="this.modal" v-if="this.$store.state.modalIsOpen"></app-modal>
  <app-main-screen :block="this.main"></app-main-screen>
  <app-calculate :block="this.price"></app-calculate>
  <app-about-us :block="this.why_we"></app-about-us>
  <app-facts :block="this.facts"></app-facts>
  <app-need-price :block="this.want"></app-need-price>
  <app-steps :block="this.steps"></app-steps>
  <app-portfolio :block="this.portfolio"></app-portfolio>
  <app-fullscreen-image v-if="imageOpen"></app-fullscreen-image>
  <app-excursion :block="this.excursion"></app-excursion>
  <app-reviews :block="this.reviews"></app-reviews>
  <!--  <app-stock></app-stock>-->
  <app-add-services :block="this.add_services"></app-add-services>
  <app-contacts :block="this.contacts"></app-contacts>
  <app-faq :block="this.faq"></app-faq>
  <app-form-block :block="this.form_block"></app-form-block>
  <app-footer :block="this.footer"></app-footer>
</template>

<script>

import AppNavbar from '@/components/AppNavbar'
import AppMainScreen from '@/components/AppMainScreen'
import AppCalculate from '@/components/AppCalculate'
import AppAboutUs from '@/components/AppAboutUs'
import AppFacts from '@/components/AppFacts'
import AppNeedPrice from '@/components/AppNeedPrice'
import AppSteps from '@/components/AppSteps'
import AppPortfolio from '@/components/AppPortfolio'
import AppFullscreenImage from '@/components/AppFullscreenImage'
import AppExcursion from '@/components/AppExcursion'
import AppReviews from '@/components/AppReviews'
import AppAddServices from '@/components/AppAddServices'
import AppContacts from '@/components/AppContacts'
import AppFaq from '@/components/AppFaq'
import AppFormBlock from '@/components/AppFormBlock'
import AppFooter from '@/components/AppFooter'
import AppModal from '@/components/AppModal'

export default {
  name: 'AppMain',
  props: ['blocks'],
  data () {
    return {
      navbar: '',
      modal: '',
      main: '',
      price: '',
      why_we: '',
      facts: '',
      want: '',
      steps: '',
      portfolio: '',
      excursion: '',
      reviews: '',
      add_services: '',
      contacts: '',
      faq: '',
      form_block: '',
      footer: ''
    }
  },
  async beforeMount () {
    this.navbar = this.blocks[0].navbar
    this.modal = this.blocks[0].modal
    this.main = this.blocks[0].main
    this.price = this.blocks[0].price
    this.why_we = this.blocks[0].why_we
    this.facts = this.blocks[0].facts
    this.want = this.blocks[0].want
    this.steps = this.blocks[0].steps
    this.portfolio = this.blocks[0].portfolio
    this.excursion = this.blocks[0].excursion
    this.reviews = this.blocks[0].reviews
    this.add_services = this.blocks[0].add_services
    this.contacts = this.blocks[0].contacts
    this.faq = this.blocks[0].faq
    this.form_block = this.blocks[0].form_block
    this.footer = this.blocks[0].footer
  },
  computed: {
    imageOpen () {
      return !!this.$store.state.imageName
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
    AppFullscreenImage,
    AppSteps,
    AppNeedPrice,
    AppNavbar,
    AppMainScreen,
    AppCalculate,
    AppAboutUs,
    AppFacts
  }
}
</script>

<style scoped>

</style>
