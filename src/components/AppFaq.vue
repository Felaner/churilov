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
            <div class="d-flex faq-tab__wrapper" @click="toggleTab(item.id)">
              <button class="faq-tab__button">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="4.5" y1="17.5" x2="31.5" y2="17.5" :stroke="activeTab === item.id ? '#ff0000' : 'black'" stroke-width="3" stroke-linecap="round"/>
                  <path v-if="activeTab !== item.id" d="M18 5L18 31" stroke="black" stroke-width="3" stroke-linecap="round"/>
                  <rect x="0.5" y="0.5" width="35" height="35" rx="1.5" stroke="black"/>
                </svg>

              </button>
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
