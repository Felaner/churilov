<template>
  <div class="steps" data-ref="steps">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 col-lg-12 offset-xl-1">
          <h2 class="title">{{ block.title }}</h2>
          <p class="subtitle">{{ block.subtitle }}</p>
        </div>
        <div class="col-xl-5 col-lg-6 offset-xl-1">
          <div class="row">
            <div class="col-12 mb-3">
              <div class="steps-card__small steps-card__small-1">
                <h3 class="steps-card__title">{{ block.step[0].title }}</h3>
                <p class="steps-card__subtitle">{{ block.step[0].subtitle_first }}<br>{{ block.step[0].subtitle_last }}</p>
                <app-button
                  :event="'modal'"
                  :type="'order'"
                  :text="'Заказать'"
                ></app-button>
              </div>
            </div>
            <div class="col-12 mb-3">
              <div class="steps-card__small steps-card__small-2">
                <h3 class="steps-card__title">{{ block.step[1].title }}</h3>
                <p class="steps-card__subtitle">{{ block.step[1].subtitle_first }}<br>{{ block.step[1].subtitle_last }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-lg-6 mb-3">
          <div class="steps-card__large steps-card__large-3">
            <h3 class="steps-card__title">{{ block.step[2].title }}</h3>
            <p class="steps-card__subtitle">{{ block.step[2].subtitle_first }}<br>{{ block.step[2].subtitle_last }}</p>
          </div>
        </div>
        <div class="col-xl-5 col-lg-6 offset-xl-1 mb-sm-0 mb-3">
          <div class="steps-card__large steps-card__large-4">
            <h3 class="steps-card__title">{{ block.step[3].title }}</h3>
            <p class="steps-card__subtitle">{{ block.step[3].subtitle_first }}<br>{{ block.step[3].subtitle_last }}</p>
          </div>
        </div>
        <div class="col-xl-5 col-lg-6">
          <div class="row">
            <div class="col-12 mb-3">
              <div class="steps-card__small steps-card__small-5">
                <h3 class="steps-card__title">{{ block.step[4].title }}</h3>
                <p class="steps-card__subtitle">{{ block.step[4].subtitle_first }}<br>{{ block.step[4].subtitle_last }}</p>
              </div>
            </div>
            <div class="col-12">
              <div class="steps-card__small steps-card__small-6">
                <h3 class="steps-card__title">{{ block.step[5].title }}</h3>
                <p class="steps-card__subtitle">{{ block.step[5].subtitle_first }}<br>{{ block.step[5].subtitle_last }}</p>
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
export default {
  name: 'AppSteps',
  props: ['block'],
  components: { AppButton }
}
</script>

<style scoped lang="sass">
  .steps
    padding: 70px 0
    counter-reset: item
    &-card
      &__small
        display: flex
        flex-direction: column
        justify-content: flex-end
        background: black
        min-height: 305px
        padding: 30px 40px
        border-radius: 4px
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2)
        &-1
          background: url("@/assets/images/backgrounds/step1-bg.jpg")
          background-size: cover
        &-2
          background: url("@/assets/images/backgrounds/step2-bg.jpg")
          background-size: cover
        &-5
          background: url("@/assets/images/backgrounds/step5-bg.jpg")
          background-size: cover
        &-6
          background: url("@/assets/images/backgrounds/step6-bg.jpg")
          background-size: cover
      &__large
        display: flex
        flex-direction: column
        justify-content: flex-end
        background: black
        height: 100%
        padding: 30px 40px
        border-radius: 4px
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2)
        &-3
          background: url("@/assets/images/backgrounds/step3-bg.jpg")
          background-size: cover
        &-4
          background: url("@/assets/images/backgrounds/step4-bg.jpg")
          background-size: cover
      &__title
        position: relative
        padding-left: 20px
        font-family: "Muller Bold"
        font-size: 30px
        text-align: start
        color: #ffffff
        text-transform: uppercase
        &::before
          content: '0' counter(item)
          counter-increment: item
          position: absolute
          top: 50%
          transform: translateY(-50%)
          left: 0
          height: 140px
          font-family: RaysCafeOutlineW00-Regular
          font-size: 130px
          color: rgba(255, 255, 255, 0.5)
      &__subtitle
        font-family: "Muller Regular"
        font-size: 20px
        color: #ffffff
        margin: 40px 0 0

@media (max-width: 1399.98px)
  .steps
    &-card
      &__title
        font-size: 26px
        &::before
          font-size: 110px
          height: 120px

@media (max-width: 1199.98px)
  .steps
    &-card
      &__subtitle
        font-size: 18px

@media (max-width: 991.98px)
  .steps
    padding: 50px 0
    &-card
      &__large
        min-height: 305px

//@media (max-width: 767.98px)

@media (max-width: 575.98px)
  .steps
    padding: 30px 0
    .subtitle
      margin-bottom: 20px
    &-card
      &__small
        padding: 20px
      &__large
        padding: 20px
</style>
