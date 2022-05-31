<template>
  <div class="reason-card" :style="{ height: reasonHeight}">
    <p class="reason-card__digit">{{ reasonDigit }}</p>
    <p class="reason-card__text">{{ reasonText }}</p>
  </div>
</template>

<script>
export default {
  name: 'AppReasonCard',
  props: ['reasonHeight', 'reasonDigit', 'reasonText']
}
</script>

<style scoped lang="sass">
  .reason-card
    padding: 20px 20px 30px
    border: 1px solid #000000
    border-radius: 2px
    &__digit
      position: relative
      font-family: "Muller Bold"
      font-size: 30px
      color: #FF0000
      margin-top: 0
      margin-bottom: 0
      &::after
        content: ''
        position: absolute
        top: 40%
        margin-left: 5px
        height: 1px
        width: 40px
        background-color: rgba(0, 0, 0, 0.7)
    &__text
      font-family: "Muller Regular"
      font-size: 18px
      margin-top: 10px
      margin-bottom: 0
</style>
