<template>
  <div class="need-price" data-ref="price">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-7 offset-xl-1">
          <h2 class="title">{{ block.title }}</h2>
          <p class="subtitle">{{ block.subtitle_one }}</p>
          <p class="subtitle">{{ block.subtitle_two }}</p>
          <app-button
            :event="'scroll'"
            :type="'estimate'"
            :text="block.button"
            :subtext="block.button_small"
          ></app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
export default {
  name: 'AppNeedPrice',
  props: ['block'],
  components: { AppButton }
}
</script>

<style scoped lang="sass">
  .need-price
    padding: 90px 0
    background: url("@/assets/images/backgrounds/need-price-bg.jpg")
    .title
      margin-bottom: 20px
      color: #ffffff
    .subtitle
      margin: 10px 0
      color: #ffffff

  //@media (max-width: 1399.98px)

@media (max-width: 1199.98px)
  .need-price
    padding: 70px 0

@media (max-width: 991.98px)
  .need-price
    padding: 50px 0
    background: url("@/assets/images/backgrounds/need-price-bg.jpg")
    .subtitle
      margin-top: 40px
      margin-bottom: -30px

  //@media (max-width: 767.98px)

@media (max-width: 575.98px)
  .need-price
    padding: 30px 0
    background: url("@/assets/images/backgrounds/need-price-bg.jpg")
    .title
      margin-bottom: -20px
</style>
