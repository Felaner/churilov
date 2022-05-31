<template>
  <div class="container second-section" data-ref="calc">
    <div class="col-xxl-7 col-xl-8 col-lg-10 col-12 offset-xl-1">
      <h2 class="title">Расчет стоимости</h2>
      <p class="subtitle">Получите полный расчет стоимости и сроков ремонта Вашей квартиры, дома или помещения</p>
    </div>
    <div class="col-xl-10 col-12 offset-xl-1">
      <div class="second-section__calc-wrapper">
        <div class="row m-0">
          <div class="col-lg-9 col-12 second-section__calc-wrapper__left-side p-0">
            <app-calc></app-calc>
          </div>
          <div class="col-lg-3 col-12 p-0 second-section__calc-wrapper__right-side">
            <div class="right-side__wrapper">
              <div class="divider d-none d-lg-block"></div>
              <p class="right-side__text">Наш опыт в ремонтных работах показывает, что есть много факторов, которые влияют на конечную стоимость работы. Чтобы мы могли более точно рассчитать предварительную смету вашего объекта, нам необходимо задать вам несколько вопросов.</p>
              <div class="divider"></div>
              <p class="right-side__subtext">Если у вас нет времени заполнять форму, вы можете просто позвонить нам или заказать расчет:</p>
              <app-button
                :event="'modal'"
                :type="'calc'"
                :text="'Заказать расчет'"
                :color="'black'"
              ></app-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AppButton from '@/components/AppButton'
import AppCalc from '@/components/AppCalc'

export default {
  name: 'AppCalculate',
  components: { AppCalc, AppButton }
}
</script>

<style scoped lang="sass">
  .second-section
    padding: 70px 0
    &__calc-wrapper
      background: rgba(96, 96, 96, 0.2)
      border: 1px solid rgba(0, 0, 0, 0.6)
      border-radius: 4px
      padding: 5px
      &__right-side
        position: relative
        .right-side
          &__wrapper
            position: absolute
            top: 50%
            transform: translateY(-50%)
            padding: 0 25px
          &__text
            margin-top: 0
            margin-bottom: 10px
            font-family: "Muller Regular"
            font-size: 18px
            line-height: 25px
          &__subtext
            font-family: "Muller Bold"
            font-size: 16px
@media (max-width: 1399.98px)
  .second-section
    &__calc-wrapper
      &__right-side
        .right-side
          &__text
            font-size: 16px
            line-height: unset

//@media (max-width: 1199.98px)

@media (max-width: 991.98px)
  .second-section
    padding: 50px 0
    &__calc-wrapper
      &__right-side
        position: relative
        .right-side
          &__wrapper
            position: relative
            margin-top: 15px
            padding-bottom: 20px

  //@media (max-width: 767.98px)

@media (max-width: 575.98px)
  .second-section
    padding: 30px 20px
    .title
      margin-bottom: 10px
    .subtitle
      margin-top: 0
      margin-bottom: 20px
      line-height: 23px
    &__calc-wrapper
      padding: 3px
      &__right-side
        .right-side
          &__wrapper
            position: relative
            margin-top: 15px
            padding-bottom: 20px
</style>
