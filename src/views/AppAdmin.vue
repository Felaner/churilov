<template>
  <v-app>
    <admin-navbar></admin-navbar>
    <v-row>
      <v-col
        cols=auto
        class="pb-0"
      >
        <v-navigation-drawer theme="dark" class="position-relative mt-0 h-100">
          <v-list>
            <v-list-group>
              <template v-slot:activator="{ props }">
                <v-list-item prepend-icon="mdi-view-dashboard" v-bind="props" title="Блоки" value="Блоки"></v-list-item>
              </template>
              <router-link v-for="(item, index) of blockList" :key="index" :to="{ name: item.name }">
                <v-list-item :title="item.title" :value="item.value"></v-list-item>
              </router-link>
            </v-list-group>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col cols=max>
        <v-container>
          <router-view :data="blocks" @saveData="saveData"></router-view>
        </v-container>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import AdminNavbar from '@/components/admin/AdminNavbar'

export default {
  name: 'AppAdmin',
  props: ['blocks'],
  data () {
    return {
      blockList: [
        { name: 'editNavbar', title: 'Навигационное меню', value: 'navbar' },
        { name: 'editModal', title: 'Модальное окно', value: 'modal' },
        { name: 'editMain', title: 'Главный экран', value: 'main' },
        { name: 'editCalculate', title: 'Калькулятор', value: 'calculate' },
        { name: 'editWhyWe', title: 'Почему мы?', value: 'why_we' },
        { name: 'editFacts', title: 'Факты', value: 'facts' },
        { name: 'editWant', title: 'Есть смета', value: 'want' },
        { name: 'editSteps', title: 'Этапы', value: 'steps' },
        { name: 'editPortfolio', title: 'Портфолио', value: 'portfolio' },
        { name: 'editExcursion', title: 'Экскурсия', value: 'excursion' },
        { name: 'editReviews', title: 'Отзывы', value: 'reviews' },
        { name: 'editAddServices', title: 'Дополнительные услуги', value: 'add_services' },
        { name: 'editContacts', title: 'Контакты', value: 'contacts' },
        { name: 'editFaq', title: 'FAQ', value: 'faq' },
        { name: 'editFormBlock', title: 'Форма', value: 'form_block' },
        { name: 'editFooter', title: 'Подвал', value: 'footer' }
      ]
    }
  },
  methods: {
    async saveData (block, data) {
      await this.$store.dispatch('updateTexts', { block: block, docData: data })
      this.$notify({ type: 'success', text: 'Сохранено' })
    }
  },
  components: { AdminNavbar }
}
</script>

<style scoped lang="sass">
.navigation-side
  height: 100%
a
  color: #ffffff
  text-decoration: none
</style>
