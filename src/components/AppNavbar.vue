<template>
  <div
    class="navbar"
    :style="{ padding: !isExpand ? '30px 0' : '5px 0'}"
    :class="{ 'navbar-expand': isExpand }"
  >
    <div class="container">
      <div class="row justify-lg-start justify-between align-center">
        <div class="col-lg-2 col-md-3 col-6 offset-xl-1 d-flex">
          <img class="navbar-logo" :src="require('@/assets/images/logo.svg')" alt="logo">
        </div>
        <div class="col-lg-2 col-md-3 offset-md-1 d-lg-flex disp-none justify-center">
          <div class="navbar-wrapper" :class="{ 'd-flex justify-center': isExpand }">
            <p class="navbar-text" v-if="!isExpand">
              Есть вопросы?<br>
              Свяжитесь с нами:
            </p>
            <div class="navbar-social" :class="{ 'vertical-center': isExpand }">
              <a href="https://api.whatsapp.com/send/?phone=79237249700&text&app_absent=0" target="_blank"><img :src="require('@/assets/images/icons/wa.svg')" alt="whatsapp"></a>
              <a href=""><img :src="require('@/assets/images/icons/tg.svg')" alt="telegram"></a>
            </div>
          </div>
        </div>
        <div class="col-md-2 offset-xl-0 offset-md-1 d-lg-flex disp-none justify-end">
          <a class="navbar-phone" href="tel:+79237249700">
            <img :src="require('@/assets/images/icons/phone.svg')" alt="phone">
            <p>{{ block.phone }}</p>
          </a>
        </div>
        <div class="col-md-3 offset-lg-1 offset-xl-0 d-lg-flex disp-none justify-end">
          <app-button
            :event="'scroll'"
            :type="'calc'"
            :text="'Расчет стоимости'"
            :color="'white'"
          ></app-button>
        </div>
        <div class="col-3 d-flex justify-end d-lg-none">
          <button class="navbar-menu__open" @click.prevent="openMobileMenu">
            <span class="navbar-menu__open-line"></span>
            <span class="navbar-menu__open-line"></span>
            <span class="navbar-menu__open-line"></span>
          </button>
        </div>
      </div>
      <div
        class="row"
        v-if="isExpand"
      >
        <div class="col-lg-12 disp-none d-lg-block">
          <ul class="navbar-menu">
            <li v-for="(item, index) of navItems" :key="index">
              <a href="#" @click.prevent="scrollTo(item.scrollTo)">{{ item.text }}</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-12 disp-none d-lg-block">
          <div class="scrollProgress" :style="{'width': widthScroll + 'px'}"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar__mobile" v-if="menuIsOpen">
    <div class="d-flex justify-between">
      <a class="navbar__mobile-phone" href="tel:+79237249700">
        <img :src="require('@/assets/images/icons/phone.svg')" alt="phone">
        <p>+7 (923) 724-97-00</p>
      </a>
      <button class="navbar__mobile-close" @click.prevent="openMobileMenu"><img :src="require('@/assets/images/icons/close.svg')" alt="close"></button>
    </div>
    <ul class="navbar__mobile-menu">
      <li v-for="(item, index) of navItems" :key="index">
        <a href="#" @click.prevent="scrollTo(item.scrollTo)">{{ item.text }}</a>
        <div class="navbar__mobile-menu__line" :style="{'background-color': activeLink === index ? '#FF0000' : '#ffffff'}"></div>
      </li>
    </ul>
    <div class="navbar__mobile-social">
      <a href="https://api.whatsapp.com/send/?phone=79237249700&text&app_absent=0" target="_blank"><img :src="require('@/assets/images/icons/wa.svg')" alt="whatsapp">WhatsApp</a>
      <a href=""><img :src="require('@/assets/images/icons/tg.svg')" alt="telegram">Telegram</a>
    </div>
    <app-button
      :event="'scroll'"
      :type="'calc'"
      :text="'Расчет стоимости'"
      :color="'white'"
      :align="'center'"
    ></app-button>
  </div>
</template>

<script>

import AppButton from '@/components/AppButton'

export default {
  props: ['block'],
  data () {
    return {
      windowTop: '',
      item: '',
      navItems: [
        { text: 'Главная', scrollTo: 'main' },
        { text: 'Расчет цены', scrollTo: 'calc' },
        { text: 'О компании', scrollTo: 'about' },
        { text: 'Преимущества', scrollTo: 'facts' },
        { text: 'Есть смета', scrollTo: 'price' },
        { text: 'Этапы', scrollTo: 'steps' },
        { text: 'Наши работы', scrollTo: 'portfolio' },
        { text: 'Отзывы', scrollTo: 'reviews' },
        { text: 'Дополнительные услуги', scrollTo: 'services' },
        { text: 'Контакты', scrollTo: 'contacts' }
      ],
      activeLink: 0,
      widthScroll: 0,
      menuIsOpen: false
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      this.windowTop = window.top.scrollY
      if (this.isExpand) {
        this.onScroll()
      }
    })
  },
  methods: {
    onScroll (e) {
      const blocks = document.querySelectorAll('#app > div[data-ref]')
      blocks.forEach((el, index) => {
        if (el.offsetTop - this.navHeight <= this.windowTop) {
          this.activeLink = index
          this.changeWidthScroll()
        }
      })
    },
    changeWidthScroll () {
      let activeLink = 0
      const link = document.querySelectorAll('.navbar-menu > li')[this.activeLink]
      if (link) {
        activeLink = link.getBoundingClientRect().width + link.getBoundingClientRect().left - link.parentNode.offsetLeft
      }
      this.widthScroll = activeLink
    },
    scrollTo (refName) {
      const navbarHeight = document.querySelector('.navbar').clientHeight
      const el = document.querySelector(`[data-ref=${refName}]`)
      window.scrollTo(0, el.offsetTop - navbarHeight)
    },
    openMobileMenu () {
      if (this.menuIsOpen === false) {
        this.menuIsOpen = !this.menuIsOpen
        setTimeout(() => {
          const menu = document.querySelector('.navbar__mobile')
          menu.style.right = '0'
        }, 100)
      } else {
        const menu = document.querySelector('.navbar__mobile')
        menu.style.right = '-100%'
        setTimeout(() => {
          this.menuIsOpen = !this.menuIsOpen
        }, 700)
      }
    }
  },
  computed: {
    isExpand () {
      return this.windowTop > 70
    },
    navHeight () {
      return document.querySelector('.navbar').clientHeight
    }
  },
  components: {
    AppButton
  }
}

</script>

<style scoped lang="sass">
  .navbar
    position: fixed
    width: 100%
    text-align: left
    transition: all 0.6s
    z-index: 10
    &-text
      color: #ffffff
      text-align: center
      padding-bottom: 8px
      margin: 0
      font-size: 14px
      font-family: "Muller Regular", Avenir, Helvetica, Arial, sans-serif
    &-wrapper
      position: relative
    &-social
      display: flex
      justify-content: center
      a
        height: 20px
      a:first-child
        margin-right: 20px
    &-phone
      position: relative
      display: inherit
      font-size: 14px
      color: #ffffff
      text-align: center
      text-decoration: none
      img
        position: absolute
        left: -30px
        top: -5px
      p
        white-space: nowrap
        line-height: 16px

    &-expand
      background: rgba(45, 42, 42, 0.5)

    &-menu
      position: relative
      display: inline-flex
      justify-content: space-between
      list-style: none
      width: 100%
      margin: 5px 0 0
      padding: 0
      a
        font-family: "Muller Regular"
        font-size: 14px
        text-decoration: none
        color: #ffffff
    .scrollProgress
      height: 5px
      border-radius: 2px
      background: red
      transition: all .5s

    &__mobile
      position: fixed
      top: 50%
      transform: translateY(-50%)
      right: -100%
      width: 350px
      padding: 25px 40px
      z-index: 40
      background: rgba(0, 0, 0, 0.95)
      border-radius: 4px
      transition: all .7s
      &-phone
        display: flex
        text-decoration: none
        align-items: center
        p
          font-size: 16px
          white-space: nowrap
          margin-left: 10px
          color: #fff
      &-close
        background: none
        border: none
        cursor: pointer
      &-menu
        list-style: none
        padding: 0
        li
          display: flex
          align-items: center
          font-size: 18px
          margin: 5px 0
          a
            white-space: nowrap
            color: #ffffff
            text-decoration: none
          .navbar__mobile-menu__line
            margin-left: 10px
            width: 100%
            height: 2px
      &-social
        display: flex
        justify-content: space-between
        margin-bottom: 20px
        a
          display: flex
          align-items: center
          color: #ffffff
          text-decoration: none
          img
            margin-right: 10px
            width: 25px

@media (max-width: 1199.98px)
  .navbar
    &-menu
      a
        font-size: 12px

@media (max-width: 991.98px)
  .navbar
    &-phone
      font-size: 12px
    &-menu
      &__open
        display: flex
        flex-direction: column
        justify-content: space-around
        padding: 10px 15px
        background: none
        border: 1px solid #ffffff
        border-radius: 4px
        cursor: pointer
        height: 42px
        &-line
          display: block
          width: 20px
          height: 2px
          background: #ffffff
          border-radius: 2px

//@media (max-width: 767.98px)

@media (max-width: 575.98px)
  .navbar
    &__mobile
      width: 320px
</style>
