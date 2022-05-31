<template>
  <Carousel :itemsToShow="itemsToShow" :wrapAround="true">
    <Slide v-for="slide in slides" :key="slide">
      <div class="carousel__item">
        <div class="carousel__item-contacts">
          <div class="carousel__item-contacts__avatar">
            <img :src="slide.avatar" alt="avatar">
          </div>
          <div class="carousel__item-contacts__wrapper">
            <div class="carousel__item-contacts__name">{{ slide.name }}</div>
            <div class="carousel__item-contacts__address">{{ slide.address }}</div>
          </div>
        </div>
        <p class="carousel__item-review">{{ slide.text }}</p>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
      <Navigation />
    </template>

  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'AppCarousel',
  props: ['slides'],
  computed: {
    itemsToShow () {
      let size = 0
      if (window.innerWidth > 1399) {
        size = 3.55
      } else if (window.innerWidth > 1199) {
        size = 3.30
      } else if (window.innerWidth > 991) {
        size = 2.9
      } else if (window.innerWidth > 767) {
        size = 2.2
      } else if (window.innerWidth > 575) {
        size = 1.8
      } else {
        size = 1.1
      }
      return size
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  }
})
</script>

<style scoped lang="sass">

.carousel__item
  margin: 30px 20px
  padding: 40px 30px
  border: 1px solid #000000
  border-radius: 4px
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2)
  &-contacts
    display: flex
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
  &-review
    text-align: left
    font-family: "Muller Regular"
    font-size: 20px

.carousel__pagination
  padding: 0

.carousel__slide > .carousel__item
  transform: scale(1)
  opacity: 0.5
  transition: 0.5s

.carousel__slide--visible > .carousel__item
  opacity: 1
  transform: rotateY(0)

.carousel__slide--next > .carousel__item
  transform: scale(0.9) translate(-10px)

.carousel__slide--prev > .carousel__item
  transform: scale(0.9) translate(10px)

.carousel__slide--active > .carousel__item
  transform: scale(1.1)

//@media (max-width: 1399.98px)

@media (max-width: 1199.98px)
  .carousel__item
    &-contacts
      &__name
        font-size: 18px
      &__address
        font-size: 12px
    &-review
      font-size: 18px

//@media (max-width: 991.98px)

//@media (max-width: 767.98px)

@media (max-width: 575.98px)
  .carousel__item
    &-contacts
      &__avatar
        img
          width: 50px
      &__name
        font-size: 16px
      &__address
        font-size: 12px
    &-review
      font-size: 16px

</style>
