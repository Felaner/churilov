<template>
  <div class="reviews" data-ref="reviews">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 col-lg-12 offset-xl-1">
          <h2 class="title">{{ block.title }}</h2>
          <p class="subtitle">{{ block.subtitle }}</p>
        </div>
      </div>
    </div>
    <app-carousel
      :slides="slides"
    ></app-carousel>
  </div>
</template>

<script>
import AppCarousel from '@/components/AppCarousel'

export default {
  name: 'AppReviews',
  props: ['block'],
  data () {
    return {
      slides: this.block.slides,
      reviews: this.block.reviews
    }
  },
  components: { AppCarousel }
}
</script>

<style scoped lang="sass">
  .reviews
    padding: 70px 0 0

//@media (max-width: 1399.98px)

@media (max-width: 1199.98px)
  .reviews
    padding: 70px 0 0

@media (max-width: 991.98px)
  .reviews
    padding: 50px 0 0

//@media (max-width: 767.98px)

@media (max-width: 575.98px)
  .reviews
    padding: 30px 0 0
    .subtitle
      margin-top: 10px
      margin-bottom: 15px
</style>
