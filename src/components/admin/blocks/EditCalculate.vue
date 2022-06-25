<template>
  <v-form v-if="!loading">
    <h2 class="mb-6">Редактирование блока "Калькулятор"</h2>
    <v-row>
      <v-col cols=12>
        <v-text-field
          label="Заголовок"
          v-model="data.title"
          required
        ></v-text-field>
      </v-col>
      <v-col cols=12>
        <v-textarea
          label="Подзаголовок"
          v-model="data.subtitle"
          required
        ></v-textarea>
      </v-col>
      <v-col cols=12 lg=6>
        <v-textarea
          label="Верхний текст в калькуляторе"
          v-model="data.calc_text"
          required
        ></v-textarea>
      </v-col>
      <v-col cols=12 lg=6>
        <v-textarea
          label="Нижний текст в калькуляторе"
          v-model="data.calc_subtext"
          required
        ></v-textarea>
      </v-col>
    </v-row>
    <v-btn color="success" @click="$emit('saveData', 'price', this.data)">Сохранить</v-btn>
  </v-form>

</template>

<script>
export default {
  name: 'EditCalculate',
  data () {
    return {
      loading: true,
      data: ''
    }
  },
  async beforeMount () {
    this.data = await this.$store.state.editData.price
    this.loading = false
  }
}
</script>

<style scoped>

</style>
