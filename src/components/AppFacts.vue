<template>
  <div class="facts" data-ref="facts">
    <div class="container">
      <h2 class="title">5 фактов<br>почему выбирая нас<br>вы выбираете лучшее</h2>
    </div>
    <div class="facts-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-none d-lg-block">
            <div class="facts-image">
              <img src="@/assets/images/facts-man.png" alt="man">
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="facts-right-side">
              <h3 class="title">Наша цель:</h3>
              <p class="subtitle">Сделать для вас ремонт максимально комфортным и приятным процессом</p>
              <ul class="facts-items">
                <li class="facts-item">
                  <div class="facts-item__wrapper">
                    <img src="@/assets/images/icons/facts-icon1.svg" alt="icon">
                    Закупаем и аккуратно доставляем материалы на ваш объект
                  </div>
                </li>
                <li class="facts-item">
                  <div class="facts-item__wrapper">
                    <img src="@/assets/images/icons/facts-icon2.svg" alt="icon">
                    Качественно контролируем все этапы выполнения всех видов работ
                  </div>
                </li>
                <li class="facts-item">
                  <div class="facts-item__wrapper">
                    <img src="@/assets/images/icons/facts-icon3.svg" alt="icon">
                    Предоставляем полную прозрачную финансовую отчетность расходов
                  </div>
                </li>
                <li class="facts-item">
                  <div class="facts-item__wrapper">
                    <img src="@/assets/images/icons/facts-icon4.svg" alt="icon">
                    Делаем ежедневные фото и видео отчеты в WhatsApp или Telegram
                  </div>
                </li>
                <li class="facts-item">
                  <div class="facts-item__wrapper">
                    <img src="@/assets/images/icons/facts-icon5.svg" alt="icon">
                    При завершении работ вывозим весь мусор и делаем уборку помещения
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
  data () {
    return {
      facts: [
        { title: '1. Закупка материалов', text: 'Мы сами закупим, доставим, аккуратно поднимем и сложим материалы на ваш объект. Вам не придется объезжать все базы и магазины в поисках лучшей цены, она у вас будет сразу, потому что мы имеем скидки на объем от всех ведущих поставщиков стройматериалов', image: require('../assets/images/fact1.png') },
        { title: '2. Технический надзор объекта', text: 'Руководитель работ проверяет качество работы на каждом этапе ремонта. Вам не придется ходить за мастерами и постоянно тыкать их носом в косяки и недоделки, тратя на это ваши нервы, силы и уйму вашего драгоценного времени', image: require('../assets/images/fact2.png') },
        { title: '3. Финансовая прозрачность', text: 'Мы предоставляем полную финансовую отчетность по всем расходам на объекте. Вам не придется выпрашивать чеки у мастеров и сверять суммы со сметой на материалы, отчеты и чеки по всем расходам вы получите в ваш мессенджер', image: require('../assets/images/fact3.png') },
        { title: '4. Фото и видео отчеты о работе', text: 'Ежедневно мы будем информировать вас о том, как продвигается ремонт. Вам не придется волноваться о том, что происходит в вашей квартире, доме или помещении, на месте ли мастера и идут ли ремонтные работы', image: require('../assets/images/fact4.png') },
        { title: '5. Уборка помещения', text: 'После всех работ мы вывезем всеь строительный мусор и сделаем уборку помещения. Вам не придется искать компанию, которая вывозит строительный мусор и отмывать все ваши стены и полы от строительной пыли', image: require('../assets/images/fact5.png') }
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
