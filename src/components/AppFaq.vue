<template>
  <div class="faq">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 col-lg-12 offset-xl-1">
          <h2 class="title mb-3">Ответы на частые<br>вопросы</h2>
          <div
            class="faq-tab"
            :class="{ 'faq-tab__active': activeTab === item.id }"
            v-for="item of faq"
            :key="item.id"
          >
            <div class="d-flex faq-tab__wrapper">
              <button class="faq-tab__button" @click="toggleTab(item.id)"><span>+</span></button>
              <p class="faq-tab__quest">{{ item.quest }}</p>
            </div>
            <transition name="nested" :duration="550">
              <div v-if="activeTab === item.id" class="outer">
                <div class="inner">
                  <p class="faq-tab__answer">{{ item.answer }}</p>
                </div>
              </div>
            </transition>
            <div class="divider"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFaq',
  data () {
    return {
      faq: [
        { id: 1, quest: 'Как происходит процесс работы ремонта под ключ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum eius eveniet facere fuga, harum incidunt obcaecati quas rem ut.' },
        { id: 2, quest: 'Как происходит процесс работы ремонта под ключ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum eius eveniet facere fuga, harum incidunt obcaecati quas rem ut.' },
        { id: 3, quest: 'Как происходит процесс работы ремонта под ключ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum eius eveniet facere fuga, harum incidunt obcaecati quas rem ut.' },
        { id: 4, quest: 'Как происходит процесс работы ремонта под ключ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum eius eveniet facere fuga, harum incidunt obcaecati quas rem ut.' },
        { id: 5, quest: 'Как происходит процесс работы ремонта под ключ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum eius eveniet facere fuga, harum incidunt obcaecati quas rem ut.' },
        { id: 6, quest: 'Как происходит процесс работы ремонта под ключ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum eius eveniet facere fuga, harum incidunt obcaecati quas rem ut.' },
        { id: 7, quest: 'Как происходит процесс работы ремонта под ключ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum eius eveniet facere fuga, harum incidunt obcaecati quas rem ut.' },
        { id: 8, quest: 'Как происходит процесс работы ремонта под ключ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum eius eveniet facere fuga, harum incidunt obcaecati quas rem ut.' },
        { id: 9, quest: 'Как происходит процесс работы ремонта под ключ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum eius eveniet facere fuga, harum incidunt obcaecati quas rem ut.' },
        { id: 10, quest: 'Как происходит процесс работы ремонта под ключ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorum eius eveniet facere fuga, harum incidunt obcaecati quas rem ut.' }
      ],
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
      &__button
        position: absolute
        top: 46%
        left: 0
        transform: translateY(-50%)
        width: 16px
        height: 16px
        border: 1px solid #000000
        background: none
        cursor: pointer
        span
          line-height: 0
          position: absolute
          top: 45%
          left: 45%
          transform: translate(-50%)
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
</style>
