<template>
  <div class="reviews" data-ref="reviews">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 col-lg-12 offset-xl-1">
          <h2 class="title">Отзывы</h2>
          <p class="subtitle">наших реальных клиентов</p>
        </div>
      </div>
    </div>
    <app-carousel
      :slides="slides"
    ></app-carousel>
    <div class="container">
      <div class="row">
        <div class="col-xl-10 col-lg-12 offset-xl-1">
          <div class="row">
            <div class="col-md-6" v-for="(review, index) of reviews" :key="index">
              <app-video-review
                :review="review"
              ></app-video-review>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppCarousel from '@/components/AppCarousel'
import AppVideoReview from '@/components/AppVideoReview'
export default {
  name: 'AppReviews',
  data () {
    return {
      slides: [
        { avatar: require('../assets/images/avatar.png'), name: 'Василий Козлов', address: 'г. Барнаул., ул. Малахова., д.1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.' },
        { avatar: require('../assets/images/avatar.png'), name: 'Петр Козлов', address: 'г. Барнаул., ул. Малахова., д.1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.' },
        { avatar: require('../assets/images/avatar.png'), name: 'Иван Козлов', address: 'г. Барнаул., ул. Малахова., д.1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.' },
        { avatar: require('../assets/images/avatar.png'), name: 'Григорий Козлов', address: 'г. Барнаул., ул. Малахова., д.1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.' },
        { avatar: require('../assets/images/avatar.png'), name: 'Инокентий Козлов', address: 'г. Барнаул., ул. Малахова., д.1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.' },
        { avatar: require('../assets/images/avatar.png'), name: 'Валентин Козлов', address: 'г. Барнаул., ул. Малахова., д.1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.' },
        { avatar: require('../assets/images/avatar.png'), name: 'Георгий Козлов', address: 'г. Барнаул., ул. Малахова., д.1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.' },
        { avatar: require('../assets/images/avatar.png'), name: 'Владислав Козлов', address: 'г. Барнаул., ул. Малахова., д.1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.' },
        { avatar: require('../assets/images/avatar.png'), name: 'Феофан Козлов', address: 'г. Барнаул., ул. Малахова., д.1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.' },
        { avatar: require('../assets/images/avatar.png'), name: 'Александр Козлов', address: 'г. Барнаул., ул. Малахова., д.1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.' }
      ],
      reviews: [
        { background: require('../assets/images/backgrounds/video-review-bg.jpg'), avatar: require('../assets/images/avatar.png'), name: 'Василий Козлов', address: 'г. Барнаул., ул. Малахова., д.1' },
        { background: require('../assets/images/backgrounds/video-review-bg.jpg'), avatar: require('../assets/images/avatar.png'), name: 'Василий Козлов', address: 'г. Барнаул., ул. Малахова., д.1' },
        { background: require('../assets/images/backgrounds/video-review-bg.jpg'), avatar: require('../assets/images/avatar.png'), name: 'Василий Козлов', address: 'г. Барнаул., ул. Малахова., д.1' },
        { background: require('../assets/images/backgrounds/video-review-bg.jpg'), avatar: require('../assets/images/avatar.png'), name: 'Василий Козлов', address: 'г. Барнаул., ул. Малахова., д.1' }
      ]
    }
  },
  components: { AppVideoReview, AppCarousel }
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
