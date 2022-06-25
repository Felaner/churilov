<template>
 <div class="fact-card">
   <div class="fact-card__wrapper">
     <img class="fact-card__image" :src="fact.image" alt="image">
     <div class="divider"></div>
     <h3 class="fact-card__title">
       {{ fact.title }}
     </h3>
     <p class="fact-card__text">
       {{ fact.text }}
     </p>
   </div>
 </div>
</template>

<script>
export default {
  name: 'AppFactCard',
  props: ['fact']
}
</script>

<style scoped lang="sass">
  .fact-card
    position: relative
    background: rgba(96, 96, 96, 0.2)
    margin-bottom: 25px
    padding: 4px
    border: 1px solid rgba(0, 0, 0, 0.6)
    border-radius: 4px
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2)
    .divider
      margin: 10px 0
    &__wrapper
      height: 100%
      background: #ffffff
      padding: 185px 33px 20px 33px
      border-radius: 4px
    &__image
      position: absolute
      top: -35px
      left: 50%
      transform: translateX(-50%)
    &__title
      font-family: "Muller Bold"
      font-size: 24px
      margin-bottom: 10px
    &__text
      margin: 0
      font-family: "Muller Regular"
      font-size: 20px

@media (max-width: 1399.98px)
  .fact-card
    &__title
      font-size: 22px
    &__text
      font-size: 20px

//@media (max-width: 1199.98px)

@media (max-width: 991.98px)
  .fact-card
    &__image
      transform: translateX(-50%) scale(0.8)
    &__title
      font-size: 20px
    &__text
      font-size: 18px

  //@media (max-width: 767.98px)

@media (max-width: 575.98px)
  .fact-card
    &__image
      transform: translateX(-50%) scale(0.7)
    &__title
      font-size: 18px
    &__text
      font-size: 16px
</style>
