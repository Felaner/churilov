<template>
  <div class="contacts" data-ref="contacts">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-7 offset-xl-1">
          <h2 class="title">{{ block.title }}</h2>
          <p class="contacts-name">{{ block.name }}</p>
          <p class="contacts-address">
            {{ block.post }} <span>{{ block.company_name }}</span><br>{{ block.address }}
          </p>
          <a href="tel:+79237249700" class="contacts-phone">{{ block.phone }}</a>
          <p class="contacts-add">{{ block.subtitle }}</p>
          <div class="contacts-buttons">
            <a :href="`https://api.whatsapp.com/send/?phone=${ this.block.whatsapp }&text&app_absent=0`" target="_blank">
              <img :src="require('@/assets/images/icons/wa.svg')" alt="whatsapp">
              Есть вопросы?<br>пишите в WhatsApp
            </a>
            <a :href="this.block.instagram" target="_blank">
              <img :src="require('@/assets/images/icons/ig.svg')" alt="instagram">
              Подписаться на <br>Instagram
            </a>
          </div>
        </div>
        <div class="col-lg-5 disp-none d-lg-block">
          <div class="contacts-image">
            <img :src="require('@/assets/images/contacts-image.png')" alt="man">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppContacts',
  props: ['block']
}
</script>

<style scoped lang="sass">
  .contacts
    padding: 115px 0
    background: linear-gradient(110.56deg, rgba(35, 35, 35, 0.92) 24.57%, rgba(53, 53, 53, 0.8464) 68.58%), #FFFFFF
    color: #ffffff
    overflow: hidden
    &-name
      margin-top: 30px
      margin-bottom: 0
      font-family: "Muller Bold"
      font-size: 24px
    &-address
      font-size: 20px
      margin-top: 10px
      margin-bottom: 30px
      span
        font-family: "Muller Bold"
    &-phone
      font-family: "Muller Bold"
      font-size: 24px
      color: #ffffff
      text-decoration: none
    &-add
      margin-top: 10px
      margin-bottom: 0
      font-size: 20px
    &-buttons
      display: flex
      justify-content: space-between
      margin-top: 40px
      a
        display: flex
        width: 300px
        border: 1px solid #ffffff
        border-radius: 2px
        padding: 10px 35px
        color: #ffffff
        text-decoration: none
        font-size: 20px
        white-space: nowrap
        img
          width: 36px
          height: 36px
          margin: auto 10px auto 0
    &-image
      position: relative
      img
        position: absolute
        right: -100px
        top: -95px

@media (max-width: 1399.98px)
  .contacts
    padding: 90px 0
    &-name
      font-size: 22px
    &-address
      font-size: 18px
    &-phone
      font-size: 22px
    &-add
      font-size: 18px
    &-buttons
      a
        width: 250px
        padding: 10px 20px
        font-size: 18px
        transition: all .3s
        img
          width: 30px
          height: 30px
        &:hover
          background: #ff0000
    &-image
      img
        right: -250px
        top: -70px

@media (max-width: 1199.98px)
  .contacts
    padding: 70px 0

@media (max-width: 991.98px)
  .contacts
    padding: 50px 0
    &-name
      font-size: 20px
    &-address
      font-size: 16px
    &-phone
      font-size: 20px
    &-add
      font-size: 16px
    &-buttons
      a
        font-size: 16px

//@media (max-width: 767.98px)

@media (max-width: 575.98px)
  .contacts
    padding: 30px 0 20px
    &-name
      margin-top: 20px
      font-size: 18px
    &-address
      font-size: 16px
    &-phone
      font-size: 18px
    &-add
      font-size: 16px
    &-buttons
      display: block
      margin-top: 20px
      a
        margin-bottom: 10px
        font-size: 14px

</style>
