<template>
  <div class="excursion">
    <div class="container">
      <div class="excursion-circle">
        <img src="@/assets/images/excursion-circle.png" alt="circle">
      </div>
      <div class="row">
        <div class="col-lg-5 col-md-7 col-sm-8 col-12 offset-lg-1 excursion-wrapper">
          <h2 class="title">Экскурсия на наш объект</h2>
          <p class="subtitle">Если вы хотите посмотреть на качество работы наших мастеров, то мы можем организовать экскурсию на любой наш объект</p>
          <app-button
            :event="'modal'"
            :type="'order'"
            :text="'Записаться'"
            :bg-none="true"
          ></app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
export default {
  name: 'AppExcursion',
  components: { AppButton }
}
</script>

<style scoped lang="sass">
  .excursion
    position: relative
    background: url('@/assets/images/backgrounds/excursion-bg.jpg')
    padding: 387px 0 190px 0
    overflow: hidden
    &-circle
      position: absolute
      top: 55px
      left: -175px
    &-wrapper
      z-index: 1
      position: relative
      .title, .subtitle
        color: #ffffff

@media (max-width: 1199.98px)
  .excursion
    padding: 200px 0 100px 0
    &-circle
      position: absolute
      top: 0
      left: -100px
      img
        width: 800px

@media (max-width: 991.98px)
  .excursion
    padding: 170px 0 50px 0
    &-circle
      img
        width: 650px

  //@media (max-width: 767.98px)

@media (max-width: 575.98px)
  .excursion
    padding: 100px 0 30px 0
    &-circle
      img
        width: 500px
    .subtitle
      margin-bottom: 20px

</style>
