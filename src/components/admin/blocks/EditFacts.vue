<template>
  <v-form v-if="!loading">
    <h2 class="mb-6">Редактирование блока "Факты"</h2>
    <v-row>
      <v-col cols=12 md=4>
        <v-text-field
          label="Первая строка заголовка"
          v-model="data.title_first"
          required
        ></v-text-field>
      </v-col>
      <v-col cols=12 md=4>
        <v-text-field
          label="Вторая строка заголовка"
          v-model="data.title_middle"
          required
        ></v-text-field>
      </v-col>
      <v-col cols=12 md=4>
        <v-text-field
          label="Третья строка заголовка"
          v-model="data.title_last"
          required
        ></v-text-field>
      </v-col>
      <v-col cols=12>
        <v-text-field
          label="Второй заголовок"
          v-model="data.subtitle"
          required
        ></v-text-field>
      </v-col>
      <v-col cols=12>
        <v-text-field
          label="Подзаголовок"
          v-model="data.text"
          required
        ></v-text-field>
      </v-col>
      <v-col cols=12>
        <h3>Факты</h3>
      </v-col>
      <v-col cols=12 md=4 sm=6 v-for="(item, index) of data.facts" :key="index">
        <v-textarea
          :label="(index + 1) + ' факт'"
          v-model="data.facts[index]"
          required
        ></v-textarea>
      </v-col>

      <v-col cols="12">
        <h3>Карточки</h3>
      </v-col>

      <v-col cols=12 md="6" v-for="(item, index) of data.cards" :key="index">
        <v-card>
          <v-card-content>
            <v-text-field
              label="Заголовок"
              v-model="data.cards[index].title"
              required
            ></v-text-field>
            <v-textarea
              label="Текст"
              v-model="data.cards[index].text"
              required
            ></v-textarea>
          </v-card-content>
        </v-card>
      </v-col>
    </v-row>
    <v-btn class="mt-6" color="success" @click="$emit('saveData', 'facts', this.data)">Сохранить</v-btn>
  </v-form>

</template>

<script>
export default {
  name: 'EditFacts',
  data () {
    return {
      loading: true,
      data: ''
    }
  },
  async beforeMount () {
    this.data = await this.$store.state.editData.facts
    this.loading = false
  }
}
</script>

<style scoped>

</style>
