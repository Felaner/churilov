<template>
  <div class="modal-wrapper">
    <div class="modal">
      <div class="modal-header">
        <div class="d-flex justify-between">
          <h2 class="title">{{ block.title }}</h2>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" @click="closeModal">
            <path d="M1.18652 1L19.0001 19" stroke="black" stroke-linecap="round"/>
            <path d="M1 19L18.8136 0.99998" stroke="black" stroke-linecap="round"/>
          </svg>
        </div>
        <p class="subtitle">{{ block.subtitle }}</p>
      </div>
      <div class="modal-body">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="data.name"
            :rules="nameRules"
            label="Имя"
            required
          ></v-text-field>

          <v-text-field
            v-model="data.phone"
            :rules="phoneRules"
            label="Номер телефон"
            required
          ></v-text-field>

          <v-select
            v-model="data.select"
            :items="select"
            :rules="[v => !!v || 'Поле обязательно']"
            label="Выберите услугу"
            hide-details
            required
          ></v-select>

          <v-checkbox
            v-model="data.policy"
            :rules="[v => !!v || 'Обязательное поле']"
            label="Согласен с политикой конфиденциальности"
            hide-details
            required
          ></v-checkbox>
          <v-btn @click="sendForm">Заказать звонок</v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AppModal',
  props: ['block'],
  data () {
    return {
      valid: true,
      data: {
        select: 'не выбрано',
        name: '',
        phone: '',
        policy: false
      },
      nameRules: [
        v => !!v || 'Имя обязательно',
        v => (v && v.length >= 2) || 'Имя не может содержать менее двух символов'
      ],
      phoneRules: [
        v => !!v || 'Номер телефона обязателен',
        v => /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(v) || 'Номер не корректный'
      ],
      select: [
        'Записаться на экскурсию', 'Смета на Ремонт под ключ',
        'Смета на Дизайн и проектирование', 'Смета на Строительство под ключ',
        'Смета на Штукатурку стен и фасадов', 'Смета на Стяжку пола полусухая',
        'Смета на Натяжной потолок'
      ]
    }
  },
  methods: {
    closeModal () {
      this.$store.state.modalIsOpen = false
    },
    sendForm () {
      console.log(this.data)
    }
  }
}
</script>

<style scoped lang="sass">
  .modal-wrapper
    position: fixed
    width: 100%
    height: 100%
    z-index: 100
    background: rgba(0, 0, 0, 0.7)
  .modal
    position: fixed
    width: 50%
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    padding: 35px
    background: #ffffff
    box-shadow: 0 4px 35px rgba(0, 0, 0, 0.2)
    border-radius: 4px
    z-index: 1000
    h2
      margin: 0
      font-size: 24px
    .subtitle
      margin-bottom: 10px
    .help-text
      color: #ff0000
      font-size: 16px

    svg
      cursor: pointer

@media (max-width: 1199.98px)
  .modal
    width: 60%

@media (max-width: 991.98px)
  .modal
    width: 70%
    padding: 50px

//@media (max-width: 767.98px)

@media (max-width: 575.98px)
  .modal
    width: 100%
    padding: 30px
</style>
