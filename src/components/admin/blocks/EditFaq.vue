<template>
  <v-form v-if="!loading">
    <h2 class="mb-6">Редактирование блока "Ответы на частые вопросы"</h2>
    <v-text-field
      label="Верхний текст заголовока"
      v-model="data.title_first"
      required
    ></v-text-field>
    <v-text-field
      label="Нижний текст заголовока"
      v-model="data.title_last"
      required
    ></v-text-field>
    <v-row>
      <v-col cols="12" lg="4" sm="6" v-for="(item, index) of data.quests" :key="index">
        <v-card>
          <v-card-content>
            <v-text-field
              label="Вопрос"
              v-model="data.quests[index].quest"
              required
            ></v-text-field>
            <v-textarea
              label="Ответ"
              v-model="data.quests[index].answer"
              required
            ></v-textarea>
            <v-btn color="error" @click="removeFaq(index)">Удалить</v-btn>
          </v-card-content>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" sm="6">
        <v-card>
          <v-card-content>
            <v-text-field
              label="Вопрос"
              v-model="faq.quest"
              required
            ></v-text-field>
            <v-textarea
              label="Ответ"
              v-model="faq.answer"
              required
            ></v-textarea>
            <v-btn color="success" @click="addFaq">Добавить</v-btn>
          </v-card-content>
        </v-card>
      </v-col>
    </v-row>
    <v-btn class="mt-6" color="success" @click="$emit('saveData', 'faq', this.data)">Сохранить</v-btn>
  </v-form>

</template>

<script>
export default {
  name: 'EditFaq',
  data () {
    return {
      loading: true,
      data: '',
      faq: {
        quest: '',
        answer: ''
      }
    }
  },
  async beforeMount () {
    this.data = await this.$store.state.editData.faq
    this.loading = false
  },
  methods: {
    clearData () {
      this.faq = {
        quest: '',
        answer: ''
      }
    },
    async addFaq () {
      await this.data.quests.push(this.faq)
      this.clearData()
    },
    removeFaq (index) {
      this.data.quests.splice(index, 1)
      this.$notify({ type: 'success', text: 'Вопрос-ответ удален' })
    }
  }
}
</script>

<style scoped>

</style>
