<template>
  <div class="form-block">
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-lg-6 offset-xl-1">
          <h2 class="title">Не на все вопросы <br class="d-none d-lg-block">получили ответ?</h2>
          <p class="subtitle">напишите нам ваш вопрос и мы максимально быстро вам ответим</p>
          <form action="/" class="form" @submit.prevent="sendForm">
            <input v-model="data.quest" name="quest" type="text" placeholder="Напишите ваш вопрос">
            <input v-model="data.name" name="name" type="text" placeholder="Ваше имя">
            <input v-model="data.phone" name="phone" type="text" placeholder="Ваш номер телефона">
            <div class="checkbox-wrapper">
              <input v-model="data.policy" name="policy" type="checkbox" id="policy">
              <label for="policy">Я согласен с политикой конфиденциальности</label>
            </div>
            <app-button
              :type="'order'"
              :text="'Отправить вопрос'"
              :bg-none="true"
            ></app-button>
          </form>
        </div>
        <div class="col-xl-4 col-lg-5 offset-xl-1 d-lg-block d-none">
          <img src="@/assets/images/form-block-img.jpg" alt="image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
export default {
  name: 'AppFormBlock',
  components: { AppButton },
  data () {
    return {
      data: {
        quest: '',
        name: '',
        phone: '',
        policy: false
      }
    }
  },
  methods: {
    sendForm () {
      console.log(this.data)
    }
  }
}
</script>

<style scoped lang="sass">
  .form-block
    padding: 70px 0
    background: #1B1B1B
    color: #ffffff
    .subtitle
      margin-bottom: 30px
    .form
      input[type='text']
        width: 100%
        height: 55px
        margin-bottom: 10px
        padding: 0 30px
        border: 1px solid rgba(255, 255, 255, 0.8)
        border-radius: 2px
        background: none
        color: #ffffff
        font-size: 20px
        &::placeholder
          font-size: 16px
          color: rgba(255, 255, 255, 0.5)
      .checkbox-wrapper
        display: flex
        margin: 5px 0 15px 0
        label
          position: relative
          padding-left: 25px
        input[type='checkbox']
          position: absolute
          z-index: -1
          opacity: 0
          background: none
          &+label::before
            content: ''
            position: absolute
            display: inline-block
            left: 0
            width: 18px
            height: 18px
            flex-shrink: 0
            flex-grow: 0
            border: 1px solid #adb5bd
            border-radius: 0.25em
            background-repeat: no-repeat
            background-position: center center
            background-size: 50% 50%
          &:checked+label::before
            background-image: url("@/assets/images/icons/checked.svg")

  //@media (max-width: 1399.98px)

  //@media (max-width: 1199.98px)

@media (max-width: 991.98px)
  .form-block
    padding: 50px 0
  //@media (max-width: 767.98px)

@media (max-width: 575.98px)
  .form-block
    padding: 30px 0
    .title
      margin-bottom: 10px
    .subtitle
      margin-top: 0
      margin-bottom: 20px
    .form
      .checkbox-wrapper
        margin-bottom: 20px
</style>
