<template>
  <div class="stock" data-ref="stock">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 col-12 offset-xl-1">
          <h1 class="title">Акция <br class="disp-none d-sm-block">на 1 000 000</h1>
          <p class="subtitle">Дарим страховой сертификат на сумму 1 000 000 руб.</p>
          <app-button
            :event="'modal'"
            :type="'order'"
            :text="'Получить сертификат'"
            :bg-none="true"
          ></app-button>
          <img class="d-lg-block disp-none" :src="require('@/assets/images/stock-img.png')" alt="image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
export default {
  name: 'AppStock',
  components: { AppButton }
}
</script>

<style scoped lang="sass">
  .stock
    background: url("@/assets/images/backgrounds/stock-bg.jpg") no-repeat
    background-size: cover
    padding: 70px 0
    .container
      position: relative
      img
        position: absolute
        top: 30%
        right: 0
        transform: translateY(-50%)
    .title, .subtitle
      color: #ffffff

//@media (max-width: 1399.98px)

@media (max-width: 1199.98px)
  .stock
    .container
      img
        width: 400px
        position: absolute
        top: 30%
        right: 0
        transform: translateY(-50%)

@media (max-width: 991.98px)
  .stock
    padding: 50px 0

//@media (max-width: 767.98px)

@media (max-width: 575.98px)
  .stock
    padding: 30px 0
    .title
      margin-bottom: 10px
    .subtitle
      margin-top: 0
      margin-bottom: 20px
</style>
