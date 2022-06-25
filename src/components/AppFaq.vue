<template>
  <div class="faq">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 col-lg-12 offset-xl-1">
          <h2 class="title mb-3">{{ block.title_first }}<br>{{ block.title_last }}</h2>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="i in faq"
              :key="i.id"
            >
              <v-expansion-panel-title>
                {{ i.quest }}
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                {{ i.answer }}
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFaq',
  props: ['block'],
  data () {
    return {
      faq: this.block.quests,
      activeTab: 0
    }
  },
  methods: {
    toggleTab (id) {
      this.activeTab === id ? this.activeTab = 0 : this.activeTab = id
    }
  }
}
</script>

<style scoped lang="sass">
  .faq
    padding: 70px 0
    &-tab
      font-family: "Muller Regular"
      font-size: 20px
      max-height: 100%
      transition: max-height 0.5s
      &__wrapper
        position: relative
        cursor: pointer
      &__button
        position: absolute
        top: 46%
        left: 0
        transform: translateY(-50%)
        background: none
        border: none
        cursor: pointer
        svg
          width: 16px
          height: 16px
      &__quest
        margin: 7px 0 7px 25px
      &__answer
        margin-top: 5px
        margin-left: 25px
      &__active
        .faq-tab__quest
          font-family: "Muller Bold"

  .nested-enter-active
    .inner
      transition: all 0.3s ease-in-out

  .nested-enter-from
    .inner
      transform: translateX(30px)
      opacity: 0
  .nested-leave-to
    .inner
      display: none

  //@media (max-width: 1399.98px)

  //@media (max-width: 1199.98px)

@media (max-width: 991.98px)
  .faq
    padding: 50px 0
    &-tab
      font-size: 18px

  //@media (max-width: 767.98px)

@media (max-width: 575.98px)
  .faq
    padding: 30px 0
    &-tab
      font-size: 18px
      &__answer
        font-size: 16px
      &__button
        span
          top: 47%
          left: 47%
</style>
