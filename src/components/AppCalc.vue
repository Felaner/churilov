<template>
  <div class="calc">
    <div class="calc-progressbar">
      <div class="calc-progressbar__progress"></div>
      <p>Шаг 1 из 6</p>
    </div>
    <form class="calc-quest-box row m-0">
      <div class="calc-content" v-for="item of quests" :key="item.id" v-show="active === item.id">
        <p class="calc-quest p-0">{{ item.quest }}</p>
        <div class="col-sm-4 col-12 text-center" v-for="(el, index) of item.variants" :key="index">
          <img class="calc-quest__answer-img" :src="el.img" alt="var1">
          <p class="calc-answer">{{ el.text }}</p>
        </div>
        <div class="btn-wrapper d-flex justify-sm-start justify-between">
          <button class="calc-quest__prev d-flex" @click.prevent="active--" :disabled="active === 1">
            Назад
          </button>
          <button class="calc-quest__next d-flex" @click.prevent="active++" :disabled="active === quests.length">
            Далее
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AppCalc',
  data () {
    return {
      active: 1,
      quests: [
        {
          id: 1,
          quest: 'Вопрос 1',
          variants: [
            {
              text: 'Вариант 1',
              img: ''
            },
            {
              text: 'Вариант 2',
              img: ''
            }, {
              text: 'Вариант 3',
              img: ''
            }]
        },
        {
          id: 2,
          quest: 'Вопрос 2',
          variants: [
            {
              text: 'Вариант 1',
              img: ''
            },
            {
              text: 'Вариант 2',
              img: ''
            }, {
              text: 'Вариант 3',
              img: ''
            }]
        }
      ]
    }
  }
}
</script>

<style scoped lang="sass">
.calc
  padding: 20px
  background: #ffffff
  border-radius: 4px

  &-progressbar
    position: relative
    height: 25px
    border: 1px solid #000000
    border-radius: 4px

    &__progress
      position: absolute
      background: #FF0000
      width: 20%
      left: 0
      top: 0
      bottom: 0
      border-radius: 4px

    p
      font-family: "Muller Regular"
      text-align: center
      margin: 3px 0

  &-quest-box
    .btn-wrapper
      margin-top: 30px

  &-quest
    font-family: "Muller Medium"
    font-size: 30px
    margin-top: 40px

    &__prev
      padding: 11px 45px
      border: 1px solid #000000
      border-radius: 2px
      background: none
      font-family: "Muller Medium"
      font-size: 14px

    &__next
      margin-left: 15px
      padding: 11px 45px
      border: 1px solid #000000
      border-radius: 2px
      background: none
      font-family: "Muller Medium"
      font-size: 14px

  &-answer
    text-align: center
    margin: 10px 0 0
    font-family: "Muller Regular"
    font-size: 18px

//@media (max-width: 1399.98px)

//@media (max-width: 1199.98px)

@media (max-width: 991.98px)
  .calc
    &-progressbar
      height: 20px

    &-quest
      font-size: 26px
      margin-top: 30px

    &-answer
      font-size: 18px

@media (max-width: 767.98px)
  .calc
    &-progressbar
      p
        margin: 0

    &-quest
      font-size: 24px
      margin-top: 25px

      &__answer
        &-img
          width: 100%

@media (max-width: 575.98px)
  .calc
    padding: 25px 17px

    .col-12
      padding: 0

    &-progressbar
      p
        font-size: 14px
        margin: 2px 0

    &-quest
      padding: 0
      font-size: 22px
      margin-top: 30px
      margin-bottom: 15px

    &-answer
      margin: 10px 0 18px
      font-size: 18px
</style>
