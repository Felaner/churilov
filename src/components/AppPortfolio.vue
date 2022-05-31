<template>
  <div class="portfolio" data-ref="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 col-12 offset-xl-1">
          <h2 class="title">Фото объектов</h2>
          <p class="subtitle">
            Мы легко и надежно проведем вас от первой встречи до сдачи всех работ и торжественного вручения ключей от вашей новой красивой и чистой квартиры. Вам останется только привезти мебель и открыть шампанское ...
          </p>
        </div>
        <div class="col-xl-2 col-lg-3 col-12 d-flex d-lg-block offset-xl-1">
          <div class="portfolio-item">
            <app-reason-card
              :reason-height="'100%'"
              :reason-digit="'140'"
              :reason-text="'Объектов выполнено за 2021г'"
            ></app-reason-card>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-sm-4 col-6" v-for="(project, index) of projects" :key="index" :class="{ 'offset-xl-1': (index + 1) % 5 === 0}">
          <div class="portfolio-item">
            <picture>
              <img :src="project.image" alt="img">
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppReasonCard from '@/components/AppReasonCard'
export default {
  name: 'AppPortfolio',
  components: { AppReasonCard },
  data () {
    return {
      projects: [
        { image: require('../assets/images/portfolio-img.jpg') },
        { image: require('../assets/images/portfolio-img.jpg') },
        { image: require('../assets/images/portfolio-img.jpg') },
        { image: require('../assets/images/portfolio-img.jpg') },
        { image: require('../assets/images/portfolio-img.jpg') },
        { image: require('../assets/images/portfolio-img.jpg') },
        { image: require('../assets/images/portfolio-img.jpg') },
        { image: require('../assets/images/portfolio-img.jpg') },
        { image: require('../assets/images/portfolio-img.jpg') }
      ]
    }
  }
}
</script>

<style scoped lang="sass">
  .portfolio
    padding-bottom: 50px
    &-item
      position: relative
      height: 100%
      padding-bottom: 20px
      img
        object-fit: cover
        height: 100%
        width: 100%
      picture
        display: block
        position: relative
        height: 100%
        cursor: pointer
        &:before
          content: ''
          position: absolute
          top: 0
          right: 0
          bottom: 0
          left: 0
          background: rgba(255, 0, 0, 0.7)
          opacity: 0
          transition: all 0.3s
          z-index: 1
        &:after
          content: url("@/assets/images/icons/eye.svg")
          position: absolute
          top: 50%
          left: 50%
          transform: translate(-50%, -50%)
          opacity: 0
          z-index: 2
        &:hover
          &:before
            opacity: 1
          &:after
            opacity: 1

//@media (max-width: 1399.98px)

//@media (max-width: 1199.98px)

//@media (max-width: 991.98px)

//@media (max-width: 767.98px)

@media (max-width: 575.98px)
  .portfolio
    padding-bottom: 10px
    .subtitle
      margin-bottom: 20px
</style>
