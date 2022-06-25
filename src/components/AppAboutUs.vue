<template>
  <div class="about" data-ref="about">
    <div class="container">
      <h2 class="title">{{ block.title_first }}<br>{{ block.title_last}}</h2>
    </div>
    <div class="about-wrapper">
      <div class="container">
        <div class="row m-0">
          <div class="col-xl-4 col-lg-5 col-12 offset-xl-1 p-0">
            <div class="row m-0 justify-between">
              <div
                class="col-lg-6 col-md-3 col-6 p-1"
                v-for="(reason, index) in reasons"
                :key="index"
              >
                <app-reason-card
                  :reasonDigit="reason.digit"
                  :reasonText="reason.text"
                ></app-reason-card>
              </div>
            </div>
          </div>
          <div class="col-xl-5 col-lg-6 offset-lg-1 p-1 position-relative">
            <div class="about-header">
              <img :src="require('@/assets/images/logo-black.svg')" alt="logo">
              <p>{{ block.header_text_first }}<br>{{ block.header_text_last }}</p>
            </div>
            <h3 class="title">{{ block.subtitle }}</h3>
            <p class="subtitle">{{ block.text }}</p>
            <app-button
              class="about-button"
              :event="'scroll'"
              :text="'Заказать расчет'"
              :type="'calc'"
              :color="'black'"
            ></app-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppReasonCard from '@/components/AppReasonCard'
import AppButton from '@/components/AppButton'
export default {
  name: 'AppAboutUs',
  props: ['block'],
  components: { AppButton, AppReasonCard },
  data () {
    return {
      reasons: this.block.card
    }
  }
}
</script>

<style scoped lang="sass">
  .about
    background: url("@/assets/images/backgrounds/about-bg.svg")
    .title
      padding: 54px 0
      text-align: center
      color: #ffffff
    &-wrapper
      padding: 100px 0
      background: #ffffff
      .title
        color: #000
        text-align: left
        padding: 25px 0 5px
      .subtitle
        margin-top: 0
        margin-bottom: 10px
    &-header
      position: relative
      display: flex
      img
        margin-right: 20px
      p
        font-family: "Muller Regular"
        font-size: 18px
        line-height: 140%
        margin: 0

@media (max-width: 1399.98px)
  .about
    &-header
      p
        font-size: 16px
    .subtitle
      margin-bottom: 30px

@media (max-width: 1199.98px)
  .about
    &-wrapper
      padding: 50px 0
    &-header
      margin-top: 15px
      img
        margin-right: 20px
      p
        font-family: "Muller Regular"
        font-size: 18px
        line-height: 140%
        margin: 0

@media (max-width: 991.98px)
  .about
    &-header
      display: none
  //@media (max-width: 767.98px)

@media (max-width: 575.98px)
  .about
    .title
      padding: 30px 0
    &-wrapper
      padding: 30px 0
      .title
        padding: 25px 0 10px
      .subtitle
        margin-bottom: 15px
        font-size: 16px
</style>
