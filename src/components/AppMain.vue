<template>
  <div class="main" data-ref="main">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-7 offset-xl-1">
          <p class="main-change d-none d-sm-block">Планируете ремонт
            <transition name="fade" v-for="(item, index) of texts" :key="index">
              <span v-if="item.show">{{ item.text }}</span>
            </transition>
          </p>
          <h1 class="main-title">Сделаем качественный ремонт вашей квартиры, дома или помещения
            в Барнауле <span>от 8000 р/м2</span> точно в срок с гарантией 0 лет</h1>
          <p class="main-subtitle">Все работы по <strong>ГОСТ</strong>у</p>
          <app-button
            :event="'scroll'"
            :type="'estimate'"
            :text="'Получить смету'"
            :subtext="'точная смета за 1 день'"
          ></app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AppButton from '@/components/AppButton'

export default {
  name: 'AppMain',
  data () {
    return {
      texts: [
        { show: true, text: 'в квартире' },
        { show: false, text: 'в своем доме' },
        { show: false, text: 'в магазине или офисе' }
      ],
      textActive: 1
    }
  },
  methods: {
    changeText () {
      setInterval(() => {
        this.texts[this.textActive === 0 ? this.texts.length - 1 : this.textActive - 1].show = false
        setTimeout(() => {
          this.texts[this.textActive].show = true
          this.textActive++
          if (this.textActive >= this.texts.length) {
            this.textActive = 0
          }
        }, 500)
      }, 3000)
    }
  },
  mounted () {
    this.changeText()
  },
  components: {
    AppButton
  }
}
</script>

<style lang="sass">
  .main
    background: url("@/assets/images/backgrounds/bg-main.svg") center no-repeat
    background-size: cover
    padding-bottom: 104px
    &-change
      white-space: nowrap
      margin-top: 200px
      color: #ffffff
      font-family: "Muller Regular"
      font-size: 28px
      transition: all 0.3s
      .fade-enter-active, .fade-leave-active
        transition: opacity .5s
      .fade-leave-to, .fade-enter-from
        opacity: 0
      span
        color: #FF0000
    &-title
      text-align: left
      color: #ffffff
      font-size: 32px
      span
        color: #FF0000
    &-subtitle
      text-align: left
      color: #ffffff
      font-family: "Muller Regular"
      font-size: 24px
      margin-bottom: 0

@media (max-width: 1399.98px)
  .main
    &-change
      font-size: 26px
    &-title
      font-size: 30px
    &-subtitle
      font-size: 22px

@media (max-width: 1199.98px)
  .main
    &-change
      font-size: 24px
    &-title
      font-size: 28px
    &-subtitle
      font-size: 20px
@media (max-width: 991.98px)
  .main
    &-change
      font-size: 22px
    &-title
      font-size: 26px
    &-subtitle
      font-size: 18px

//@media (max-width: 767.98px)

@media (max-width: 575.98px)
  .main
    &-title
      padding-top: 130px
      font-size: 19px
    &-subtitle
      font-size: 16px
      margin-bottom: -30px

</style>
