<template>
  <div class="calc">
    <div class="calc-progressbar">
      <div class="calc-progressbar__progress"></div>
      <p>Шаг 1 из 6</p>
    </div>
    <form class="calc-quest-box row m-0">
      <p class="calc-quest p-0">Вопрос</p>
      <div class="col-sm-4 col-12 text-center">
        <img class="calc-quest__answer-img" src="@/assets/images/q1-var1.png" alt="var1">
        <p class="calc-answer">Вариант 1</p>
      </div>
      <div class="col-sm-4 col-12 text-center">
        <img class="calc-quest__answer-img" src="@/assets/images/q1-var2.png" alt="var2">
        <p class="calc-answer">Вариант 2</p>
      </div>
      <div class="col-sm-4 col-12 text-center">
        <img class="calc-quest__answer-img" src="@/assets/images/q1-var3.png" alt="var3">
        <p class="calc-answer">Вариант 3</p>
      </div>
      <div class="btn-wrapper d-flex justify-sm-start justify-between">
        <button class="calc-quest__prev d-flex">
          Назад
        </button>
        <button class="calc-quest__next d-flex">
          Далее
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AppCalc'
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
