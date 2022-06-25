<template>
  <v-form v-if="!loading">
    <h2 class="mb-6">Редактирование блока "О компании"</h2>
    <v-row>
      <v-col cols=12 md=6>
        <v-text-field
          label="Первая строка заголовка"
          v-model="data.title_first"
          required
        ></v-text-field>
      </v-col>
      <v-col cols=12 md=6>
        <v-text-field
          label="Вторая строка заголовка"
          v-model="data.title_last"
          required
        ></v-text-field>
      </v-col>
      <v-col cols=12>
        <h3>Карточки</h3>
      </v-col>
      <v-col cols=12 lg=3 sm="6" v-for="(item, index) of data.card" :key="index">
        <v-text-field
          label="Число"
          v-model="data.card[index].digit"
          required
        ></v-text-field>
        <v-text-field
          label="Текст"
          v-model="data.card[index].text"
          required
        ></v-text-field>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" md="6">
        <v-text-field
          label="Верхний текст"
          v-model="data.header_text_first"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          label="Нижний текст"
          v-model="data.header_text_last"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          label="Подзаголовок"
          v-model="data.subtitle"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea
          label="Текст"
          v-model="data.text"
          required
        ></v-textarea>
      </v-col>
    </v-row>
    <v-btn color="success" @click="$emit('saveData', 'why_we', this.data)">Сохранить</v-btn>
  </v-form>

</template>

<script>
export default {
  name: 'EditWhyWe',
  data () {
    return {
      loading: true,
      data: ''
    }
  },
  async beforeMount () {
    this.data = await this.$store.state.editData.why_we
    this.loading = false
  }
}
</script>

<style scoped>

</style>
