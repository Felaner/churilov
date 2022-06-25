<template>
  <div class="facts" data-ref="facts">
    <div class="container">
      <h2 class="title">{{ block.title_first }}<br>{{ block.title_middle }}<br>{{ block.title_last }}</h2>
    </div>
    <div class="facts-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 disp-none d-lg-block">
            <div class="facts-image">
              <img :src="require('@/assets/images/facts-man.png')" alt="man">
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="facts-right-side">
              <h3 class="title">{{ block.subtitle }}</h3>
              <p class="subtitle">{{ block.text }}</p>
              <ul class="facts-items">
                <li class="facts-item">
                  <div class="facts-item__wrapper">
                    <img :src="require('@/assets/images/icons/facts-icon1.svg')" alt="icon">
                    {{ block.facts[0] }}
                  </div>
                </li>
                <li class="facts-item">
                  <div class="facts-item__wrapper">
                    <img :src="require('@/assets/images/icons/facts-icon2.svg')" alt="icon">
                    {{ block.facts[1] }}
                  </div>
                </li>
                <li class="facts-item">
                  <div class="facts-item__wrapper">
                    <img :src="require('@/assets/images/icons/facts-icon3.svg')" alt="icon">
                    {{ block.facts[2] }}
                  </div>
                </li>
                <li class="facts-item">
                  <div class="facts-item__wrapper">
                    <img :src="require('@/assets/images/icons/facts-icon4.svg')" alt="icon">
                    {{ block.facts[3] }}
                  </div>
                </li>
                <li class="facts-item">
                  <div class="facts-item__wrapper">
                    <img :src="require('@/assets/images/icons/facts-icon5.svg')" alt="icon">
                    {{ block.facts[4] }}
                  </div>
                </li>
              </ul>
              <app-button
                :event="'scroll'"
                :type="'calc'"
                :text="'Заказать расчет'"
                :color="'black'"
              ></app-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="facts-cards-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-xxl-10 offset-xxl-1">
            <div class="row">
              <div class="col-xl-4 col-md-6 d-flex" v-for="(item, index) of facts" :key="index">
                <app-fact-card
                  :fact="item"
                ></app-fact-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
import AppFactCard from '@/components/AppFactCard'
export default {
  name: 'AppFacts',
  props: ['block'],
  data () {
    return {
      facts: [
        { title: this.block.cards[0].title, text: this.block.cards[0].text, image: require('../assets/images/fact1.png') },
        { title: this.block.cards[1].title, text: this.block.cards[1].text, image: require('../assets/images/fact2.png') },
        { title: this.block.cards[2].title, text: this.block.cards[2].text, image: require('../assets/images/fact3.png') },
        { title: this.block.cards[3].title, text: this.block.cards[3].text, image: require('../assets/images/fact4.png') },
        { title: this.block.cards[4].title, text: this.block.cards[4].text, image: require('../assets/images/fact5.png') }
      ]
    }
  },
  components: { AppFactCard, AppButton }
}
</script>

<style scoped lang="sass">
  .facts
    background: url("@/assets/images/backgrounds/facts-bg.svg")
    .title
      padding: 36px 0
      text-align: center
      color: #ffffff
    &-wrapper
      background: url("@/assets/images/backgrounds/facts-wrapper-bg.jpg")
      padding-top: 20px
    &-image
      position: relative
      height: 100%
      img
        position: absolute
        left: -175px
        height: 100%
    &-right-side
      padding: 50px 0 70px
      .title
        margin: 0
        padding: 0
        text-align: left
        color:  #000000
      .subtitle
        margin-top: 10px
        margin-bottom: 0
        color:  #000000
    &-items
      margin: 35px 0
      padding: 0
      list-style: none
    &-item
      font-family: "Muller Regular"
      font-size: 20px
      margin-bottom: 18px
      color: rgba(0, 0, 0, 0.7)
      &:last-child
        margin-bottom: 0
      &__wrapper
        position: relative
        display: flex
        align-items: center
        img
          margin-right: 32px
    &-cards-wrapper
      padding: 70px 0 45px
      background: #ffffff
      overflow: hidden

@media (max-width: 1399.98px)
  .facts
    &-image
      img
        left: -250px
    &-item
      font-size: 18px

@media (max-width: 1199.98px)
  .facts
    &-image
      img
        left: -300px

@media (max-width: 991.98px)
  .facts
    &-wrapper
      padding-top: 0
    &-cards-wrapper
      padding: 50px 0 45px

//@media (max-width: 767.98px)

@media (max-width: 575.98px)
  .facts
    .title
      padding: 30px 0
    &-right-side
      padding: 30px 0
    &-item
      font-size: 14px
    &-cards-wrapper
      padding: 30px 0 5px
</style>
