<template>
  <div class="add-services" data-ref="services">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 col-lg-12 offset-xl-1">
          <h2 class="title">{{ block.title }}</h2>
          <p class="subtitle">{{ block.subtitle }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-5 col-md-6 offset-xl-1">
          <div class="add-services-card">
            <h3 class="add-services-card__title">{{ block.cards[0].title_first }}<br>{{ block.cards[0].title_last }}</h3>
            <img :src="require(`../assets/images/${ block.cards[0].image }`)" alt="design">
          </div>
        </div>
        <div class="col-xl-5 col-md-6">
          <div class="add-services-card">
            <h3 class="add-services-card__title">{{ block.cards[1].title_first }}<br>{{ block.cards[1].title_last }}</h3>
            <img :src="require(`../assets/images/${ block.cards[1].image }`)" alt="build">
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 offset-xl-1">
          <div class="add-services-card">
            <h3 class="add-services-card__title">{{ block.cards[2].title_first }}<br>{{ block.cards[2].title_last }}</h3>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-6">
          <div class="add-services-card">
            <h3 class="add-services-card__title">{{ block.cards[3].title_first }}<br>{{ block.cards[3].title_last }}</h3>
            <img :src="require(`../assets/images/${ block.cards[3].image }`)" alt="floor">
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="add-services-card">
            <h3 class="add-services-card__title">{{ block.cards[4].title_first }}<br>{{ block.cards[4].title_last }}</h3>
            <img class="add-services-card__last-image" :src="require(`../assets/images/${ block.cards[4].image }`)" alt="ceiling">
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-xl-5 col-lg-6 offset-xl-1 d-flex flex-column justify-center">
          <h2 class="title">{{ block.second_title }}</h2>
          <p class="subtitle mb-0">{{ block.second_subtitle }}</p>
          <app-button
            :event="'modal'"
            :type="'estimate'"
            :text="block.button"
            :subtext="block.button_small"
            :color="'#FF0000'"
          ></app-button>
        </div>
        <div class="col-xl-5 col-lg-6 disp-none d-lg-block">
          <div class="add-services-img">
            <img :src="require(`../assets/images/${ block.image }`)" alt="img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
export default {
  name: 'AppAddServices',
  props: ['block'],
  components: { AppButton }
}
</script>

<style scoped lang="sass">
  .add-services
    padding: 70px 0
    &-card
      position: relative
      overflow: hidden
      height: 350px
      margin-bottom: 20px
      padding: 40px
      border-radius: 4px
      background: linear-gradient(110.26deg, rgba(147, 146, 146, 0.3) 0%, rgba(47, 47, 47, 0.3) 62.81%), #FFFFFF
      box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.14)
      &__title
        margin: 0
        font-family: "Muller Bold"
        font-size: 24px
      img
        position: absolute
        right: 0
        bottom: 0
    &-img
      display: flex
      justify-content: flex-end

@media (max-width: 1399.98px)
  .add-services
    &-card
      &__title
        font-size: 22px
      img
        right: -21px
        bottom: -16px
        transform: scale(0.9)

  //@media (max-width: 1199.98px)

@media (max-width: 991.98px)
  .add-services
    padding: 50px 0
    &-card
      &__title
        font-size: 22px
      img
        right: -66px
        bottom: -47px
        transform: scale(0.7)
      .add-services-card__last-image
          right: -21px
          bottom: -16px
          transform: scale(0.9)

@media (max-width: 767.98px)
  .add-services
    padding: 50px 0
    &-card
      &__title
        font-size: 22px
      img
        right: 0
        bottom: -2px
        transform: scale(1)
      .add-services-card__last-image
        right: 0
        bottom: 0
        transform: scale(1.2)
    .row
      &:last-child
        p.subtitle
          margin-bottom: -40px !important
@media (max-width: 575.98px)
  .add-services
    padding: 30px 0
    .title
      margin-bottom: 10px
    .subtitle
      margin-top: 0
      margin-bottom: 20px
    &-card
      height: 300px
      &__title
        font-size: 22px
      img
        right: -66px
        bottom: -47px
        transform: scale(0.7)
      .add-services-card__last-image
        right: -21px
        bottom: -16px
        transform: scale(0.9)
    .row
      &:last-child
        p.subtitle
          margin-bottom: -40px !important
</style>
