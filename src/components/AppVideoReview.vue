<template>
  <div class="video-review">
    <img class="video-review__bg" :src="review.background" alt="">
    <div class="video-review-contacts">
      <div class="video-review-contacts__avatar">
        <img :src="review.avatar" alt="avatar">
      </div>
      <div class="video-review-contacts__wrapper">
        <div class="video-review-contacts__name">{{ review.name }}</div>
        <div class="video-review-contacts__address">{{ review.address }}</div>
      </div>
    </div>
    <div class="video-review__btn">
      <app-button
        :type="'order'"
        :text="'Видео отзыв'"
      ></app-button>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
export default {
  name: 'AppVideoReview',
  components: { AppButton },
  props: ['review']
}
</script>

<style scoped lang="sass">
  .video-review
    position: relative
    height: 305px
    margin: 10px
    padding: 50px
    border-radius: 4px
    transition: all .3s
    &__bg
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
    &-contacts
      display: flex
      color: #ffffff
      transition: all .3s
      &__wrapper
        display: flex
        flex-direction: column
        justify-content: center
        margin-left: 10px
      &__name
        text-align: left
        font-family: "Muller Bold"
        font-size: 20px
      &__address
        text-align: left
        font-family: "Muller Regular"
        font-size: 14px
    &__btn
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      opacity: 0
      transition: all .3s
    &:hover
      box-shadow: 8px 8px #f00
      .video-review-contacts
        opacity: 0
      .video-review__btn
        opacity: 1

//@media (max-width: 1399.98px)

@media (max-width: 1199.98px)
  .video-review
    padding: 30px

@media (max-width: 991.98px)
  .video-review
    height: 250px

//@media (max-width: 767.98px)

@media (max-width: 575.98px)
  .video-review
    height: 200px
    padding: 25px
    &-contacts
      &__avatar
        img
          width: 50px
      &__name
        font-size: 16px
    &:hover
      box-shadow: 8px 8px #f00
      .video-review-contacts
        opacity: 1
      .video-review__btn
        opacity: 0
</style>
