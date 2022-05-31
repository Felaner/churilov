<template>
  <div class="modal">
    <div class="modal-header">
      <div class="d-flex justify-between">
        <h2 class="title">Заказать услугу</h2>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" @click="closeModal">
          <path d="M1.18652 1L19.0001 19" stroke="black" stroke-linecap="round"/>
          <path d="M1 19L18.8136 0.99998" stroke="black" stroke-linecap="round"/>
        </svg>
      </div>
      <p class="subtitle">оставьте заявку и наш специалист максимально быстро вам ответит</p>
      <p class="help-text">Выберите услугу</p>
    </div>
    <div class="modal-body">
      <form action="">
        <div class="select-wrapper">
          <select name="" id="" v-model="data.select">
            <option value="не выбрано" selected="selected" disabled>Выберите</option>
            <option :value="option.text" v-for="(option, index) of select" :key="index">
              {{ option.text }}
            </option>
          </select>
        </div>
        <input v-model="data.name" name="name" type="text" placeholder="Ваше имя">
        <input v-model="data.phone" name="phone" type="text" placeholder="Ваш номер телефона">
        <div class="checkbox-wrapper">
          <input v-model="data.policy" name="policy" type="checkbox" id="policy">
          <label for="policy">Я согласен с политикой конфиденциальности</label>
        </div>
        <app-button
          :type="'order'"
          :text="'Заказать услугу'"
        ></app-button>
      </form>
    </div>
  </div>
</template>

<script>

import AppButton from '@/components/AppButton'

export default {
  name: 'AppModal',
  data () {
    return {
      data: {
        select: 'не выбрано',
        name: '',
        phone: '',
        policy: false
      },
      select: [
        { text: 'Записаться на экскурсию' },
        { text: 'Смета на Ремонт под ключ' },
        { text: 'Смета на Дизайн и проектирование' },
        { text: 'Смета на Строительство под ключ' },
        { text: 'Смета на Штукатурку стен и фасадов' },
        { text: 'Смета на Стяжку пола полусухая' },
        { text: 'Смета на Натяжной потолок' }
      ]
    }
  },
  methods: {
    closeModal () {
      this.$root.modalIsOpen = false
    }
  },
  components: {
    AppButton
  }
}
</script>

<style scoped lang="sass">
  .modal
    position: fixed
    width: 50%
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    z-index: 1000
    padding: 70px
    background: #ffffff
    box-shadow: 0 4px 35px rgba(0, 0, 0, 0.2)
    h2
      margin: 0
    .subtitle
      margin-bottom: 10px
    .help-text
      color: #ff0000
      font-size: 16px

    svg
      cursor: pointer

    .select-wrapper
      position: relative

    .select-wrapper::after
      content: "▼"
      font-size: 1rem
      right: 30px
      position: absolute
      top: 50%
      transform: translateY(-61%)

    select
      -webkit-appearance: none
      -moz-appearance: none
      -ms-appearance: none
      appearance: none !important

    input[type='text'], select
      width: 100%
      height: 55px
      margin-bottom: 10px
      padding: 0 30px
      border: 1px solid rgba(0, 0, 0, 0.8)
      border-radius: 2px
      background: none
      color: #000000
      font-size: 20px
      &::placeholder
        font-size: 16px
        color: rgba(0, 0, 0, 0.5)

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

        & + label::before
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

        &:checked + label::before
          background-image: url("@/assets/images/icons/checked.svg")

@media (max-width: 1199.98px)
  .modal
    width: 60%

@media (max-width: 991.98px)
  .modal
    width: 70%
    padding: 50px
    input[type='text'], select
      height: 45px
      padding: 0 25px
      font-size: 18px
      &::placeholder
        font-size: 16px

//@media (max-width: 767.98px)

@media (max-width: 575.98px)
  .modal
    width: 100%
    padding: 30px
    input[type='text'], select
      height: 45px
      padding: 0 15px
      font-size: 14px
      &::placeholder
        font-size: 14px

    .select-wrapper::after
      right: 10px
</style>
